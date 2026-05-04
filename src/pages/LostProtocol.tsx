import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Primitives';
import { Shield, Brain, Terminal, ArrowLeft, MessageSquare } from 'lucide-react';

export default function LostProtocol() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-4 shadow-2xl relative group overflow-hidden">
             <Brain className="text-primary relative z-10" size={32} />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter italic uppercase">LOST PROTOCOL</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mt-2 italic">Account Synchronization Support</p>
        </div>

        <div className="glass border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-lg font-black text-white uppercase italic tracking-tight">Access Protocol Failure?</h2>
              <p className="text-[11px] text-gray-500 leading-relaxed italic">
                If your biometric hash, encryption key, or synchronization email are no longer reachable, manual override protocols must be initiated.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 group hover:bg-white/10 transition-all cursor-pointer">
                  <Terminal size={20} className="text-primary" />
                  <h3 className="text-[10px] font-black text-white uppercase tracking-widest italic">Terminal Support</h3>
                  <p className="text-[9px] text-gray-500 leading-normal italic">Self-service automated troubleshooting via network CLI.</p>
               </div>
               
               <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 group hover:bg-white/10 transition-all cursor-pointer">
                  <MessageSquare size={20} className="text-purple-400" />
                  <h3 className="text-[10px] font-black text-white uppercase tracking-widest italic">Human Uplink</h3>
                  <p className="text-[9px] text-gray-500 leading-normal italic">Direct communication with network governance agents.</p>
               </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
               <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-3 italic">Security Information:</p>
               <ul className="text-[9px] text-gray-400 space-y-2 italic">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span> IDENTITY VERIFICATION REQUIRES PHOTOGRAPHIC EVIDENCE
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span> PROTOCOL TIMEOUT: 24 - 48 CYCLES FOR RESTORATION
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span> ATTEMPTING MULTIPLE LOGINS WILL TRIGGER HARD LOCKOUT
                  </li>
               </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={() => navigate('/')}
                className="w-full h-14 rounded-2xl bg-primary text-black font-black uppercase tracking-[0.2em] italic hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,255,166,0.3)]"
              >
                Return to Login
              </Button>
              <button 
                className="text-[10px] font-black text-gray-600 uppercase tracking-widest hover:text-white transition-all flex items-center justify-center gap-2"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft size={14} /> Back to safety
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center">
            <p className="text-gray-700 text-[10px] font-bold uppercase tracking-[0.2em] italic">IDENTITY PROTECTION SYSTEM V.4.2</p>
        </div>
      </motion.div>
    </div>
  );
}
