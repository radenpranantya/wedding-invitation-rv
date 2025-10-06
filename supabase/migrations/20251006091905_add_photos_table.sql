/*
  # Add Photos Table for Wedding Gallery

  1. New Tables
    - `photos`
      - `id` (uuid, primary key) - Unique identifier for each photo
      - `url` (text) - Photo URL from Pexels or image hosting service
      - `alt` (text) - Alternative text description for the photo
      - `display_order` (integer) - Order in which photos should be displayed
      - `created_at` (timestamptz) - Timestamp when photo was added
  
  2. Security
    - Enable RLS on photos table
    - Allow public read access (guests can view all photos)
    - Only authenticated users can insert, update, or delete photos
  
  3. Important Notes
    - Photos are ordered by display_order for consistent gallery display
    - Public read access allows all wedding guests to view the gallery
    - Only wedding administrators need write access
*/

CREATE TABLE IF NOT EXISTS photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  alt text DEFAULT 'Wedding photo',
  display_order integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view photos (public gallery)
CREATE POLICY "Anyone can view photos"
  ON photos FOR SELECT
  TO anon
  USING (true);

-- Allow authenticated users to view photos
CREATE POLICY "Authenticated users can view photos"
  ON photos FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert photos
CREATE POLICY "Authenticated users can insert photos"
  ON photos FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update photos
CREATE POLICY "Authenticated users can update photos"
  ON photos FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete photos
CREATE POLICY "Authenticated users can delete photos"
  ON photos FOR DELETE
  TO authenticated
  USING (true);

-- Create index for efficient ordering
CREATE INDEX IF NOT EXISTS photos_display_order_idx ON photos(display_order);

-- Insert sample photos
INSERT INTO photos (url, alt, display_order) VALUES
  ('https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800', 'Wedding couple photo 1', 1),
  ('https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800', 'Wedding couple photo 2', 2),
  ('https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800', 'Wedding couple photo 3', 3),
  ('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', 'Wedding couple photo 4', 4),
  ('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800', 'Wedding couple photo 5', 5),
  ('https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800', 'Wedding couple photo 6', 6)
ON CONFLICT DO NOTHING;