import React from 'react';
import { Card, Button, Badge } from '@/src/components/ui/Primitives';
import { STAKING_POOLS, MARKET_STATS, TARGET_STATS } from '@/src/constants';
import { Brain, DollarSign, Zap, Star, ShoppingBag, Award, TrendingUp, Activity, Layers, Target, Clock, ChevronRight, ArrowUpRight, ShieldCheck, Users } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, any> = {
  Brain: Brain,
  DollarSign: DollarSign,
  Zap: Zap,
  Star: Star,
  ShoppingBag: ShoppingBag,
  Award: Award
};

export const StakingTable = ({ onAction }: { onAction: (type: 'deposit' | 'withdraw' | 'transfer', asset: string) => void }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between px-2">
      <h3 className="text-xl font-bold font-mono tracking-tighter uppercase italic flex items-center gap-3 text-white">
        <div className="w-2 h-6 bg-primary rounded-full shadow-[0_0_15px_rgba(0,255,136,0.4)]" />
        Protocol Staking
      </h3>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 uppercase text-[9px] font-black tracking-widest text-gray-500">
          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          Nodes Active: 2,401
        </div>
      </div>
    </div>

    <div className="bg-black/20 border border-white/5 rounded-[2.5rem] overflow-hidden">
      <div className="grid grid-cols-5 md:grid-cols-6 px-8 py-5 border-b border-white/5 text-gray-700 text-[10px] font-black uppercase tracking-[0.2em] bg-white/[0.01]">
        <span className="col-span-1 md:col-span-2">Asset / Pool</span>
        <span className="text-center md:text-left">APY Yield</span>
        <span className="hidden md:block">TVL Liquid</span>
        <span className="text-center md:text-left">My Stake</span>
        <span className="text-right">Portal</span>
      </div>

      <div className="divide-y divide-white/5">
        {[
          { name: 'MindChain Core', symbol: 'MIND', apy: '+24.5%', tvl: '$24.5M', staked: '12,500', icon: Zap, actionType: 'Stake', color: 'text-primary' },
          { name: 'Governance Node', symbol: 'BMIND', apy: '+18.2%', tvl: '$18.2M', staked: '5,000', icon: ShieldCheck, actionType: 'Stake', color: 'text-blue-400' },
          { name: 'Elite Liquidity', symbol: 'MUSD', apy: '+12.0%', tvl: '$10.0M', staked: '2,500', icon: TrendingUp, actionType: 'Transfer', color: 'text-purple-400' },
          { name: 'Community Pool', symbol: 'USDT', apy: '+8.5%', tvl: '$15.8M', staked: '1,200', icon: Users, actionType: 'Transfer', color: 'text-orange-400' }
        ].map((pool, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="grid grid-cols-5 md:grid-cols-6 px-8 py-6 items-center hover:bg-white/[0.02] transition-colors border-none group"
          >
            <div className="col-span-1 md:col-span-2 flex items-center gap-4">
              <div className={cn("p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shadow-lg shadow-black/50", pool.color)}>
                <pool.icon size={20} />
              </div>
              <div>
                <p className="font-bold text-sm text-white">{pool.name}</p>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{pool.symbol}</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-lg border border-primary/20">
                {pool.apy}
              </span>
            </div>
            <div className="hidden md:block font-mono text-sm text-gray-500 tracking-tighter">{pool.tvl}</div>
            <div className="text-center md:text-left font-mono text-sm text-white font-bold tracking-tighter">{pool.staked} <span className="text-[9px] text-gray-600 font-normal">{pool.symbol}</span></div>
            <div className="text-right">
              <Button 
                size="sm" 
                variant={pool.actionType === 'Stake' ? 'primary' : 'secondary'} 
                className={cn(
                  "h-9 px-5 text-[9px] font-black uppercase tracking-[0.2em] shadow-none rounded-xl transition-all",
                  pool.actionType === 'Transfer' && "border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                )}
                onClick={() => pool.actionType === 'Transfer' && onAction('transfer', pool.symbol)}
              >
                {pool.actionType}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const MarketWidgets = () => (
  <Card className="p-8 space-y-8 bg-gradient-to-br from-white/[0.02] to-transparent border-white/5 h-full">
    <div className="space-y-1">
      <h3 className="text-xs font-black text-gray-600 uppercase tracking-[0.4em]">Global Metrics</h3>
      <p className="text-xl font-bold font-mono text-white tracking-tighter italic">MARKET PULSE</p>
    </div>

    <div className="space-y-4">
      {[
        { label: 'Network Hashrate', value: '42.5 PH/s', change: '+2.1%', up: true },
        { label: 'Daily Volume', value: '$124.8M', change: '+15.4%', up: true },
        { label: 'Active Validators', value: '1,402', change: '-3', up: false },
        { label: 'Gas Price', value: '12 Gwei', change: 'Normal', up: true }
      ].map((stat, i) => (
        <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 group hover:border-primary/20 transition-all cursor-crosshair">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-none">{stat.label}</span>
            <span className={cn("text-[9px] font-black underline decoration-2 underline-offset-2", stat.up ? "text-primary decoration-primary/30" : "text-red-500 decoration-red-500/30")}>{stat.change}</span>
          </div>
          <p className="text-lg font-bold font-mono tracking-tighter text-gray-200 group-hover:text-white transition-colors">{stat.value}</p>
        </div>
      ))}
    </div>

    <div className="pt-4 border-t border-white/5">
      <div className="p-5 rounded-3xl bg-primary/5 border border-primary/20 text-center space-y-3">
        <div className="w-2 h-2 rounded-full bg-primary mx-auto animate-ping" />
        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] leading-none">Status: Nominal</p>
        <p className="text-[11px] text-gray-500 font-medium">All network clusters are operating at peak health.</p>
      </div>
    </div>
  </Card>
);
