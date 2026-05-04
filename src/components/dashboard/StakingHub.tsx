import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button, Card, Badge } from '@/src/components/ui/Primitives';
import { 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Coins, 
  ArrowRight, 
  ChevronRight,
  Zap,
  Lock,
  PieChart
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface StakingProps {
  onAction: (type: 'deposit' | 'withdraw' | 'transfer' | 'stake' | 'apply-elite', asset: string) => void;
}

export const StakingHub = ({ onAction }: StakingProps) => {
  const [activeProto, setActiveProto] = useState<'mind' | 'musd' | 'bmind'>('mind');

  const mindStats = [
    { label: 'Network APR', value: '18.4%', icon: TrendingUp, color: 'text-amber-400' },
    { label: 'Your Staked', value: '15,200 MIND', icon: ShieldCheck, color: 'text-primary' },
    { label: 'Total Rewards', value: '450.20 MIND', icon: Award, color: 'text-blue-400' }
  ];

  const musdStats = [
    { label: 'Yield APR', value: '12.5%', icon: TrendingUp, color: 'text-purple-400' },
    { label: 'Your Staked', value: '5,000 MUSD', icon: ShieldCheck, color: 'text-purple-500' },
    { label: 'Total Rewards', value: '124.50 MUSD', icon: Award, color: 'text-emerald-400' }
  ];

  const bmindStats = [
    { label: 'Governance APR', value: '24.2%', icon: TrendingUp, color: 'text-blue-400' },
    { label: 'Your Staked', value: '850 BMIND', icon: ShieldCheck, color: 'text-blue-500' },
    { label: 'Total Rewards', value: '12.80 BMIND', icon: Award, color: 'text-amber-400' }
  ];

  const getActiveStats = () => {
    if (activeProto === 'mind') return mindStats;
    if (activeProto === 'musd') return musdStats;
    return bmindStats;
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-black font-mono tracking-tighter uppercase italic">Yield Nexus</h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Advanced Staking Protocols & Reward Distribution</p>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl w-full md:w-auto overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveProto('mind')}
            className={cn(
              "flex-1 md:w-32 py-2.5 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 whitespace-nowrap",
              activeProto === 'mind' ? "bg-white/10 text-white shadow-xl" : "text-gray-500 hover:text-gray-300"
            )}
          >
            <img src="/mind-icon.png" className="w-4 h-4 object-contain" alt="" />
            Earn MIND
          </button>
          <button 
            onClick={() => setActiveProto('musd')}
            className={cn(
              "flex-1 md:w-32 py-2.5 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 whitespace-nowrap",
              activeProto === 'musd' ? "bg-white/10 text-white shadow-xl" : "text-gray-500 hover:text-gray-300"
            )}
          >
            <img src="/musd-icon.png" className="w-4 h-4 object-contain" alt="" />
            Earn MUSD
          </button>
          <button 
            onClick={() => setActiveProto('bmind')}
            className={cn(
              "flex-1 md:w-32 py-2.5 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 whitespace-nowrap",
              activeProto === 'bmind' ? "bg-white/10 text-white shadow-xl" : "text-gray-500 hover:text-gray-300"
            )}
          >
            <img src="/bmind-icon.png" className="w-4 h-4 object-contain" alt="" />
            Earn BMIND
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {getActiveStats().map((stat, i) => (
          <Card key={i} className="p-6 bg-white/[0.02] border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
              <stat.icon size={64} />
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10 shadow-lg", stat.color)}>
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-xl font-bold font-mono text-white tracking-tighter">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeProto}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Staking Interface */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="p-8 md:p-10 border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent relative overflow-hidden">
               <div className={cn(
                 "absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20",
                 activeProto === 'mind' ? "bg-amber-500" : activeProto === 'musd' ? "bg-purple-500" : "bg-blue-500"
               )} />
               
               <div className="relative z-10 space-y-8">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                       <div className="p-4 rounded-3xl bg-white/5 border border-white/10 shadow-2xl skew-x-[-12deg]">
                          <img src={`/${activeProto}-icon.png`} className="w-12 h-12 object-contain skew-x-[12deg]" alt="" />
                       </div>
                       <div>
                          <h2 className="text-2xl font-black font-mono tracking-tighter italic uppercase">
                            {activeProto === 'mind' ? 'Mind Validator Staking' : activeProto === 'musd' ? 'MUSA Reserve Protocol' : 'BMIND Governance Vault'}
                          </h2>
                          <div className="flex items-center gap-3 mt-1">
                             <Badge className="bg-primary/20 text-primary border-none text-[8px] font-black uppercase">Active Yield</Badge>
                             <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1">
                                <Clock size={10} /> {activeProto === 'bmind' ? '7 Day Unbonding' : '21 Day Unbonding'}
                             </span>
                          </div>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Estimated Monthly Rewards</p>
                       <p className={cn("text-3xl font-black font-mono italic tracking-tighter", activeProto === 'mind' ? "text-amber-400" : activeProto === 'musd' ? "text-purple-400" : "text-blue-400")}>
                          {activeProto === 'mind' ? '232.00 MIND' : activeProto === 'musd' ? '52.50 MUSD' : '45.10 BMIND'}
                       </p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/40 rounded-3xl p-6 border border-white/5 space-y-4">
                       <div className="flex items-center justify-between">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Protocol Attributes</p>
                          <Zap size={14} className="text-primary" />
                       </div>
                       <div className="space-y-4">
                          {[
                            { label: 'Self Commission', value: '1.5%' },
                            { label: 'Uptime Score', value: '99.98%' },
                            { label: 'Insurance Fund', value: 'Protected' }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-white/[0.03] pb-3 last:border-0 last:pb-0">
                               <span className="text-[10px] text-gray-500 font-bold italic">{item.label}</span>
                               <span className="text-[11px] text-white font-mono font-bold tracking-tight">{item.value}</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="bg-black/40 rounded-3xl p-6 border border-white/5 space-y-4">
                       <div className="flex items-center justify-between">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Yield Compounding</p>
                          <PieChart size={14} className="text-blue-400" />
                       </div>
                       <div className="space-y-4">
                          {[
                            { label: 'Compounding Frequency', value: 'Real-time' },
                            { label: 'Reward Distribution', value: 'Auto-claimable' },
                            { label: 'Re-staking Protocol', value: 'Enabled' }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-white/[0.03] pb-3 last:border-0 last:pb-0">
                               <span className="text-[10px] text-gray-500 font-bold italic">{item.label}</span>
                               <span className="text-[11px] text-white font-mono font-bold tracking-tight">{item.value}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="flex flex-col md:flex-row gap-4 pt-4">
                    <Button 
                      className={cn(
                        "flex-1 h-16 rounded-2xl text-black font-black uppercase tracking-[0.2em] italic shadow-2xl transition-all hover:scale-[1.02]",
                        activeProto === 'mind' ? "bg-amber-400" : "bg-purple-500 text-white"
                      )}
                      onClick={() => onAction('stake', activeProto.toUpperCase())}
                    >
                      Initialize {activeProto.toUpperCase()} Stake <ArrowRight size={20} className="ml-2" />
                    </Button>
                    <Button variant="ghost" className="h-16 px-10 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10">
                      Unbond Request
                    </Button>
                 </div>
               </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="p-6 border-white/5 bg-white/[0.01]">
                  <div className="flex items-center gap-3 mb-6">
                     <Lock size={16} className="text-gray-500" />
                     <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Staking Governance</h4>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed italic mb-6">
                    By staking on the {activeProto.toUpperCase()} protocol, you participate in the network integrity validation. Ensure you understand the 21-day unbonding period required for asset liquidity restoration.
                  </p>
                  <Button variant="ghost" className="h-10 w-full bg-white/5 border border-white/10 rounded-xl text-[8px] font-black uppercase tracking-widest">
                    Governance Documents
                  </Button>
               </Card>
               <Card className="p-6 border-white/5 bg-white/[0.01]">
                  <div className="flex items-center gap-3 mb-6">
                     <Coins size={16} className="text-gray-500" />
                     <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Asset Security</h4>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed italic mb-6">
                    MIND Chain assets are secured via multi-signature node verification and encrypted protocol shells. Your private keys remain restricted during the full staking lifecycle.
                  </p>
                  <Button variant="ghost" className="h-10 w-full bg-white/5 border border-white/10 rounded-xl text-[8px] font-black uppercase tracking-widest">
                    Security Audit V.4.2
                  </Button>
               </Card>
            </div>
          </div>

          {/* Side Info Panel */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 border-white/10 bg-white/[0.02]">
               <h3 className="text-[11px] font-black text-white uppercase tracking-widest mb-6 italic">Reward Distribution Curve</h3>
               <div className="space-y-6">
                  {[
                    { day: 'Day 01-07', yield: '12% Base', status: 'Active' },
                    { day: 'Day 08-30', yield: '15% Enhanced', status: 'Upcoming' },
                    { day: 'Day 31+', yield: '18%+ Elite', status: 'Locked' }
                  ].map((tier, i) => (
                    <div key={i} className="group relative">
                       <div className="flex items-center justify-between mb-2">
                          <p className="text-[10px] font-bold text-gray-500 italic">{tier.day}</p>
                          <p className={cn("text-[10px] font-black uppercase tracking-widest", tier.status === 'Active' ? "text-primary" : "text-gray-600")}>{tier.yield}</p>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: tier.status === 'Active' ? '30%' : '0%' }}
                            className={cn("h-full rounded-full", tier.status === 'Active' ? "bg-primary shadow-[0_0_10px_#00ffa6]" : "bg-gray-800")}
                          />
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest italic mb-4">MIND CHAIN POOL DEPTH</p>
                  <div className="text-2xl font-black font-mono text-white tracking-widest italic">
                    12,500,200.00
                  </div>
               </div>
            </Card>

            <Card className="p-6 border-white/10 bg-gradient-to-b from-primary/[0.05] to-transparent">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <h3 className="text-[11px] font-black text-white uppercase tracking-widest italic">Network Activity</h3>
               </div>
               <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                       <div className="w-1.5 h-8 bg-primary/20 rounded-full shrink-0" />
                       <div className="space-y-1">
                          <p className="text-[10px] text-gray-300 font-bold italic line-clamp-1">New Node Validator synchronized on mainnet</p>
                          <p className="text-[8px] text-gray-600 tracking-widest font-black uppercase">2 mins ago • Block #8,542,120</p>
                       </div>
                    </div>
                  ))}
               </div>
               <Button variant="ghost" className="w-full h-10 mt-6 border border-white/5 bg-white/5 rounded-xl text-[8px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group">
                  Protocol Explorer <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
               </Button>
            </Card>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Award = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);
