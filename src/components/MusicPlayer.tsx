import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';

interface MusicPlayerProps {
  autoplay?: boolean;
}

export default function MusicPlayer({ autoplay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    if (autoplay) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }

    const handleVisibilityChange = () => {
      if (audioRef.current) {
        if (document.hidden) {
          if (isPlaying) {
            audioRef.current.pause();
          }
        } else {
          if (isPlaying) {
            audioRef.current.play();
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [autoplay]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (audioRef.current) {
        if (document.hidden) {
          audioRef.current.pause();
        } else {
          if (isPlaying) {
            audioRef.current.play();
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
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
