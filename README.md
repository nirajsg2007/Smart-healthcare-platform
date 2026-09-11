# MediConnect AI Health

Build a complete, modern, production-style healthcare management web application called:

🏥 "MediConnect AI – Smart Healthcare & Hospital Management Platform"

The platform should bring together PATIENTS, DOCTORS, LABS, MEDICAL STORES, HOSPITALS, NURSES, and ADMINISTRATORS in one unified system.

The website should be highly polished and functional, with responsive design for desktop, tablet, and mobile.

==================================================

1. OVERALL PRODUCT VISION

==================================================

Create a centralized healthcare platform where a patient can:

1. Chat with an AI health assistant

2. Find and book doctors online

3. Request/arrange hospital visits

4. Search diagnostic laboratories and tests

5. Track lab reports

6. Find nearby medical stores and compare medicine prices

7. Upload a medicine prescription/image for medicine identification

8. Check hospital availability

9. Check beds, ICU beds, emergency availability, doctors and nurses

10. Manage appointments, reports, prescriptions and medical history

Different users must have different dashboards and permissions.

User Roles:

• Patient

• Doctor

• Laboratory Staff

• Medical Store/Pharmacy

• Hospital Staff

• Nurse

• Hospital Administrator

• Super Admin

Use Role-Based Access Control (RBAC).

==================================================

2. DESIGN / UI / UX

==================================================

Create a premium healthcare startup-style interface.

Design language:

• Modern

• Clean

• Professional

• Trustworthy

• Minimal

• Premium

• Responsive

• Accessible

Use:

• White/light backgrounds

• Blue/teal healthcare accent colors

• Soft gradients

• Rounded cards

• Subtle shadows

• Glassmorphism where appropriate

• Modern icons

• Smooth animations

• Skeleton loading states

• Toast notifications

• Modal dialogs

• Beautiful charts

• Responsive tables

• Interactive maps

• Status badges

Provide both:

• Light Mode

• Dark Mode

Use a consistent sidebar/dashboard navigation.

On mobile use a bottom navigation where appropriate.

==================================================

3. LANDING PAGE

==================================================

Create an impressive homepage.

Hero section:

"Your Complete Healthcare, Connected in One Place."

Subtitle:

"Connect with doctors, hospitals, diagnostic labs and pharmacies through one intelligent healthcare platform."

Buttons:

• Find a Doctor

• Talk to AI Assistant

• Find a Hospital

• Find a Lab

Show healthcare statistics:

• Hospitals Connected

• Doctors Available

• Diagnostic Labs

• Medical Stores

• Patients Served

Add sections:

• AI Health Assistant

• Online Doctor Appointments

• Hospital Availability

• Diagnostic Labs

• Lab Reports

• Medicine Search

• Emergency Assistance

Add testimonials.

Add FAQ.

Add footer containing:

• About

• Contact

• Privacy Policy

• Terms

• Emergency Disclaimer

• Support

==================================================

4. AUTHENTICATION

==================================================

Create complete authentication.

Pages:

• Login

• Register

• Forgot Password

• Reset Password

• Email Verification

• Phone Verification

• Profile Setup

During registration ask:

• Full Name

• Email

• Phone

• Date of Birth

• Gender

• City

• User Type

User types:

Patient

Doctor

Lab

Medical Store

Hospital Staff

After login redirect the user to the correct dashboard.

Use secure authentication and protected routes.

==================================================

5. PATIENT DASHBOARD

==================================================

Create a beautiful patient dashboard.

Show:

• Welcome message

• Upcoming appointment

• Recent lab report

• Recent prescription

• AI health assistant shortcut

• Nearby hospitals

• Nearby labs

• Nearby medical stores

• Emergency button

Dashboard cards:

"Talk to AI"

"Book Doctor"

"Hospital Visit"

"Find Lab"

"Lab Reports"

"Find Medicine"

"Hospital Availability"

"Medical History"

==================================================

6. AI HEALTH ASSISTANT / CHATBOT

==================================================

Create a dedicated AI Health Assistant.

