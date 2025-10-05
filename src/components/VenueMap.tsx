import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VenueMap() {
  const venueLocation = {
    name: 'Grand Ballroom',
    address: '123 Wedding Street, City Center',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Grand+Ballroom+Wedding+Venue',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666666666667!2d106.8166667!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid'
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Wedding Venue
          </h2>
          <p className="text-gray-600 italic">Find us here on the special day</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {venueLocation.name}
                </h3>
                <p className="text-gray-600 mb-4">{venueLocation.address}</p>
                <a
                  href={venueLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src={venueLocation.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
