import { useState } from 'react';
import { Gift, X, Copy, Check, CreditCard, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeddingGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bankAccounts = [
    {
      id: 1,
      bankName: 'Bank Central Asia (BCA)',
      accountNumber: '1234567890',
      accountHolder: 'Sarah Johnson'
    },
    {
      id: 2,
      bankName: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountHolder: 'Michael Anderson'
    }
  ];

  const giftRegistryUrl = 'https://www.example.com/wedding-registry';

  const copyToClipboard = (text: string, accountId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(accountId);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Wedding Gift
            </h2>
            <p className="text-gray-600 mb-8 italic">
              Your presence is the greatest gift, but if you wish to honor us with a gift, we would be grateful
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto"
            >
              <Gift className="w-6 h-6" />
              Send Gift
            </motion.button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="relative max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Gift className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Wedding Gift</h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-teal-500" />
                      Bank Transfer
                    </h4>
                    <div className="space-y-4">
                      {bankAccounts.map((account) => (
                        <div
                          key={account.id}
                          className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-5 border-2 border-teal-100"
                        >
                          <p className="text-sm text-gray-600 mb-1">Bank</p>
                          <p className="font-bold text-gray-800 mb-3">{account.bankName}</p>

                          <p className="text-sm text-gray-600 mb-1">Account Number</p>
                          <div className="flex items-center gap-2 mb-3">
                            <p className="font-mono text-lg font-bold text-gray-800">
                              {account.accountNumber}
                            </p>
                            <button
                              onClick={() => copyToClipboard(account.accountNumber, account.id.toString())}
                              className="p-2 hover:bg-white rounded-lg transition-colors"
                              title="Copy account number"
                            >
                              {copiedAccount === account.id.toString() ? (
                                <Check className="w-5 h-5 text-green-600" />
                              ) : (
                                <Copy className="w-5 h-5 text-gray-600" />
                              )}
                            </button>
                          </div>

                          <p className="text-sm text-gray-600 mb-1">Account Holder</p>
                          <p className="font-semibold text-gray-800">{account.accountHolder}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-teal-500" />
                      Wedding Registry
                    </h4>
                    <p className="text-gray-600 mb-4">
                      You can also view our wedding registry and send gifts directly from our preferred retailers.
                    </p>
                    <a
                      href={giftRegistryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-rose-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Registry
                    </a>
                  </div>

                  <div className="mt-8 p-4 bg-teal-50 rounded-xl">
                    <p className="text-sm text-gray-700 text-center italic">
                      Thank you for your generous gift. Your love and support mean the world to us!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