Interface similar to a modern AI chat application.

Patient can type:

"I have fever."

"I have headache and weakness."

"I have cough."

"My stomach hurts."

"I have chest pain."

etc.

The AI should ask relevant follow-up questions such as:

• Age

• Symptoms

• Duration

• Severity

• Existing conditions

• Current medications

• Allergies

The AI should provide:

• General health information

• Possible common causes

• Self-care guidance

• Warning signs

• When to consult a doctor

• Whether urgent medical attention may be needed

IMPORTANT SAFETY BEHAVIOR:

The AI must NOT claim to diagnose the patient.

The AI must NOT independently prescribe prescription medicines.

For common OTC medicines, only provide general educational information and clearly recommend checking with a qualified doctor/pharmacist, especially for children, pregnancy, elderly patients, allergies, chronic conditions, or drug interactions.

For potentially serious symptoms such as:

• Chest pain

• Difficulty breathing

• Severe bleeding

• Loss of consciousness

• Stroke-like symptoms

• Severe allergic reaction

• Severe injury

• Sudden severe pain

show a prominent:

🚨 "POSSIBLE MEDICAL EMERGENCY"

message and recommend contacting local emergency services or immediately visiting an emergency department.

Add buttons:

• Book a Doctor

• Find Nearby Hospital

• Emergency Help

Store chat history securely for the patient.

AI provider should be designed so an API such as Google Gemini/OpenAI can be connected through a secure backend.

Never expose API keys in frontend code.

==================================================

7. DOCTOR SEARCH & ONLINE APPOINTMENT

==================================================

Create "Find a Doctor" page.

Filters:

• Specialty

• Location

• Experience

• Consultation Fee

• Availability

• Rating

• Online/Offline

• Hospital

Doctor cards should show:

• Profile photo

• Name

• Specialty

• Experience

• Hospital

• Rating

• Consultation fee

• Available slots

• Online/Offline status

Buttons:

"View Profile"

"Book Appointment"

Doctor profile should contain:

• About

• Qualifications

• Experience

• Specialization

• Hospital

• Consultation fee

• Available schedule

• Reviews

• Languages

==================================================

8. APPOINTMENT BOOKING

==================================================

Create complete appointment flow.

Patient selects:

Doctor

↓

Date

↓

Time Slot

↓

Appointment Type

↓

Reason for Visit

↓

Confirmation

Appointment types:

• Video Consultation

• Audio Consultation

• In-person Consultation

Show appointment confirmation.

Patient dashboard should show:

• Upcoming

• Completed

• Cancelled

Doctor dashboard should show:

• Today's appointments

• Upcoming appointments

• Patient details

• Consultation notes

==================================================

9. HOSPITAL VISIT / HOSPITAL APPOINTMENT

==================================================

Create "Hospital Visit" module.

Patient can search hospitals.

Show:

• Hospital name

• Location

• Distance

• Emergency department

• Available beds

• ICU availability

• Doctors available

• Nurses available

• Facilities

• Contact

• Working hours

Patient can request hospital visit.

Flow:

Select Hospital

↓

Select Department

↓

Select Date

↓

Select Time

↓

Enter Patient Information

↓

Submit Visit Request

↓

Receive Token / Appointment Number

Generate a digital visit confirmation.

Show:

• Hospital

• Department

• Date

• Time

• Token Number

• Status

Statuses:

Pending

Confirmed

Completed

Cancelled

==================================================

10. LAB SEARCH

==================================================

Create "Find a Lab" page.

Allow users to search diagnostic laboratories.

Filters:

• Location

• Test Type

• Price

• Availability

• Home Sample Collection

• Rating

Lab cards:

• Lab name

• Location

• Distance

• Available tests

• Rating

• Opening hours

• Home collection availability

==================================================

11. LAB TEST DETAILS

==================================================

When user selects a laboratory show:

• Test name

• Description

• Price

• Preparation instructions

• Sample type

• Report time

• Lab availability

• Home collection option

Example tests:

• CBC

• Blood Sugar

• Lipid Profile

