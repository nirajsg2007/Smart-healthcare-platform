CREATE TABLE public.profiles (id uuid PRIMARY KEY, full_name text NOT NULL, email text, phone text, date_of_birth date, gender text, city text, user_type text NOT NULL DEFAULT 'patient', blood_group text, allergies text[] NOT NULL DEFAULT '{}', existing_conditions text[] NOT NULL DEFAULT '{}', current_medications text[] NOT NULL DEFAULT '{}', emergency_contact text, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles are visible to their owner" ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid());
CREATE POLICY "Users can create their profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "Users can update their profile" ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

CREATE TABLE public.user_roles (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL, role text NOT NULL CHECK (role IN ('patient','doctor','laboratory_staff','medical_store','hospital_staff','nurse','hospital_admin','super_admin')), UNIQUE (user_id, role));
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE TABLE public.doctors (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, specialty text NOT NULL, hospital text NOT NULL, location text NOT NULL, experience_years integer NOT NULL DEFAULT 0, consultation_fee numeric(10,2) NOT NULL DEFAULT 0, rating numeric(2,1) NOT NULL DEFAULT 0, languages text[] NOT NULL DEFAULT '{}', availability text NOT NULL DEFAULT 'Available', bio text, created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT ON public.doctors TO anon, authenticated;
GRANT ALL ON public.doctors TO service_role;
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Doctors directory is public" ON public.doctors FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.hospitals (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, location text NOT NULL, distance_km numeric(5,2), emergency_status text NOT NULL DEFAULT 'Available', facilities text[] NOT NULL DEFAULT '{}', phone text, working_hours text, total_beds integer NOT NULL DEFAULT 0, available_beds integer NOT NULL DEFAULT 0, icu_beds integer NOT NULL DEFAULT 0, available_icu_beds integer NOT NULL DEFAULT 0, emergency_beds integer NOT NULL DEFAULT 0, available_emergency_beds integer NOT NULL DEFAULT 0, doctors_available integer NOT NULL DEFAULT 0, nurses_available integer NOT NULL DEFAULT 0, ambulances_available integer NOT NULL DEFAULT 0, demo_data boolean NOT NULL DEFAULT true, updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT ON public.hospitals TO anon, authenticated;
GRANT ALL ON public.hospitals TO service_role;
ALTER TABLE public.hospitals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Hospital directory is public" ON public.hospitals FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.labs (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, location text NOT NULL, distance_km numeric(5,2), rating numeric(2,1) NOT NULL DEFAULT 0, opening_hours text, home_collection boolean NOT NULL DEFAULT false, available_tests text[] NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT ON public.labs TO anon, authenticated;
GRANT ALL ON public.labs TO service_role;
ALTER TABLE public.labs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lab directory is public" ON public.labs FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.medical_stores (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, location text NOT NULL, distance_km numeric(5,2), phone text, opening_hours text, is_open boolean NOT NULL DEFAULT true, created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT ON public.medical_stores TO anon, authenticated;
GRANT ALL ON public.medical_stores TO service_role;
ALTER TABLE public.medical_stores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Medical store directory is public" ON public.medical_stores FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.appointments (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), patient_id uuid NOT NULL, doctor_id uuid REFERENCES public.doctors(id) ON DELETE SET NULL, doctor_name text NOT NULL, appointment_type text NOT NULL, appointment_date date NOT NULL, appointment_time text NOT NULL, reason text, status text NOT NULL DEFAULT 'Upcoming', created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.appointments TO authenticated;
GRANT ALL ON public.appointments TO service_role;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Patients can view their appointments" ON public.appointments FOR SELECT TO authenticated USING (patient_id = auth.uid());
CREATE POLICY "Patients can create appointments" ON public.appointments FOR INSERT TO authenticated WITH CHECK (patient_id = auth.uid());
CREATE POLICY "Patients can update their appointments" ON public.appointments FOR UPDATE TO authenticated USING (patient_id = auth.uid()) WITH CHECK (patient_id = auth.uid());
CREATE POLICY "Patients can delete their appointments" ON public.appointments FOR DELETE TO authenticated USING (patient_id = auth.uid());

CREATE TABLE public.lab_reports (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), patient_id uuid NOT NULL, test_name text NOT NULL, lab_name text NOT NULL, booking_date date NOT NULL, status text NOT NULL DEFAULT 'Test Booked', report_url text, created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lab_reports TO authenticated;
GRANT ALL ON public.lab_reports TO service_role;
ALTER TABLE public.lab_reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Patients can manage their lab reports" ON public.lab_reports FOR ALL TO authenticated USING (patient_id = auth.uid()) WITH CHECK (patient_id = auth.uid());

CREATE TABLE public.ai_chat_sessions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), patient_id uuid NOT NULL, title text NOT NULL DEFAULT 'Health check-in', created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_chat_sessions TO authenticated;
GRANT ALL ON public.ai_chat_sessions TO service_role;
ALTER TABLE public.ai_chat_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Patients can manage their chat sessions" ON public.ai_chat_sessions FOR ALL TO authenticated USING (patient_id = auth.uid()) WITH CHECK (patient_id = auth.uid());

CREATE TABLE public.ai_chat_messages (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), session_id uuid NOT NULL REFERENCES public.ai_chat_sessions(id) ON DELETE CASCADE, patient_id uuid NOT NULL, role text NOT NULL CHECK (role IN ('user','assistant','system')), content text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_chat_messages TO authenticated;
GRANT ALL ON public.ai_chat_messages TO service_role;
ALTER TABLE public.ai_chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Patients can manage their chat messages" ON public.ai_chat_messages FOR ALL TO authenticated USING (patient_id = auth.uid()) WITH CHECK (patient_id = auth.uid());

CREATE TABLE public.notifications (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL, title text NOT NULL, message text NOT NULL, type text NOT NULL DEFAULT 'info', read_at timestamptz, created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their notifications" ON public.notifications FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE INDEX doctors_specialty_idx ON public.doctors (specialty);
CREATE INDEX hospitals_location_idx ON public.hospitals (location);
CREATE INDEX labs_location_idx ON public.labs (location);
CREATE INDEX appointments_patient_idx ON public.appointments (patient_id, appointment_date);
CREATE INDEX lab_reports_patient_idx ON public.lab_reports (patient_id, created_at);

INSERT INTO public.doctors (name, specialty, hospital, location, experience_years, consultation_fee, rating, languages, availability, bio) VALUES
('Dr. Aisha Verma','Cardiology','City Care Hospital','Bengaluru',12,800,4.9,ARRAY['English','Hindi','Kannada'],'Available','Cardiologist focused on preventive heart health and accessible care.'),
('Dr. Rohan Mehta','Neurology','St. Mary Medical Center','Bengaluru',15,1200,4.8,ARRAY['English','Hindi'],'Available','Neurologist specializing in migraine and stroke recovery.'),
('Dr. Maya Iyer','Dermatology','Riverside Clinic','Bengaluru',9,650,4.7,ARRAY['English','Tamil','Kannada'],'Available','Dermatologist for skin, hair and allergy concerns.'),
('Dr. Arjun Rao','Orthopedics','City Care Hospital','Bengaluru',18,1000,4.9,ARRAY['English','Hindi','Telugu'],'Limited','Orthopedic surgeon with a focus on mobility and sports injuries.'),
('Dr. Sara Khan','Pediatrics','Hope Children Hospital','Bengaluru',11,700,4.8,ARRAY['English','Hindi','Urdu'],'Available','Pediatrician supporting newborn and adolescent health.'),
('Dr. Vikram Shah','General Medicine','Metro Health Hub','Bengaluru',10,500,4.6,ARRAY['English','Hindi','Gujarati'],'Available','Primary care physician for everyday health needs.'),
('Dr. Nisha Thomas','Gynecology','St. Mary Medical Center','Bengaluru',14,950,4.9,ARRAY['English','Malayalam','Hindi'],'Available','Women’s health and maternal care specialist.'),
('Dr. Kunal Desai','ENT','Riverside Clinic','Bengaluru',8,600,4.5,ARRAY['English','Hindi'],'Offline','ENT specialist for hearing, sinus and throat conditions.'),
('Dr. Leena Kapoor','Endocrinology','City Care Hospital','Bengaluru',16,1100,4.8,ARRAY['English','Hindi'],'Available','Diabetes and thyroid care with a patient-first approach.'),
('Dr. Aditya Bose','Psychiatry','Mindwell Hospital','Bengaluru',13,900,4.7,ARRAY['English','Bengali','Hindi'],'Available','Confidential support for mood, sleep and stress.'),
('Dr. Priya Nair','Ophthalmology','Vision First Center','Bengaluru',7,550,4.6,ARRAY['English','Malayalam'],'Available','Comprehensive eye care and vision screening.');

INSERT INTO public.hospitals (name, location, distance_km, emergency_status, facilities, phone, working_hours, total_beds, available_beds, icu_beds, available_icu_beds, emergency_beds, available_emergency_beds, doctors_available, nurses_available, ambulances_available) VALUES
('City Care Hospital','Koramangala, Bengaluru',1.2,'Available',ARRAY['Emergency','ICU','Pharmacy','Imaging','Blood bank'],'080 4567 8900','24 hours',250,42,30,7,25,5,18,46,4),
('St. Mary Medical Center','Indiranagar, Bengaluru',2.8,'Limited',ARRAY['Emergency','ICU','Maternity','Surgery'],'080 4567 2211','24 hours',180,12,24,3,18,2,11,32,2),
('Riverside Specialty Hospital','Whitefield, Bengaluru',5.4,'Available',ARRAY['Emergency','Cardiology','Imaging','Pharmacy'],'080 4567 3355','24 hours',320,76,36,11,30,8,24,58,5),
('Hope Children Hospital','Jayanagar, Bengaluru',4.1,'Available',ARRAY['Pediatrics','NICU','Emergency','Pharmacy'],'080 4567 4499','24 hours',120,28,18,6,12,4,9,28,2),
('Mindwell Hospital','HSR Layout, Bengaluru',3.7,'Limited',ARRAY['Mental health','Counselling','Day care'],'080 4567 5566','8 AM – 10 PM',80,18,0,0,6,2,7,18,1);

INSERT INTO public.labs (name, location, distance_km, rating, opening_hours, home_collection, available_tests) VALUES
('MedLab Diagnostics','Koramangala, Bengaluru',0.6,4.8,'6 AM – 10 PM',true,ARRAY['CBC','Blood Sugar','Lipid Profile','Thyroid Profile','Vitamin Tests']),
('HealthCheck Labs','Indiranagar, Bengaluru',2.1,4.7,'7 AM – 9 PM',true,ARRAY['CBC','Liver Function Test','Kidney Function Test','Urine Test','ECG']),
('Aster Diagnostics','Whitefield, Bengaluru',5.2,4.6,'6 AM – 8 PM',true,ARRAY['CBC','X-Ray','Ultrasound','ECG','Lipid Profile']),
('QuickTest Center','Jayanagar, Bengaluru',4.4,4.4,'7 AM – 7 PM',false,ARRAY['Blood Sugar','Urine Test','Thyroid Profile','Vitamin Tests']),
('PrimeScan Imaging','HSR Layout, Bengaluru',3.2,4.9,'8 AM – 10 PM',false,ARRAY['X-Ray','Ultrasound','ECG','MRI']);

INSERT INTO public.medical_stores (name, location, distance_km, phone, opening_hours, is_open) VALUES
('Wellcare Pharmacy','Koramangala, Bengaluru',0.35,'080 4111 2200','24 hours',true),('Apollo Health Store','Indiranagar, Bengaluru',1.8,'080 4111 3300','7 AM – 11 PM',true),('GreenCross Medicals','HSR Layout, Bengaluru',2.4,'080 4111 4400','8 AM – 10 PM',true),('CarePlus Pharmacy','Jayanagar, Bengaluru',4.2,'080 4111 5500','7 AM – 10 PM',true),('MediBasket','Whitefield, Bengaluru',5.8,'080 4111 6600','8 AM – 9 PM',false),('24Seven Meds','Koramangala, Bengaluru',0.9,'080 4111 7700','24 hours',true),('LifeLine Medicals','BTM Layout, Bengaluru',3.1,'080 4111 8800','8 AM – 11 PM',true),('TrustRx Pharmacy','Bellandur, Bengaluru',6.2,'080 4111 9900','9 AM – 9 PM',true),('HealthFirst Store','Marathahalli, Bengaluru',7.4,'080 4122 1000','7 AM – 10 PM',true),('MedPoint','Ejipura, Bengaluru',1.6,'080 4122 1100','8 AM – 10 PM',true);