import { Video, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveStreamingProps {
  showVenue: boolean;
}

export default function LiveStreaming({ showVenue }: LiveStreamingProps) {
  const liveStreamUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Live Streaming
          </h2>
          <p className="text-gray-600 italic">
            {showVenue
              ? "Can't attend in person? Join us virtually and share the joy of our special day"
              : "Join us virtually and share the joy of our special day"}
          </p>
        </div>

        <div className={`grid ${showVenue ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6`}>
          {showVenue && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Attend in Person</h3>
              </div>

              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Venue</p>
                  <p>Grand Ballroom</p>
                  <p className="text-sm">123 Wedding Street, City Center</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Date & Time</p>
                  <p>Saturday, December 20, 2025</p>
                  <p className="text-sm">10:00 AM onwards</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm italic text-gray-500">
                    We would be honored by your presence at our wedding celebration
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: showVenue ? 0.2 : 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-rose-400 to-pink-500 p-3 rounded-full">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Watch Online</h3>
            </div>

            <div className="space-y-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
                <iframe
                  src={liveStreamUrl}
                  title="Wedding Live Stream"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Live Stream Schedule:</span>
                  <br />
                  Akad Nikah: 10:00 AM - 11:00 AM
                  <br />
                  Resepsi: 12:00 PM - 4:00 PM
                </p>
              </div>

              <p className="text-sm text-gray-600 italic text-center">
                The live stream will start shortly before the ceremony begins
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
