/*
  # Wedding Invitation Database Schema

  1. New Tables
    - `rsvp_responses`
      - `id` (uuid, primary key) - Unique identifier for each RSVP
      - `name` (text) - Guest name
      - `email` (text, optional) - Guest email
      - `attendance` (text) - Attendance status: 'attending', 'not_attending', 'maybe'
      - `guest_count` (integer) - Number of guests attending
      - `created_at` (timestamptz) - Timestamp of RSVP submission
    
    - `wishes`
      - `id` (uuid, primary key) - Unique identifier for each wish
      - `name` (text) - Name of person sending wishes
      - `message` (text) - Wedding wish message
      - `created_at` (timestamptz) - Timestamp of wish submission
  
  2. Security
    - Enable RLS on both tables
    - Allow public read access to wishes (for display on website)
    - Allow public insert for both tables (guests can submit RSVP and wishes)
    - Restrict updates and deletes (only authenticated users can manage)
  
  3. Important Notes
    - Tables are designed for public wedding website access
    - No authentication required for guests to RSVP or leave wishes
    - Created timestamps for sorting and display purposes
*/

CREATE TABLE IF NOT EXISTS rsvp_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  attendance text NOT NULL CHECK (attendance IN ('attending', 'not_attending', 'maybe')),
  guest_count integer DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS wishes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvp_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit RSVP
CREATE POLICY "Anyone can submit RSVP"
  ON rsvp_responses FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view RSVPs
CREATE POLICY "Authenticated users can view RSVPs"
  ON rsvp_responses FOR SELECT
  TO authenticated
  USING (true);

-- Allow anyone to submit wishes
CREATE POLICY "Anyone can submit wishes"
  ON wishes FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to view wishes (public display)
CREATE POLICY "Anyone can view wishes"
  ON wishes FOR SELECT
  TO anon
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS rsvp_created_at_idx ON rsvp_responses(created_at DESC);
CREATE INDEX IF NOT EXISTS wishes_created_at_idx ON wishes(created_at DESC);