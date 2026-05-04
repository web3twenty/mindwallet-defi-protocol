import React, { useState } from 'react';
import { Card, Button, Badge } from '@/src/components/ui/Primitives';
import { 
  Wallet as WalletIcon, 
  ArrowUpRight, 
  ArrowDownLeft, 
  RefreshCw, 
  ChevronRight, 
  Plus, 
  Send,
  Lock,
  Eye,
  EyeOff,
  Copy,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface AssetBalance {
  id: string;
  name: string;
  symbol: string;
  balance: string;
  usdValue: string;
  change?: string;
  color: string;
  icon: string;
}

const ASSET_DATA: AssetBalance[] = [
  { id: '0', name: 'USDT AVAILABLE', symbol: 'USDT', balance: '282.10', usdValue: '282.10', color: 'bg-emerald-500', icon: '/usdt-icon.png' },
  { id: '1', name: 'MIND PORTFOLIO', symbol: 'MIND', balance: '12,450.00', usdValue: '3,112.50', color: 'bg-amber-500', icon: '/mind-icon.png' },
  { id: '2', name: 'MUSD PORTFOLIO', symbol: 'MUSD', balance: '5,000.53', usdValue: '5,000.53', color: 'bg-purple-500', icon: '/musd-icon.png' },
  { id: '3', name: 'BMIND YIELD', symbol: 'BMIND', balance: '1,240.22', usdValue: '620.11', color: 'bg-blue-500', icon: '/bmind-icon.png' },
];

export const Wallet = () => {
  const [showBalances, setShowBalances] = useState(true);

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header & Main Balance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
        <Card className="lg:col-span-2 p-6 md:p-10 bg-gradient-to-br from-white/[0.04] to-transparent border-white/5 relative overflow-hidden group shadow-2xl">
           <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] group-hover:bg-primary/20 transition-all duration-1000" />
           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/5 blur-[100px]" />
           
           <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 h-full">
              <div className="space-y-6 md:space-y-8">
                 <div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                       <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
                       <p className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em]">Integrated Portfolio Protocol</p>
                       <button 
                         onClick={() => setShowBalances(!showBalances)}
                         className="p-1 hover:bg-white/10 rounded-lg transition-colors text-gray-500 hover:text-white"
                       >
                          {showBalances ? <Eye size={12} /> : <EyeOff size={12} />}
                       </button>
                    </div>
                    <div className="flex items-baseline gap-3 md:gap-4">
                       <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tighter text-white italic">
                          {showBalances ? '$6,378.00' : '••••••'}
                       </h2>
                       <Badge className="bg-primary/20 text-primary border-none text-[8px] md:text-[10px] font-black uppercase italic h-5 md:h-6 px-2 md:px-3">VAL-SECURED</Badge>
                    </div>
                 </div>

                 <div className="flex flex-row gap-2 md:gap-4 pt-1">
                    <Button className="flex-1 md:flex-none h-12 md:h-16 px-4 md:px-8 bg-primary text-black font-black uppercase tracking-widest text-[9px] md:text-[11px] italic shadow-[0_0_20px_rgba(0,255,166,0.15)] hover:scale-[1.02] transition-all rounded-xl md:rounded-2xl">
                       <Plus size={16} className="mr-1 md:mr-2" /> Initial Deposit
                    </Button>
                    <Button variant="outline" className="flex-1 md:flex-none h-12 md:h-16 px-4 md:px-8 border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-[9px] md:text-[11px] italic hover:bg-white/10 transition-all rounded-xl md:rounded-2xl">
                       <Send size={14} className="mr-1 md:mr-2" /> Transfer
                    </Button>
                 </div>
              </div>

              <div className="flex-1 max-w-[220px] hidden md:block">
                 <div className="aspect-square relative group/chart">
                    <div className="absolute inset-0 rounded-full border-[12px] border-white/5 scale-95 group-hover/chart:scale-100 transition-transform duration-700" />
                    <div className="absolute inset-0 rounded-full border-[12px] border-primary/40 scale-95 group-hover/chart:scale-100 transition-transform duration-700" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 50%)' }} />
                    <div className="absolute inset-0 rounded-full border-[12px] border-purple-500/40 scale-95 group-hover/chart:scale-100 transition-transform duration-700" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="text-center">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Growth</p>
                          <p className="text-2xl font-black text-white font-mono italic">+12%</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </Card>

        {/* Security / Address Card */}
        <Card className="p-6 md:p-10 bg-white/[0.02] border-white/5 flex flex-col justify-between space-y-6 md:space-y-8 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 md:p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <Lock size={100} />
           </div>
           <div className="space-y-4 md:space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                 <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-xl">
                    <Lock size={16} md:size={20} />
                 </div>
                 <p className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest italic">Node Integrity Shell</p>
              </div>
              <div className="p-4 md:p-5 bg-black/60 border border-white/5 rounded-2xl md:rounded-3xl space-y-3 md:space-y-4">
                 <p className="text-[8px] md:text-[9px] font-bold text-gray-600 uppercase tracking-widest">Global Routing Identifier</p>
                 <div className="flex items-center justify-between gap-3 md:gap-4">
                    <p className="text-[10px] md:text-[11px] font-mono text-gray-400 truncate tracking-tight">0x71C765...d8976F</p>
                    <button className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-white/5 text-primary hover:bg-primary/10 transition-all active:scale-90">
                       <Copy size={14} md:size={16} />
                    </button>
                 </div>
              </div>
           </div>
           
           <div className="space-y-3 md:space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                 <p className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] font-mono">Security Protocol</p>
                 <span className="text-[9px] md:text-[10px] font-black text-emerald-400 tracking-widest italic uppercase">VAL-SYNC</span>
              </div>
              <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                 <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-primary rounded-full shadow-[0_0_15px_rgba(0,255,166,0.4)]" />
              </div>
           </div>
        </Card>
      </div>

      {/* Assets Grid */}
      <div className="px-4 md:px-0">
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-primary rounded-full shadow-[0_0_15px_#00ffa6]" />
              <h3 className="text-2xl font-black font-mono tracking-tighter text-white uppercase italic flex items-center gap-3">
                 Digital Asset Vault
              </h3>
           </div>
           <button className="text-[10px] font-black text-gray-600 uppercase tracking-widest hover:text-white transition-all flex items-center gap-2 group">
              Vault Explorer <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {ASSET_DATA.map((asset) => (
            <Card key={asset.id} className="p-5 md:p-8 bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 shadow-2xl space-y-6 md:space-y-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-5 md:p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-all">
                  <WalletIcon size={80} md:size={120} />
               </div>

               <div className="flex items-center gap-3 md:gap-4 relative z-10">
                  <div className={cn("w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center p-2.5 md:p-3 shadow-2xl relative", 
                    asset.id === '0' ? "bg-emerald-500/10" : 
                    asset.id === '1' ? "bg-amber-500/10" : 
                    asset.id === '2' ? "bg-purple-500/10" : "bg-blue-500/10"
                  )}>
                     <img src={asset.icon} className="w-full h-full object-contain" alt="" />
                  </div>
                  <div>
                     <h4 className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] md:tracking-[0.2em]">{asset.name}</h4>
                     <p className="text-[10px] md:text-xs font-bold text-gray-500 font-mono italic tracking-tight">${asset.usdValue}</p>
                  </div>
               </div>

               <div className="relative z-10">
                  <div className="flex items-baseline gap-1 md:gap-2">
                     <p className="text-3xl md:text-4xl font-black font-mono text-white italic tracking-tighter leading-none">
                        {showBalances ? asset.balance : '••••'}
                     </p>
                     <p className={cn("text-[10px] md:text-xs font-black font-mono italic", 
                       asset.id === '0' ? "text-emerald-400" : 
                       asset.id === '1' ? "text-amber-400" : 
                       asset.id === '2' ? "text-purple-400" : "text-blue-400"
                     )}>{asset.symbol}</p>
                  </div>
               </div>

               <div className="flex flex-row gap-1.5 md:gap-2 pt-1 md:pt-2 relative z-10">
                  <Button variant="outline" className="flex-1 h-9 md:h-10 min-w-0 px-1 md:px-3 bg-white/5 border-white/10 text-[8px] md:text-[9px] font-black uppercase tracking-widest hover:bg-white/10 rounded-lg md:rounded-xl transition-all flex items-center justify-center">
                     <ArrowDownLeft size={10} md:size={12} className={cn("mr-1", 
                       asset.id === '0' ? "text-emerald-400" : 
                       asset.id === '1' ? "text-amber-400" : 
                       asset.id === '2' ? "text-purple-400" : "text-blue-400"
                     )} /> <span className="truncate">DEPOSIT</span>
                  </Button>
                  <Button variant="outline" className="flex-1 h-9 md:h-10 min-w-0 px-1 md:px-3 bg-white/5 border-white/10 text-[8px] md:text-[9px] font-black uppercase tracking-widest hover:bg-white/10 rounded-lg md:rounded-xl transition-all flex items-center justify-center">
                     <ArrowUpRight size={10} md:size={12} className={cn("mr-1", 
                       asset.id === '0' ? "text-emerald-400" : 
                       asset.id === '1' ? "text-amber-400" : 
                       asset.id === '2' ? "text-purple-400" : "text-blue-400"
                     )} /> <span className="truncate">WITHDRAW</span>
                  </Button>
                  <Button className={cn("flex-1 h-9 md:h-10 min-w-0 px-1 md:px-3 text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-lg md:rounded-xl transition-all flex items-center justify-center border", 
                    asset.id === '0' ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20" : 
                    asset.id === '1' ? "bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20" : 
                    asset.id === '2' ? "bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20" : 
                    "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
                  )}>
                     <RefreshCw size={10} md:size={12} className="mr-1" /> <span className="truncate">XFER</span>
                  </Button>
               </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Protocol Staking Assets */}
      <div className="px-4 md:px-0">
         <Card className="p-8 md:p-10 bg-white/[0.01] border-white/5 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:opacity-[0.04] transition-opacity">
               <Lock size={160} />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 relative z-10 gap-6">
               <div>
                  <h3 className="text-2xl font-black font-mono tracking-tighter text-white uppercase italic">Protocol Staking Assets</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-2">Decentralized Governance & Asset Locking Matrix</p>
               </div>
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                     <span className="text-[10px] font-black text-primary uppercase tracking-widest">Live Sync</span>
                  </div>
               </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-6 mb-6 px-6 text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic relative z-10">
               <div className="col-span-2">Wallet / Node Name</div>
               <div className="text-right">Available</div>
               <div className="text-right">USDT Equiv</div>
               <div className="text-right">Staked/Locked</div>
               <div className="text-right">Initialization</div>
            </div>

            <div className="space-y-4 relative z-10">
               {[
                 { name: 'MindChain Mainnet', asset: 'MIND', available: '7,450.00', usdt: '$1,862.50', locked: '5,000.00', icon: 'amber' },
                 { name: 'Stable Yield Node', asset: 'MUSD', available: '1,640.50', usdt: '$1,640.50', locked: '1,200.00', icon: 'purple' },
                 { name: 'Governance Vault', asset: 'BMIND', available: '250.00', usdt: '$125.00', locked: '600.00', icon: 'blue' },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col md:grid md:grid-cols-6 md:items-center p-6 bg-white/[0.02] border border-white/[0.05] rounded-3xl hover:bg-white/[0.04] transition-all duration-500 group gap-5 md:gap-0">
                    <div className="col-span-2 flex items-center gap-5">
                       <div className={cn(
                         "w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xl skew-x-[-6deg]",
                         item.icon === 'amber' ? "bg-amber-500/10 border-amber-500/20 text-amber-400" : 
                         item.icon === 'purple' ? "bg-purple-500/10 border-purple-500/20 text-purple-400" : 
                         "bg-blue-500/10 border-blue-500/20 text-blue-400"
                       )}>
                          <div className="w-8 h-8 rounded-xl bg-white/5 p-1.5 skew-x-[6deg]">
                             <img src={`/${item.asset.toLowerCase()}-icon.png`} className="w-full h-full object-contain" alt="" />
                          </div>
                       </div>
                       <div>
                          <p className="text-base font-black text-white italic uppercase tracking-tight">{item.name}</p>
                          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">{item.asset} Protocol Verified Node</p>
                       </div>
                    </div>
                    
                    <div className="md:text-right">
                       <p className="md:hidden text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Available</p>
                       <p className="text-sm font-bold font-mono text-white/80 italic tracking-tighter">{item.available} {item.asset}</p>
                    </div>

                    <div className="md:text-right">
                       <p className="md:hidden text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">USDT Value</p>
                       <p className="text-sm font-bold font-mono text-primary italic tracking-tighter">{item.usdt}</p>
                    </div>

                    <div className="md:text-right">
                       <p className="md:hidden text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Locked</p>
                       <p className="text-sm font-bold font-mono text-amber-400/80 italic tracking-tighter">{item.locked} {item.asset}</p>
                    </div>

                    <div className="flex justify-end">
                       <Button className="h-12 w-full md:w-32 bg-primary text-black font-black uppercase tracking-[0.2em] text-[10px] italic hover:scale-105 shadow-xl shadow-primary/20 transition-all rounded-xl">
                          INITIALIZE
                       </Button>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="text-[10px] font-bold text-gray-500 italic uppercase tracking-[0.3em]">Protocol Security Status: <span className="text-emerald-400 font-black shadow-[0_0_10px_rgba(52,211,153,0.3)]">ENCRYPTED</span></p>
               <Button variant="ghost" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-all italic h-auto p-0 flex items-center gap-3 group">
                  Protocol Configuration Hub <ChevronRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
               </Button>
            </div>
         </Card>
      </div>
    </div>
  );
};
