import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Primitives';
import { Shield, Mail, ArrowRight, RefreshCw } from 'lucide-react';

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate reset request
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-4 shadow-2xl relative group overflow-hidden">
             <Shield className="text-primary relative z-10" size={32} />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter italic uppercase">PROTOCOL RECOVERY</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mt-2 italic">Identity Restoration System</p>
        </div>

        <div className="glass border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          {!isSuccess ? (
            <form onSubmit={handleReset} className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
                <p className="text-[10px] text-gray-400 font-medium leading-relaxed italic">
                  Enter your uplink email address. We will broadcast a secure restoration token to your frequency.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Uplink Email</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    placeholder="name@nexus.com"
                    required
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all focus:ring-4 focus:ring-primary/5"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 rounded-2xl bg-primary text-black font-black uppercase tracking-[0.2em] italic hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,255,166,0.3)] disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Broadcasting...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    Request Sync Token <ArrowRight size={18} />
                  </div>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary" size={32} />
              </div>
              <h2 className="text-xl font-black text-white uppercase italic tracking-tight">Transmission Sent</h2>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto italic">
                A secure restoration bypass has been dispatched to your uplink. Check your inbox for synchronization instructions.
              </p>
              <Button
                onClick={() => navigate('/')}
                className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all mt-4"
              >
                Return to Access Point
              </Button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <Link to="/" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-primary transition-colors">
              Remembered access key? <span className="text-primary hover:underline italic">Initialize Login</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
