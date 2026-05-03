import React from 'react';
import { Card, Button, Badge } from '@/src/components/ui/Primitives';
import { motion } from 'motion/react';
import { 
  Star, 
  Zap, 
  ShieldCheck, 
  Users, 
  Award, 
  Crown, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  MessageCircle,
  Twitter,
  Facebook,
  Youtube,
  TrendingUp,
  Activity,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const EliteMember = ({ onAction }: { onAction?: (type: any, asset: string) => void }) => {
  const benefits = [
    { title: "Early Access", desc: "Be the first to explore and utilize Mindchain's groundbreaking blockchain innovations." },
    { title: "Exclusive Updates", desc: "Stay ahead of the curve with exclusive updates, news, and industry trends." },
    { title: "Premium Support", desc: "Enjoy priority assistance from our dedicated Elite support team." },
    { title: "Networking", desc: "Connect with like-minded blockchain enthusiasts and industry leaders." },
    { title: "Elite Events", desc: "Gain entry to Elite-only webinars, seminars, and conferences." },
    { title: "Custom Solutions", desc: "Access tailored blockchain solutions to meet your unique needs." }
  ];

  const facilities = [
    { text: "1st year will get profit as 20% APY" },
    { text: "After 1st year Mindchain will transfer to CEX and get staking there (as new APY)" },
    { text: "Income from APY can be withdrawn in USDT at any time" },
    { text: "Copy trade will get the opportunity to participate in ongoing trades with the best possible traders." }
  ];

  return (
    <div className="space-y-10 py-6 max-w-6xl mx-auto">
      {/* Hero Section - Compact & Elevated */}
      <section className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/5 rounded-3xl blur-2xl opacity-40" />
        <Card className="relative overflow-hidden rounded-3xl p-6 md:p-8 border-white/10 bg-black/40 backdrop-blur-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-primary">Prestige Tier Active</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black font-mono tracking-tighter italic uppercase leading-[0.9] text-white">
                MIND<br /><span className="text-primary">ELITE</span>
              </h1>
              <p className="text-gray-400 text-xs md:text-sm max-w-md leading-relaxed font-medium mx-auto lg:mx-0">
                The absolute pinnacle of the ecosystem. Gain unprecedented access, yield bonuses, and governance power.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
                <Button 
                  onClick={() => onAction?.('apply-elite', 'USDT')}
                  className="h-11 px-5 text-[8px] font-black uppercase tracking-[0.2em]"
                >
                  Ignite Membership
                </Button>
                <Button variant="outline" className="h-11 px-5 text-[8px] font-black uppercase tracking-[0.2em] border-white/10">Browse Utility</Button>
              </div>
            </div>

            <div className="relative group/badge flex items-center justify-center">
              <div className="w-48 h-48 md:w-52 md:h-52 bg-gradient-to-tr from-primary via-blue-500 to-primary rounded-[1.5rem] p-1 shadow-[0_0_50px_rgba(0,255,136,0.08)] flex items-center justify-center transform group-hover/badge:scale-105 transition-transform duration-700">
                <div className="w-full h-full bg-[#050505] rounded-[1.4rem] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5" />
                  <Crown size={60} className="text-primary" />
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-2 glass p-2.5 rounded-xl border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary/20 rounded-lg"><TrendingUp size={10} className="text-primary" /></div>
                  <div>
                    <p className="text-[7px] font-bold text-gray-500 uppercase">APY Boost</p>
                    <p className="text-sm font-bold font-mono text-white">+20%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Card>
      </section>

      {/* Facilities Section */}
      <section className="col-span-1 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="space-y-1.5 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-2xl font-bold font-mono tracking-tighter uppercase italic text-white underline decoration-primary decoration-2 underline-offset-4">Club Facilities</h2>
            <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.3em]">Proprietary privileges for elite members</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <Card className="md:col-span-2 p-6 md:p-8 bg-primary/[0.03] border-primary/10 h-full flex flex-col justify-between group">
            <CheckCircle2 size={20} className="text-primary mb-4" />
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-mono tracking-tighter uppercase italic leading-none">Yield Multiplier</h3>
              <p className="text-gray-400 leading-relaxed text-xs">Receive an industry-leading <span className="text-primary font-bold">20% APY</span> on initial year stake. Direct transfer capabilities to Tier-1 Exchanges ensuring liquidity.</p>
            </div>
          </Card>

          <Card className="p-5 space-y-4 hover:bg-blue-500/[0.03] transition-colors">
            <Zap className="text-blue-400" size={18} />
            <h4 className="text-sm font-bold">CEX Integration</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed font-medium capitalize">Automated staking persistence after the first year. Seamless transitions to global platforms with pre-negotiated APY tiers.</p>
          </Card>

          <Card className="p-5 space-y-4 hover:bg-purple-500/[0.03] transition-colors">
            <Activity className="text-purple-400" size={18} />
            <h4 className="text-sm font-bold">AI Copy Trade</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed font-medium capitalize">Exclusive access to institutional-grade copy trading signals. Mirror the performance of proprietary quant funds.</p>
          </Card>
        </div>
      </section>

      {/* Core Advantages - Minimalist */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <div key={i} className="group p-4 border border-transparent hover:border-white/5 rounded-2xl transition-all">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold tracking-tight text-gray-200 group-hover:text-white transition-colors">{benefit.title}</h4>
                <ChevronRight size={12} className="text-gray-800 group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-gray-500 text-[10px] leading-relaxed">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Membership CTA Section - Optimized Height */}
      <section className="relative glass rounded-3xl p-8 md:p-12 border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-blue-500/10 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black font-mono tracking-tighter uppercase italic leading-tight">Join the Inner Circle</h2>
            <p className="text-gray-400 font-medium text-xs leading-relaxed max-w-md mx-auto">Membership is strictly limited to maintain reward ratios. Secure your position in the MindClub today.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-sm">
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col items-center justify-center space-y-0.5">
              <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Entry Deposit</p>
              <p className="text-2xl font-bold font-mono text-white tracking-tighter italic">$1,250</p>
            </div>
            <button 
              onClick={() => onAction?.('apply-elite', 'USDT')}
              className="bg-primary px-8 py-3 rounded-2xl flex flex-col items-center justify-center group cursor-pointer hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all active:scale-95"
            >
              <p className="text-[8px] font-black text-black/60 uppercase tracking-widest mb-0.5">Status</p>
              <span className="text-base font-bold text-black uppercase tracking-[0.1em] flex items-center gap-2 italic">Apply <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
            </button>
          </div>
        </div>
      </section>

      {/* Community Section - Minimalist */}
      <section className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 md:gap-10 opacity-50 hover:opacity-100 transition-opacity">
          {[
            { icon: MessageCircle, label: "Telegram" },
            { icon: Twitter, label: "Twitter" },
            { icon: Users, label: "Discord" },
            { icon: Facebook, label: "Facebook" },
            { icon: Youtube, label: "Youtube" }
          ].map((social, i) => (
            <button key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              <social.icon size={16} />
              {social.label}
            </button>
          ))}
      </section>
    </div>
  );
};
