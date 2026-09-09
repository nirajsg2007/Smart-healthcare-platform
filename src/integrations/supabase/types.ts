export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          patient_id: string
          role: string
          session_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          patient_id: string
          role: string
          session_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          patient_id?: string
          role?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_sessions: {
        Row: {
          created_at: string
          id: string
          patient_id: string
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          patient_id: string
          title?: string
        }
        Update: {
          created_at?: string
          id?: string
          patient_id?: string
          title?: string
        }
        Relationships: []
      }
      appointments: {
        Row: {
          appointment_date: string
          appointment_time: string
          appointment_type: string
          created_at: string
          doctor_id: string | null
          doctor_name: string
          id: string
          patient_id: string
          reason: string | null
          status: string
        }
        Insert: {
          appointment_date: string
          appointment_time: string
          appointment_type: string
          created_at?: string
          doctor_id?: string | null
          doctor_name: string
          id?: string
          patient_id: string
          reason?: string | null
          status?: string
        }
        Update: {
          appointment_date?: string
          appointment_time?: string
          appointment_type?: string
          created_at?: string
          doctor_id?: string | null
          doctor_name?: string
          id?: string
          patient_id?: string
          reason?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      doctors: {
        Row: {
          availability: string
          bio: string | null
          consultation_fee: number
          created_at: string
          experience_years: number
          hospital: string
          id: string
          languages: string[]
          location: string
          name: string
          rating: number
          specialty: string
        }
        Insert: {
          availability?: string
          bio?: string | null
          consultation_fee?: number
          created_at?: string
          experience_years?: number
          hospital: string
          id?: string
          languages?: string[]
          location: string
          name: string
          rating?: number
          specialty: string
        }
        Update: {
          availability?: string
          bio?: string | null
          consultation_fee?: number
          created_at?: string
          experience_years?: number
          hospital?: string
          id?: string
          languages?: string[]
          location?: string
          name?: string
          rating?: number
          specialty?: string
        }
        Relationships: []
      }
      hospitals: {
        Row: {
          ambulances_available: number
          available_beds: number
          available_emergency_beds: number
          available_icu_beds: number
          demo_data: boolean
          distance_km: number | null
          doctors_available: number
          emergency_beds: number
          emergency_status: string
          facilities: string[]
          icu_beds: number
          id: string
          location: string
          name: string
          nurses_available: number
          phone: string | null
          total_beds: number
          updated_at: string
          working_hours: string | null
        }
        Insert: {
          ambulances_available?: number
          available_beds?: number
          available_emergency_beds?: number
          available_icu_beds?: number
          demo_data?: boolean
          distance_km?: number | null
          doctors_available?: number
          emergency_beds?: number
          emergency_status?: string
          facilities?: string[]
          icu_beds?: number
          id?: string
          location: string
          name: string
          nurses_available?: number
          phone?: string | null
          total_beds?: number
          updated_at?: string
          working_hours?: string | null
        }
        Update: {
          ambulances_available?: number
          available_beds?: number
          available_emergency_beds?: number
          available_icu_beds?: number
          demo_data?: boolean
          distance_km?: number | null
          doctors_available?: number
          emergency_beds?: number
          emergency_status?: string
          facilities?: string[]
          icu_beds?: number
          id?: string
          location?: string
          name?: string
          nurses_available?: number
          phone?: string | null
          total_beds?: number
          updated_at?: string
          working_hours?: string | null
        }
        Relationships: []
      }
      lab_reports: {
        Row: {
          booking_date: string
          created_at: string
          id: string
          lab_name: string
          patient_id: string
          report_url: string | null
          status: string
          test_name: string
        }
        Insert: {
          booking_date: string
          created_at?: string
          id?: string
          lab_name: string
          patient_id: string
          report_url?: string | null
          status?: string
          test_name: string
        }
        Update: {
          booking_date?: string
          created_at?: string
          id?: string
          lab_name?: string
          patient_id?: string
          report_url?: string | null
          status?: string
          test_name?: string
        }
        Relationships: []
      }
      labs: {
        Row: {
          available_tests: string[]
          created_at: string
          distance_km: number | null
          home_collection: boolean
          id: string
          location: string
          name: string
          opening_hours: string | null
          rating: number
        }
        Insert: {
          available_tests?: string[]
          created_at?: string
          distance_km?: number | null
          home_collection?: boolean
          id?: string
          location: string
          name: string
          opening_hours?: string | null
          rating?: number
        }
        Update: {
          available_tests?: string[]
          created_at?: string
          distance_km?: number | null
          home_collection?: boolean
          id?: string
          location?: string
          name?: string
          opening_hours?: string | null
          rating?: number
        }
        Relationships: []
      }
      medical_stores: {
        Row: {
          created_at: string
          distance_km: number | null
          id: string
          is_open: boolean
          location: string
          name: string
          opening_hours: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string
          distance_km?: number | null
          id?: string
          is_open?: boolean
          location: string
          name: string
          opening_hours?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string
          distance_km?: number | null
          id?: string
          is_open?: boolean
          location?: string
          name?: string
          opening_hours?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          read_at: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          read_at?: string | null
          title: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          read_at?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          allergies: string[]
          blood_group: string | null
          city: string | null
          created_at: string
          current_medications: string[]
          date_of_birth: string | null
          email: string | null
          emergency_contact: string | null
          existing_conditions: string[]
          full_name: string
          gender: string | null
          id: string
          phone: string | null
          updated_at: string
          user_type: string
        }
        Insert: {
          allergies?: string[]
          blood_group?: string | null
          city?: string | null
          created_at?: string
          current_medications?: string[]
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          existing_conditions?: string[]
          full_name: string
          gender?: string | null
          id: string
          phone?: string | null
          updated_at?: string
          user_type?: string
        }
        Update: {
          allergies?: string[]
          blood_group?: string | null
          city?: string | null
          created_at?: string
          current_medications?: string[]
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          existing_conditions?: string[]
          full_name?: string
          gender?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_type?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: string
          user_id: string
        }
        Insert: {
          id?: string
          role: string
          user_id: string
        }
        Update: {
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