• Thyroid Profile

• Liver Function Test

• Kidney Function Test

• Urine Test

• Vitamin Tests

• X-Ray

• Ultrasound

• ECG

Allow patient to:

"Book Test"

==================================================

12. LAB REPORT TRACKING

==================================================

Create "My Lab Reports".

Patient should be able to see:

• Test name

• Lab name

• Booking date

• Sample collected

• Processing

• Report ready

• Doctor reviewed

Status timeline:

🟡 Test Booked

↓

🔵 Sample Collected

↓

🟣 Processing

↓

🟢 Report Ready

Allow report download/view.

Supported:

PDF

Images

Create secure report access.

Doctor should be able to view reports shared by patients.

==================================================

13. MEDICAL STORE / PHARMACY MODULE

==================================================

Create "Find Medicine" page.

Patient can:

• Search medicine by name

• Upload medicine prescription/image

• Search nearby medical stores

• Compare prices

• Check availability

Medicine card:

• Medicine name

• Generic name

• Strength

• Form

• Manufacturer

• Price

• Availability

• Medical store

• Distance

IMPORTANT:

Prescription medicines should require a valid prescription and should not be automatically dispensed without appropriate verification.

==================================================

14. MEDICINE IMAGE / PRESCRIPTION SCANNER

==================================================

Create an image upload feature.

Patient can:

"Upload Prescription / Medicine Image"

The system should use OCR/image analysis to extract possible medicine names.

Show:

"Possible medicines detected"

Then allow the user to search nearby pharmacies.

Do NOT assume the OCR result is always correct.

Show:

"Please verify the medicine name and prescription with a qualified pharmacist/doctor."

Results should show:

• Medical Store

• Distance

• Medicine availability

• Price

• Generic alternative where legally/clinically appropriate

• Contact

• Opening hours

Allow price comparison.

==================================================

15. MEDICAL STORE DASHBOARD

==================================================

Medical store users should have dashboard.

Show:

• Total orders/requests

• Available medicines

• Low-stock medicines

• Pending prescription verification

• Today's requests

Inventory management:

• Add medicine

• Edit medicine

• Delete medicine

• Price

• Stock

• Expiry

• Manufacturer

• Prescription required

Prescription verification section.

==================================================

16. HOSPITAL AVAILABILITY / HOSPITAL AUDIT DASHBOARD

==================================================

Create a major module called:

"Hospital Availability"

This is the hospital monitoring/audit section.

Show hospitals on a map and dashboard.

For each hospital show:

• Total beds

• Available beds

• Occupied beds

• ICU beds

• Available ICU beds

• Emergency beds

• Available emergency beds

• Ventilators

• Available ventilators

• Doctors available

• Nurses available

• Ambulances available

• Emergency department status

• Operating rooms status

Example:

🏥 City Care Hospital

Total Beds: 250

Available: 42

ICU:

Total: 30

Available: 7

Emergency:

Total: 25

Available: 5

Doctors Available: 18

Nurses Available: 46

Ambulances: 4

Use status indicators:

🟢 Available

🟡 Limited

🔴 Critical

==================================================

17. HOSPITAL ADMIN DASHBOARD

==================================================

Hospital administrators can update:

• Bed capacity

• ICU capacity

• Emergency capacity

• Doctor availability

• Nurse availability

• Ventilator availability

• Ambulance availability

• Department availability

Add real-time dashboard charts.

Charts:

• Bed occupancy

• ICU occupancy

• Emergency occupancy

• Daily admissions

• Discharges

• Doctor availability

• Nurse availability

Include timestamp:

"Last Updated: ..."

Do not present hospital availability as real-time unless connected to a real hospital data source.

For demo mode, clearly label data as:

"Demo / Sample Data"

==================================================

18. DOCTOR DASHBOARD

==================================================

Doctor dashboard should include:

• Today's appointments

• Upcoming appointments

• Patient list

• Consultation history

• Shared lab reports

• Prescriptions

• Availability schedule

• Profile management

Doctor can:

• Accept/reject appointments

