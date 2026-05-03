import React, { useState } from 'react';
import { TRANSACTIONS } from '@/src/constants';
import { History, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export const TransactionSection = () => {
  const [activeTab, setActiveTab] = useState<'cash' | 'token'>('cash');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-6">
          <h3 className="text-xl font-bold font-mono tracking-tighter uppercase italic flex items-center gap-3 text-white">
            Recent Transactions <History size={20} className="text-primary" />
          </h3>
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            <button 
              onClick={() => setActiveTab('cash')}
              className={cn(
                "px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                activeTab === 'cash' ? "bg-primary text-black" : "text-gray-500 hover:text-white"
              )}
            >
              Cash Wallet
            </button>
            <button 
              onClick={() => setActiveTab('token')}
              className={cn(
                "px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                activeTab === 'token' ? "bg-primary text-black" : "text-gray-500 hover:text-white"
              )}
            >
              Token Wallet
            </button>
          </div>
        </div>
      </div>

      <div className="glass rounded-[2.5rem] overflow-hidden border border-white/5">
        <div className="grid grid-cols-6 md:grid-cols-7 px-8 py-5 border-b border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest bg-white/[0.03]">
          <span className="md:col-span-1 hidden md:block">No.</span>
          <span className="col-span-2">Method</span>
          <span className="hidden md:block">Amount</span>
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
              className="grid grid-cols-6 md:grid-cols-7 px-8 py-5 items-center hover:bg-white/[0.02] transition-colors group cursor-pointer"
            >
              <div className="md:col-span-1 hidden md:block font-mono text-[11px] text-gray-600">{tx.no}</div>
              <div className="col-span-2">
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{tx.method}</p>
                <p className="text-[10px] text-gray-500">{tx.date}</p>
              </div>
              <div className="hidden md:block font-mono text-sm font-bold text-white tracking-widest">{tx.amount}</div>
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

        <div className="px-8 py-6 border-t border-white/5 flex items-center justify-between bg-white/[0.01]">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Showing 10 of 2,450 records</p>
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-primary/50 transition-all">
              <ArrowLeft size={14} />
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, '...', 10].map((p, i) => (
                <button key={i} className={cn(
                  "w-8 h-8 rounded-lg text-[10px] font-black transition-all",
                  p === 1 ? "bg-primary text-black" : "text-gray-500 hover:text-white hover:bg-white/5"
                )}>
                  {p}
                </button>
              ))}
            </div>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-primary/50 transition-all">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
