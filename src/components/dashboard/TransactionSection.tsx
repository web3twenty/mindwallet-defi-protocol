import React, { useState } from 'react';
import { TRANSACTIONS } from '@/src/constants';
import { History, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export const TransactionSection = () => {
  const [activeTab, setActiveTab] = useState<'cash' | 'token'>('cash');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
        <h3 className="text-xl font-bold font-mono tracking-tighter uppercase italic flex items-center gap-3 text-white">
          Recent Transactions <History size={20} className="text-primary" />
        </h3>
        <div className="flex bg-white/5 rounded-full p-1 border border-white/10 w-fit">
          <button 
            onClick={() => setActiveTab('cash')}
            className={cn(
              "px-4 md:px-6 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all",
              activeTab === 'cash' ? "bg-primary text-black" : "text-gray-500 hover:text-white"
            )}
          >
            Cash Wallet
          </button>
          <button 
            onClick={() => setActiveTab('token')}
            className={cn(
              "px-4 md:px-6 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all",
              activeTab === 'token' ? "bg-primary text-black" : "text-gray-500 hover:text-white"
            )}
          >
            Token Wallet
          </button>
        </div>
      </div>

      <div className="glass rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5">
        <div className="overflow-x-auto custom-scrollbar">
          <div className="min-w-[800px] md:min-w-[900px]">
            <div className="grid grid-cols-7 px-6 md:px-8 py-5 border-b border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest bg-white/[0.03]">
              <span className="">No.</span>
              <span className="col-span-2">Method</span>
              <span className="">Amount</span>
              <span>Type</span>
              <span className="col-span-2">Description</span>
            </div>

            <div className="divide-y divide-white/5">
              {TRANSACTIONS.map((tx, idx) => (
                <motion.div 
                  key={tx.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="grid grid-cols-7 px-6 md:px-8 py-5 items-center hover:bg-white/[0.02] transition-colors group cursor-pointer"
                >
                  <div className="font-mono text-[11px] text-gray-600">{tx.no}</div>
                  <div className="col-span-2">
                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{tx.method}</p>
                    <p className="text-[10px] text-gray-500">{tx.date}</p>
                  </div>
                  <div className="font-mono text-sm font-bold text-white tracking-widest">{tx.amount}</div>
                  <div className="flex items-center gap-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]", tx.type === 'Credit' ? 'text-primary' : 'text-red-400')} />
                    <span className={cn("text-[10px] font-black uppercase tracking-widest", tx.type === 'Credit' ? 'text-primary' : 'text-red-400')}>
                      {tx.type}
                    </span>
                  </div>
                  <div className="col-span-2 text-[11px] text-gray-500 font-medium truncate italic" title={tx.description}>
                    {tx.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-8 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/[0.01]">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Showing 10 of 2,450 records</p>
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto max-w-full pb-2 sm:pb-0">
            <button className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-primary/50 transition-all">
              <ArrowLeft size={14} />
            </button>
            <div className="flex gap-1.5 md:gap-2">
              {[1, 2, 3, '...', 10].map((p, i) => (
                <button key={i} className={cn(
                  "shrink-0 w-8 h-8 rounded-lg text-[10px] font-black transition-all",
                  p === 1 ? "bg-primary text-black" : "text-gray-500 hover:text-white hover:bg-white/5"
                )}>
                  {p}
                </button>
              ))}
            </div>
            <button className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-primary/50 transition-all">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