• Set availability

• Add consultation notes

• Upload prescription

• Review patient-shared lab reports

==================================================

19. LAB STAFF DASHBOARD

==================================================

Lab staff dashboard:

• Today's bookings

• Pending samples

• Processing tests

• Reports pending

• Completed reports

Actions:

• Confirm booking

• Mark sample collected

• Mark processing

• Upload report

• Mark report ready

==================================================

20. NURSE DASHBOARD

==================================================

Nurse dashboard:

• Assigned patients

• Tasks

• Ward information

• Bed information

• Patient status

• Shift schedule

==================================================

21. SUPER ADMIN DASHBOARD

==================================================

Create an advanced admin panel.

Admin can manage:

• Patients

• Doctors

• Hospitals

• Labs

• Medical stores

• Nurses

• Appointments

• Lab reports

• Medicines

• Users

• Reviews

• Complaints

• System settings

Dashboard statistics:

• Total users

• Total doctors

• Hospitals

• Labs

• Medical stores

• Today's appointments

• Pending requests

• Emergency alerts

==================================================

22. MAP & LOCATION

==================================================

Integrate map functionality.

Use map provider such as Google Maps or Mapbox.

Show:

• Hospitals

• Labs

• Doctors

• Medical stores

Allow:

"Near Me"

"Get Directions"

"View on Map"

If real map APIs are unavailable during development, create a realistic map placeholder with sample locations.

==================================================

23. EMERGENCY FEATURE

==================================================

Create a prominent Emergency button throughout the patient dashboard.

Emergency page:

🚨 EMERGENCY ASSISTANCE

Options:

• Call Emergency Services

• Find Nearest Hospital

• Find Emergency Department

• View Available Emergency Beds

• Call Hospital

• Share Location

Do not claim that the application itself provides emergency medical treatment.

==================================================

24. NOTIFICATIONS

==================================================

Create notification system.

Notifications for:

• Appointment confirmation

• Appointment reminder

• Appointment cancellation

• Lab report ready

• Hospital visit confirmation

• Prescription update

• Medicine availability

• Low inventory for pharmacy

• Emergency alerts

Create notification center.

==================================================

25. SEARCH

==================================================

Create global search.

User can search:

• Doctors

• Hospitals

• Labs

• Tests

• Medicines

• Medical stores

Add filters and sorting.

==================================================

26. PATIENT MEDICAL PROFILE

==================================================

Create patient profile.

Information:

• Basic details

• Allergies

• Existing conditions

• Current medications

• Blood group

• Emergency contact

• Medical history

Keep health information private and accessible only to authorized users.

==================================================

27. MEDICAL HISTORY

==================================================

Create timeline:

Appointments

↓

Diagnoses/consultation notes

↓

Prescriptions

↓

Lab tests

↓

Reports

Allow patient to view/download records.

==================================================

28. DATABASE

==================================================

Use Supabase/PostgreSQL as the backend if supported by Lovable.

Create proper relational database structure.

Tables/entities:

users

profiles

patients

doctors

hospitals

hospital_departments

hospital_beds

icu_beds

emergency_resources

nurses

labs

lab_tests

lab_bookings

lab_reports

medical_stores

medicines

medicine_inventory

prescriptions

appointments

hospital_visits

notifications

reviews

medical_history

ai_chat_sessions

ai_chat_messages

emergency_requests

Use proper:

• Primary keys

• Foreign keys

• Indexes

• Constraints

• Timestamps

• Row Level Security

==================================================

29. SECURITY

==================================================

Healthcare data is sensitive.

Implement:

• Authentication

• Authorization

• Role-based access

• Row Level Security

• Secure database policies

• Protected routes

• Input validation

• API validation

• Secure file uploads

• Private medical records

• Audit logs

Never expose:

• API keys

• Passwords

• Private patient information

AI API keys must remain server-side.

==================================================

30. DEMO DATA

==================================================

Populate the application with realistic demo data.

Create:

• 10+ doctors

• 5+ hospitals

• 5+ labs

• 10+ medical stores

