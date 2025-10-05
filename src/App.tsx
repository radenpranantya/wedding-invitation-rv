import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, MapPin, Clock, Heart, User } from 'lucide-react';
import { motion } from 'framer-motion';
import OpeningPage from './components/OpeningPage';
import HeroSlider from './components/HeroSlider';
import PhotoGallery from './components/PhotoGallery';
import RSVPSection from './components/RSVPSection';
import MusicPlayer from './components/MusicPlayer';
import VenueMap from './components/VenueMap';
import WeddingGift from './components/WeddingGift';

function App() {
  const location = useLocation();
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const weddingDate = new Date('2025-12-20T10:00:00');

  const getGuestNameFromUrl = () => {
    const path = location.pathname.slice(1);
    return path || 'guest';
  };

  const guestName = getGuestNameFromUrl();

  if (!isInvitationOpened) {
    return <OpeningPage guestName={guestName} onOpenInvitation={() => setIsInvitationOpened(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50">
      <MusicPlayer />

      <HeroSlider weddingDate={weddingDate} />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            The Bride & Groom
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-teal-100 shadow-xl mx-auto">
                  <img
                    src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Bride"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="font-semibold">The Bride</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Sarah Johnson
              </h3>
              <p className="text-gray-600 mb-4">Daughter of Mr. & Mrs. Johnson</p>
              <p className="text-gray-500 italic max-w-md mx-auto">
                "Love is not about how many days, months, or years you have been together.
                Love is about how much you love each other every single day."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-blue-100 shadow-xl mx-auto">
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Groom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="font-semibold">The Groom</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Michael Anderson
              </h3>
              <p className="text-gray-600 mb-4">Son of Mr. & Mrs. Anderson</p>
              <p className="text-gray-500 italic max-w-md mx-auto">
                "In all the world, there is no heart for me like yours.
                In all the world, there is no love for you like mine."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Wedding Events
          </h2>
          <p className="text-center text-gray-600 mb-12 italic">
            Join us in celebrating our special day
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Akad Nikah
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Saturday, December 20, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">10:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Grand Ballroom</p>
                    <p className="text-sm">123 Wedding Street, City Center</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-rose-400 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 fill-white" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Resepsi
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Saturday, December 20, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">12:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Grand Ballroom</p>
                    <p className="text-sm">123 Wedding Street, City Center</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <VenueMap />

      <PhotoGallery />

      <WeddingGift />

      <RSVPSection />

      <footer className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 fill-white" />
          <p className="text-lg mb-2">Thank you for being part of our special day!</p>
          <p className="text-sm opacity-90">Sarah & Michael</p>
          <p className="text-xs opacity-75 mt-4">December 20, 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
