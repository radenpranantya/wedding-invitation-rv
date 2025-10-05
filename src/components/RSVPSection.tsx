import { useState, useEffect } from 'react';
import { Heart, Send, Loader2 } from 'lucide-react';
import { supabase, type RSVPResponse, type Wish } from '../lib/supabase';

export default function RSVPSection() {
  const [rsvpForm, setRsvpForm] = useState<RSVPResponse>({
    name: '',
    email: '',
    attendance: 'attending',
    guest_count: 1
  });
  const [wishForm, setWishForm] = useState({ name: '', message: '' });
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(false);
  const [wishLoading, setWishLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchWishes();
  }, []);

  async function fetchWishes() {
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (!error && data) {
      setWishes(data);
    }
  }

  async function handleRSVPSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase
      .from('rsvp_responses')
      .insert([rsvpForm]);

    setLoading(false);

    if (error) {
      setMessage('Failed to submit RSVP. Please try again.');
    } else {
      setMessage('Thank you for your RSVP! ✨');
      setRsvpForm({ name: '', email: '', attendance: 'attending', guest_count: 1 });
    }
  }

  async function handleWishSubmit(e: React.FormEvent) {
    e.preventDefault();
    setWishLoading(true);

    const { error } = await supabase
      .from('wishes')
      .insert([wishForm]);

    setWishLoading(false);

    if (!error) {
      setWishForm({ name: '', message: '' });
      fetchWishes();
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">RSVP</h2>
            </div>

            <form onSubmit={handleRSVPSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={rsvpForm.name}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={rsvpForm.email}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Will you attend? *
                </label>
                <select
                  required
                  value={rsvpForm.attendance}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, attendance: e.target.value as any })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="attending">Yes, I will attend</option>
                  <option value="not_attending">Sorry, I cannot attend</option>
                  <option value="maybe">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={rsvpForm.guest_count}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, guest_count: parseInt(e.target.value) || 1 })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit RSVP
                  </>
                )}
              </button>

              {message && (
                <p className={`text-center text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Wedding Wishes</h2>
            </div>

            <form onSubmit={handleWishSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={wishForm.name}
                  onChange={(e) => setWishForm({ ...wishForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Wishes *
                </label>
                <textarea
                  required
                  rows={4}
                  value={wishForm.message}
                  onChange={(e) => setWishForm({ ...wishForm, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={wishLoading}
                className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-rose-500 hover:to-pink-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {wishLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5 fill-white" />
                    Send Wishes
                  </>
                )}
              </button>
            </form>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Wishes</h3>
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {wishes.map((wish) => (
                  <div key={wish.id} className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">{wish.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{wish.message}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(wish.created_at!).toLocaleDateString()}
                    </p>
                  </div>
                ))}
                {wishes.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No wishes yet. Be the first!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