• 50+ medicines

• Sample appointments

• Sample lab reports

• Sample hospital availability

Clearly label demo/sample information where necessary.

==================================================

31. DASHBOARD NAVIGATION

==================================================

Patient sidebar:

Dashboard

AI Assistant

Find Doctor

Appointments

Hospital Visit

Find Lab

Lab Reports

Find Medicine

Medical History

Notifications

Profile

Settings

Doctor sidebar:

Dashboard

Appointments

Patients

Lab Reports

Prescriptions

Schedule

Profile

Lab sidebar:

Dashboard

Bookings

Tests

Samples

Reports

Profile

Medical Store sidebar:

Dashboard

Inventory

Prescription Requests

Medicine Requests

Orders

Profile

Hospital sidebar:

Dashboard

Beds

ICU

Emergency

Doctors

Nurses

Departments

Hospital Visits

Reports

Settings

Admin sidebar:

Dashboard

Users

Doctors

Hospitals

Labs

Medical Stores

Appointments

Reports

Medicines

Analytics

Audit Logs

Settings

==================================================

32. ANALYTICS

==================================================

Create attractive charts.

Patient:

• Appointment history

• Medical record timeline

Doctor:

• Appointments

• Patient statistics

Hospital:

• Bed occupancy

• ICU occupancy

• Emergency utilization

Lab:

• Test volume

• Revenue

• Pending reports

Medical Store:

• Inventory

• Sales

• Low stock

Admin:

• User growth

• Appointment volume

• Hospital capacity

• Lab activity

• Pharmacy activity

==================================================

33. RESPONSIVE DESIGN

==================================================

The website must work perfectly on:

• Desktop

• Laptop

• Tablet

• Mobile

No horizontal scrolling.

Tables should become mobile-friendly cards.

Dashboard sidebar should collapse on mobile.

==================================================

34. ERROR / EMPTY / LOADING STATES

==================================================

Create professional states for:

• Loading

• No results

• No appointments

• No lab reports

• No medicines

• API error

• Network error

• Unauthorized access

• Empty hospital availability

Use skeleton loaders and friendly error messages.

==================================================

35. DEMO / BACKEND FALLBACK

==================================================

If external APIs such as:

• Gemini/OpenAI

• Google Maps

• Payment gateways

• SMS

• Email

are not configured, the UI should still work using mock/demo data.

Create clean service abstraction so APIs can be connected later without redesigning the frontend.

Do not hardcode API keys.

==================================================

36. IMPORTANT MEDICAL SAFETY

==================================================

This application is a healthcare support and management platform.

The AI assistant must display a disclaimer:

"This AI assistant provides general health information and does not replace professional medical advice, diagnosis, or treatment."

Never represent AI output as a confirmed diagnosis.

Emergency symptoms must trigger emergency guidance.

Prescription medication should require appropriate professional verification.

==================================================

37. FINAL EXPERIENCE

==================================================

The finished website should feel like a real healthcare startup product.

Brand:

MediConnect AI

Tagline:

"Healthcare. Connected. Intelligent. Accessible."

Create:

• Beautiful landing page

• Fully functional authentication

• Role-based dashboards

• AI chatbot interface

• Doctor booking

• Hospital visit system

• Lab search

• Lab report tracking

• Medical store search

• Medicine image/prescription scanner UI

• Medicine price comparison

• Hospital availability dashboard

• Bed/ICU/emergency monitoring

• Admin dashboard

• Maps

• Notifications

• Analytics

• Responsive UI

• Dark/light mode

Do not create only static UI mockups.

Where possible, implement actual CRUD functionality, database integration, authentication, protected routes, role-based access and realistic demo data.

Build the project with clean reusable components and a scalable architecture.

Use TypeScript.

Make the application visually impressive enough for a college final-year project, hackathon demonstration, startup MVP, and portfolio presentation.

Before finishing, verify all navigation links, buttons, forms, dashboards, authentication flows, database operations and responsive layouts.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4135bc22-63f5-4f8e-bc88-27c0dc8ad8cf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
