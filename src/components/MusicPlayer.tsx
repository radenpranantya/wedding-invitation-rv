import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all hover:scale-110 group"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      <div className="relative">
        <Music className={`w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`} />
        {isPlaying ? (
          <Pause className="w-3 h-3 absolute -bottom-1 -right-1 bg-white text-teal-600 rounded-full p-0.5" />
        ) : (
          <Play className="w-3 h-3 absolute -bottom-1 -right-1 bg-white text-teal-600 rounded-full p-0.5" />
        )}
      </div>
    </button>
  );
}
