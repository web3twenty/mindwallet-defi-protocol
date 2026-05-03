import React from 'react';
import { Card, Button, Badge } from '@/src/components/ui/Primitives';
import { Brain, DollarSign, Zap, ArrowUpRight, ArrowDownLeft, RefreshCw, Star, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const UserProfileCard = ({ onAction }: { onAction: (type: 'deposit' | 'withdraw' | 'transfer', asset: string) => void }) => (
  <Card className="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-br from-white/[0.02] to-transparent border-white/5 p-5 md:p-6 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
    
    <div className="relative z-10">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] overflow-hidden ring-1 ring-white/10 shadow-2xl transition-all group-hover:scale-105">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya&backgroundColor=0A0A0A" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div className="absolute -bottom-1 -right-1 bg-primary text-black rounded-lg px-2 py-0.5 flex items-center gap-1 shadow-xl">
        <ShieldCheck size={10} fill="currentColor" className="text-black" />
        <span className="text-[8px] font-black uppercase tracking-tighter">Verified</span>
      </div>
    </div>

    <div className="flex-1 space-y-3 text-center lg:text-left relative z-10 w-full">
      <div className="space-y-0.5">
        <h2 className="text-xl md:text-2xl font-black font-mono tracking-tighter text-white uppercase italic leading-none">Aditya Joy</h2>
        <div className="flex items-center justify-center lg:justify-start gap-2 text-[9px] font-bold text-gray-500 uppercase tracking-widest opacity-60">
          <span>Tier-2 Node Validator</span>
          <div className="w-1 h-1 rounded-full bg-gray-700" />
          <span>Active Session</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
        {[
          { icon: Award, label: 'Ambassador', color: 'text-orange-400' },
          { icon: Star, label: 'Elite', color: 'text-primary' },
          { icon: Zap, label: 'Pro', color: 'text-blue-400' }
        ].map((badge, i) => (
          <div key={i} className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/5 hover:border-white/20 transition-colors group/badge">
            <badge.icon size={10} className={cn("transition-transform group-hover/badge:scale-110", badge.color)} />
            <span className="text-[7px] font-black uppercase tracking-widest text-gray-400 group-hover/badge:text-white transition-colors">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full lg:w-auto lg:min-w-[280px] bg-black/40 border border-white/5 rounded-[1.5rem] p-5 md:p-6 space-y-4 relative z-10">
      <div className="space-y-0.5 text-center">
        <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.3em]">Vault Liquidity</p>
        <div className="flex flex-col">
          <h3 className="text-2xl md:text-3xl font-black font-mono text-white tracking-tighter leading-none">5,000.53</h3>
          <p className="text-[9px] font-black text-primary font-mono tracking-[0.2em] mt-1 uppercase">MIND Network Unit</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <Button 
          size="sm" 
          className="h-9 bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10 hover:text-white transition-all uppercase text-[7px] font-black tracking-widest"
          onClick={() => onAction('deposit', 'MIND')}
        >
          Deposit
        </Button>
        <Button 
          size="sm" 
          className="h-9 bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10 hover:text-white transition-all uppercase text-[7px] font-black tracking-widest"
          onClick={() => onAction('withdraw', 'MIND')}
        >
          Withdraw
        </Button>
        <Button 
          size="sm" 
          className="h-9 bg-primary text-black hover:scale-[1.02] transition-all uppercase text-[7px] font-black tracking-widest"
          onClick={() => onAction('transfer', 'MIND')}
        >
          Merge
        </Button>
      </div>
    </div>
  </Card>
);

export const BalanceGrid = ({ onAction }: { onAction: (type: 'deposit' | 'withdraw' | 'transfer', asset: string) => void }) => {
  const cards = [
    { label: 'MUSD Portfolio', value: '5,000.53', symbol: 'MUSD', valueUsdt: '$5,000.53', icon: DollarSign, color: 'text-blue-400' },
    { label: 'BMIND Yield', value: '1,240.22', symbol: 'BMIND', valueUsdt: '$10,542.12', icon: Zap, color: 'text-primary' },
    { label: 'USDT Available', value: '282.10', symbol: 'USDT', valueUsdt: '$282.10', icon: ShieldCheck, color: 'text-orange-400' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {cards.map((item, i) => (
        <Card key={i} className="bg-gradient-to-br from-white/[0.02] to-transparent border-white/5 p-5 md:p-6 space-y-6 group hover:border-white/10 transition-all cursor-default relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
            <item.icon size={80} />
          </div>
          
          <div className="flex items-start justify-between">
            <div className={cn("p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform", item.color)}>
              <item.icon size={16} />
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em]">{item.label}</p>
              <p className="text-[10px] font-mono font-bold text-gray-500">{item.valueUsdt}</p>
            </div>
          </div>
          
          <div className="space-y-0.5">
            <h4 className="text-2xl font-black font-mono text-white tracking-tighter leading-none">
              {item.value} <span className="text-[10px] text-gray-600 font-bold tracking-widest">{item.symbol}</span>
            </h4>
          </div>

          <div className="grid grid-cols-3 gap-2">
             <Button variant="ghost" className="h-8 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 text-[7px] font-black uppercase tracking-widest" onClick={() => onAction('deposit', item.symbol)}>Deposit</Button>
             <Button variant="ghost" className="h-8 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 text-[7px] font-black uppercase tracking-widest" onClick={() => onAction('withdraw', item.symbol)}>Withdraw</Button>
             <Button variant="ghost" className="h-10 md:h-8 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 text-[7px] font-black uppercase tracking-widest" onClick={() => onAction('transfer', item.symbol)}>Transfer</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

const CircleDollarSign = ({ size, className }: { size?: number, className?: string }) => (
  <div className={cn("flex items-center justify-center", className)}>
    <div className="border-2 border-current rounded-full" style={{ width: size, height: size }}>
      <span className="text-[10px] font-bold">$</span>
    </div>
  </div>
);
