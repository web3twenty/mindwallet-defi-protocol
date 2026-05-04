import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Primitives';
import { Shield, Mail, Lock, ArrowRight, User, CheckCircle2, QrCode, Eye, EyeOff } from 'lucide-react';

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-4 shadow-2xl relative group overflow-hidden">
             <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
             <Shield className="text-primary relative z-10" size={32} />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter italic uppercase">MIND NETWORK</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mt-2 italic">Node Registration Protocol</p>
        </div>

        <div className="glass border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Identity Name</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                  <User size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Commander Nexus"
                  required
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all focus:ring-4 focus:ring-primary/5"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Uplink Email</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  placeholder="nexus@protocol.com"
                  required
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all focus:ring-4 focus:ring-primary/5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Secure Key</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-10 text-sm text-white focus:outline-none focus:border-primary/50 transition-all focus:ring-4 focus:ring-primary/5"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Confirm Key</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-10 text-sm text-white focus:outline-none focus:border-primary/50 transition-all focus:ring-4 focus:ring-primary/5"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Refer Code (Optional)</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                  <QrCode size={16} />
                </div>
                <input
                  type="text"
                  placeholder="MIND-XXXXXX"
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all focus:ring-4 focus:ring-primary/5 uppercase font-mono"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 px-1 py-1">
              <div className="flex-shrink-0 w-4 h-4 rounded border border-white/20 bg-primary/10 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#00ffa6]" />
              </div>
              <p className="text-[9px] text-gray-500 font-medium leading-normal">
                I agree to the <span className="text-white">Governance Protocols</span> and <span className="text-white">Encryption Standards</span>.
              </p>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 rounded-2xl bg-primary text-black font-black uppercase tracking-[0.2em] italic hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,255,166,0.3)] disabled:opacity-50 mt-2"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  Synchronizing...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Initialize Sync <ArrowRight size={18} />
                </div>
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              Identity Already Exists?{' '}
              <Link to="/" className="text-primary hover:underline">Access Uplink</Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-primary uppercase tracking-widest italic group">
            <CheckCircle2 size={12} className="group-hover:scale-110 transition-transform" /> AES-256 Protocol Confirmed
          </div>
        </div>
      </motion.div>
    </div>
  );
}
