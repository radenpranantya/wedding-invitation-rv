import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface RSVPResponse {
  id?: string;
  name: string;
  email?: string;
  attendance: 'attending' | 'not_attending' | 'maybe';
  guest_count: number;
  created_at?: string;
}

export interface Wish {
  id?: string;
  name: string;
  message: string;
  created_at?: string;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
  display_order: number;
  created_at?: string;
}
