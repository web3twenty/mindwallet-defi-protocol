import React, { useState } from 'react';
import { Card, Button, Badge } from '@/src/components/ui/Primitives';
import { Search, Filter, Calendar, Clock, ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface StakingRecord {
  id: string;
  sl: string;
  asset: 'MIND' | 'MUSD' | 'BMIND';
  amount: string;
  days: number;
  dailyBonus: string;
  receivedDays: number;
  remainingDays: number;
  stakingDate: string;
  status: 'Active' | 'Completed';
}

const MOCK_DATA: StakingRecord[] = [
  { id: '1', sl: '001', asset: 'MIND', amount: '5,000.00', days: 100, dailyBonus: '5.20', receivedDays: 45, remainingDays: 55, stakingDate: '2024-03-15', status: 'Active' },
  { id: '2', sl: '002', asset: 'MUSD', amount: '1,200.00', days: 365, dailyBonus: '0.85', receivedDays: 120, remainingDays: 245, stakingDate: '2024-01-10', status: 'Active' },
  { id: '3', sl: '003', asset: 'MIND', amount: '10,000.00', days: 30, dailyBonus: '12.50', receivedDays: 30, remainingDays: 0, stakingDate: '2024-04-01', status: 'Completed' },
  { id: '4', sl: '004', asset: 'MUSD', amount: '500.50', days: 90, dailyBonus: '0.42', receivedDays: 12, remainingDays: 78, stakingDate: '2024-04-20', status: 'Active' },
  { id: '5', sl: '005', asset: 'BMIND', amount: '1,800.00', days: 180, dailyBonus: '4.15', receivedDays: 75, remainingDays: 105, stakingDate: '2024-02-15', status: 'Active' },
  { id: '6', sl: '006', asset: 'BMIND', amount: '2,500.00', days: 180, dailyBonus: '3.10', receivedDays: 175, remainingDays: 5, stakingDate: '2023-11-15', status: 'Active' },
];

export const MyStaking = () => {
  const [filterAsset, setFilterAsset] = useState<'ALL' | 'MIND' | 'MUSD' | 'BMIND'>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'Active' | 'Completed'>('ALL');

  const filteredData = MOCK_DATA.filter(item => {
    const assetMatch = filterAsset === 'ALL' || item.asset === filterAsset;
    const statusMatch = filterStatus === 'ALL' || item.status === filterStatus;
    return assetMatch && statusMatch;
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4 md:px-0">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-4xl font-black font-mono tracking-tighter uppercase italic">Institutional Staking Audit</h1>
          <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">Lifecycle Management & Yield Verification Protocol</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl overflow-x-auto no-scrollbar w-full sm:w-auto">
             {['ALL', 'MIND', 'MUSD', 'BMIND'].map((asset) => (
                <button
                  key={asset}
                  onClick={() => setFilterAsset(asset as any)}
                  className={cn(
                    "px-3 md:px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                    filterAsset === asset ? "bg-white/10 text-white shadow-lg" : "text-gray-500 hover:text-gray-400"
                  )}
                >
                  {asset}
                </button>
             ))}
          </div>
          
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl w-full sm:w-auto">
             {['ALL', 'Active', 'Completed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status as any)}
                  className={cn(
                    "flex-1 sm:flex-none px-3 md:px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                    filterStatus === status ? "bg-white/10 text-white shadow-lg" : "text-gray-500 hover:text-gray-400"
                  )}
                >
                  {status}
                </button>
             ))}
          </div>
        </div>
      </div>

      {/* Main Table Card (Desktop) */}
      <Card className="hidden md:block bg-white/[0.02] border-white/10 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">SL</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">Amount</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">Staking Term</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic text-center">Daily Bonus</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">Received / Remaining</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">Entry Date</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic whitespace-nowrap">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {filteredData.length > 0 ? filteredData.map((tx) => (
                <tr key={tx.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-6 text-[10px] font-black font-mono text-gray-600">{tx.sl}</td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shrink-0">
                        <img src={`/${tx.asset.toLowerCase()}-icon.png`} className="w-full h-full object-contain" alt="" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold font-mono tracking-tighter text-white">{tx.amount}</p>
                        <p className={cn("text-[8px] font-black uppercase tracking-widest", 
                          tx.asset === 'MIND' ? "text-amber-500" : 
                          tx.asset === 'MUSD' ? "text-purple-400" : "text-blue-400"
                        )}>{tx.asset}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 font-mono italic">
                      <Clock size={12} className="text-gray-600" />
                      {tx.days} Days
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <p className={cn("text-xs font-black font-mono flex items-center justify-center gap-1.5 italic", 
                      tx.asset === 'MIND' ? "text-amber-400" : 
                      tx.asset === 'MUSD' ? "text-purple-400" : "text-blue-400"
                    )}>
                      <ArrowUpRight size={12} />
                      +{tx.dailyBonus}
                    </p>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-baseline gap-2">
                       <span className="text-[11px] font-black font-mono text-primary italic">{tx.receivedDays}D</span>
                       <div className="w-px h-2 bg-white/10" />
                       <span className="text-[11px] font-black font-mono text-gray-600 italic">{tx.remainingDays}D</span>
                    </div>
                    <p className="text-[8px] font-bold text-gray-700 uppercase tracking-widest mt-1">Status: {tx.status}</p>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 font-mono">
                      <Calendar size={12} className="text-gray-700" />
                      {tx.stakingDate}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="w-24 space-y-2">
                      <div className="flex justify-between items-center text-[7px] font-black uppercase tracking-widest text-gray-600">
                         <span>Rate</span>
                         <span>{Math.round((tx.receivedDays / tx.days) * 100)}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full rounded-full transition-all duration-1000", tx.status === 'Completed' ? "bg-primary shadow-[0_0_10px_#00ffa6]" : "bg-white/20")}
                          style={{ width: `${(tx.receivedDays / tx.days) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={7} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-20">
                         <Search size={32} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold font-mono tracking-tighter uppercase italic opacity-40">No Protocols Found</p>
                        <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest">Adjust filters for system realignment</p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Mobile Component View */}
      <div className="md:hidden space-y-4 px-4">
        {filteredData.length > 0 ? filteredData.map((tx) => (
          <Card key={tx.id} className="p-5 bg-white/[0.02] border-white/10 space-y-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0">
                  <img src={`/${tx.asset.toLowerCase()}-icon.png`} className="w-full h-full object-contain" alt="" />
                </div>
                <div>
                  <p className="text-lg font-black font-mono tracking-tighter text-white italic">{tx.amount}</p>
                  <div className="flex items-center gap-2">
                    <Badge className={cn("text-[8px] font-black uppercase px-2 py-0 h-4 border-none", 
                      tx.asset === 'MIND' ? "bg-amber-500/20 text-amber-500" : 
                      tx.asset === 'MUSD' ? "bg-purple-500/20 text-purple-400" : "bg-blue-500/20 text-blue-400"
                    )}>{tx.asset}</Badge>
                    <span className="text-[10px] font-bold text-gray-500 font-mono italic">#{tx.sl}</span>
                  </div>
                </div>
              </div>
              <Badge className={cn("text-[8px] font-black uppercase italic", tx.status === 'Completed' ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-500")}>
                {tx.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/[0.03]">
              <div className="space-y-1">
                <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Staking Term</p>
                <p className="text-xs font-bold text-gray-300 font-mono italic">{tx.days} Days</p>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Daily Yield</p>
                <p className={cn("text-xs font-black text-primary font-mono italic flex items-center gap-1", 
                  tx.asset === 'MIND' ? "text-amber-400" : 
                  tx.asset === 'MUSD' ? "text-purple-400" : "text-blue-400"
                )}>
                  +{tx.dailyBonus} <ArrowUpRight size={10} />
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Entry Date</p>
                <p className="text-xs font-bold text-neutral-500 font-mono">{tx.stakingDate}</p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Progress</p>
                <p className="text-xs font-black text-white font-mono">{Math.round((tx.receivedDays / tx.days) * 100)}%</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                 <p className="text-[9px] font-bold text-gray-500 italic">Received: <span className="text-primary">{tx.receivedDays}D</span></p>
                 <p className="text-[9px] font-bold text-gray-500 italic">Remaining: <span className="text-white">{tx.remainingDays}D</span></p>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full rounded-full transition-all duration-1000", tx.status === 'Completed' ? "bg-primary shadow-[0_0_10px_#00ffa6]" : "bg-white/20")}
                  style={{ width: `${(tx.receivedDays / tx.days) * 100}%` }}
                />
              </div>
            </div>
          </Card>
        )) : (
          <div className="py-20 text-center">
             <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">No active protocols found</p>
          </div>
        )}
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
        <Card className="p-6 bg-primary/[0.02] border-primary/10">
          <div className="flex items-start gap-4">
             <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <CheckCircle2 size={20} />
             </div>
             <div className="space-y-2">
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest italic">Automatic Settlement</h4>
                <p className="text-[11px] text-gray-500 italic leading-relaxed">
                  Yield bonuses are computed at 00:00 UTC and automatically credited to your node available balance. No manual claim action required during the active term.
                </p>
             </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white/[0.02] border-white/10">
          <div className="flex items-start gap-4">
             <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-gray-400">
                <ChevronDown size={20} />
             </div>
             <div className="space-y-2">
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest italic">Maturity Protocol</h4>
                <p className="text-[11px] text-gray-500 italic leading-relaxed">
                  Upon completion of the staking term, capital is released into a 72-hour security buffer before becoming eligible for withdrawal or rollover to a new node tier.
                </p>
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
