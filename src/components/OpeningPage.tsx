import { Heart, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface OpeningPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

export default function OpeningPage({ guestName, onOpenInvitation }: OpeningPageProps) {
  const formatGuestName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' & ');
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-teal-400 via-blue-400 to-cyan-400 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white/20 rounded-full"
            />
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Heart className="w-16 h-16 text-teal-500 fill-teal-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-white/90 text-sm md:text-base mb-2 tracking-widest font-medium">
            THE WEDDING OF
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8"
              style={{ fontFamily: 'Georgia, serif' }}>
            Sarah & Michael
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-8"
        >
          <Mail className="w-12 h-12 text-teal-500 mx-auto mb-4" />
          <p className="text-gray-700 text-lg mb-2">Dear,</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
             style={{ fontFamily: 'Georgia, serif' }}>
            {formatGuestName(guestName)}
          </p>
          <p className="text-gray-600">
            You are invited to celebrate our wedding
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenInvitation}
          className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-teal-500/50 transition-all flex items-center gap-2 mx-auto"
        >
          <Mail className="w-5 h-5" />
          Open Invitation
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 text-white/80 text-sm"
        >
          <p>December 20, 2025</p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-600/30 to-transparent" />
    </div>
  );
}
