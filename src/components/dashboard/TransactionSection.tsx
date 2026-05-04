import React, { useState, useMemo } from 'react';
import { Button, Badge } from '@/src/components/ui/Primitives';
import { History, ArrowRight, ArrowLeft, Filter, Download } from 'lucide-react';
import { TRANSACTIONS } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const TransactionSection = ({ onAction, isFullPage = false }: { onAction: (type: 'transactions') => void, isFullPage?: boolean }) => {
  const [activeTab, setActiveTab] = useState<'cash' | 'token'>('cash');
  const [filterType, setFilterType] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [filterAsset, setFilterAsset] = useState<string>('All');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [searchMethod, setSearchMethod] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filters = ['All', 'Deposit', 'Withdrawal', 'Bonus', 'Transfer', 'Staking'];
  const statuses = ['All', 'Completed', 'Pending', 'Failed'];
  const assets = ['All', 'USDT', 'MUSD', 'MIND', 'BMIND'];

  const filteredTransactions = useMemo(() => {
    return TRANSACTIONS.filter(tx => {
      // Category Filter
      const matchesCategory = filterType === 'All' || 
        (filterType === 'Deposit' && tx.method.includes('Deposit')) ||
        (filterType === 'Withdrawal' && tx.method.includes('Withdrawal')) ||
        (filterType === 'Bonus' && (tx.method.includes('Bonus') || tx.method.includes('Reward') || tx.method.includes('Harvest'))) ||
        (filterType === 'Transfer' && tx.method.includes('Transfer')) ||
        (filterType === 'Staking' && tx.method.includes('Staking Purchase'));
      
      // Status Filter
      const matchesStatus = filterStatus === 'All' || tx.status === filterStatus;
      
      // Asset Filter
      const matchesAsset = filterAsset === 'All' || tx.asset === filterAsset;
      
      // Search / Method Filter
      const matchesSearch = tx.method.toLowerCase().includes(searchMethod.toLowerCase());
      
      // Date Range Filter
      const txDate = new Date(tx.date);
      const matchesStart = !dateRange.start || txDate >= new Date(dateRange.start);
      const matchesEnd = !dateRange.end || txDate <= new Date(dateRange.end);
      
      return matchesCategory && matchesStatus && matchesAsset && matchesSearch && matchesStart && matchesEnd;
    });
  }, [filterType, filterStatus, filterAsset, searchMethod, dateRange]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const currentData = filteredTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const resetFilters = () => {
    setFilterType('All');
    setFilterStatus('All');
    setFilterAsset('All');
    setSearchMethod('');
    setDateRange({ start: '', end: '' });
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 px-1">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold font-mono tracking-tighter uppercase italic flex items-center gap-3 text-white">
            {isFullPage ? 'Transaction Report' : 'Recent Transactions'} <History size={20} className="text-primary" />
          </h3>
          {!isFullPage && (
            <button 
              onClick={() => onAction('transactions')}
              className="hidden md:flex items-center gap-2 text-[9px] font-black text-primary hover:text-white uppercase tracking-widest transition-all bg-primary/5 px-4 py-2 rounded-xl border border-primary/20 hover:bg-primary/20"
            >
              View All Activity <ArrowRight size={12} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10 w-fit">
            {(['cash', 'token'] as const).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 md:px-6 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all",
                  activeTab === tab ? "bg-primary text-black" : "text-gray-500 hover:text-white"
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Wallet
              </button>
            ))}
          </div>
          {isFullPage && (
             <Button variant="outline" className="h-9 px-4 border-white/10 text-[9px] font-black uppercase tracking-widest gap-2">
               <Download size={12} /> Export CSV
             </Button>
          )}
        </div>
      </div>

      {isFullPage && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Asset Type</label>
            <select 
              value={filterAsset} 
              onChange={(e) => { setFilterAsset(e.target.value); setCurrentPage(1); }}
              className="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-primary/50 transition-colors"
            >
              {assets.map(a => <option key={a} value={a} className="bg-black">{a}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Status</label>
            <select 
              value={filterStatus} 
              onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}
              className="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-primary/50 transition-colors"
            >
              {statuses.map(s => <option key={s} value={s} className="bg-black">{s}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Date Start</label>
            <input 
              type="date" 
              value={dateRange.start}
              onChange={(e) => { setDateRange(prev => ({ ...prev, start: e.target.value })); setCurrentPage(1); }}
              className="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-primary/50 transition-colors [color-scheme:dark]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Date End</label>
            <div className="flex gap-2">
              <input 
                type="date" 
                value={dateRange.end}
                onChange={(e) => { setDateRange(prev => ({ ...prev, end: e.target.value })); setCurrentPage(1); }}
                className="flex-1 h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-primary/50 transition-colors [color-scheme:dark]"
              />
              <Button variant="ghost" onClick={resetFilters} className="px-3 border border-white/10 text-gray-400 hover:text-white">
                Reset
              </Button>
            </div>
          </div>
        </div>
      )}

      {isFullPage && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
          <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-white/10">
            <Filter size={12} className="text-primary" />
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Category:</span>
          </div>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setFilterType(f); setCurrentPage(1); }}
              className={cn(
                "shrink-0 px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all",
                filterType === f 
                  ? "bg-primary/20 text-primary border border-primary/30" 
                  : "bg-white/5 text-gray-500 border border-transparent hover:border-white/10"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div className="glass rounded-3xl overflow-hidden border border-white/5">
        <div className="overflow-x-auto custom-scrollbar">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-12 px-6 md:px-8 py-4 border-b border-white/10 text-gray-400 text-[9px] font-bold uppercase tracking-widest bg-white/[0.03]">
              <span className="col-span-1">No.</span>
              <span className="col-span-3">Method / Date</span>
              <span className="col-span-2">Asset / Amount</span>
              <span className="col-span-2">Type / Status</span>
              <span className="col-span-4">Description</span>
            </div>
            
            <div className="divide-y divide-white/[0.05]">
              <AnimatePresence mode="popLayout">
                {currentData.map((tx, idx) => (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-12 px-6 md:px-8 py-4 items-center hover:bg-white/[0.02] transition-colors group cursor-pointer"
                  >
                    <div className="col-span-1 font-mono text-[10px] text-gray-600">{tx.no}</div>
                    <div className="col-span-3">
                      <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">{tx.method}</p>
                      <p className="text-[9px] text-gray-500 font-mono">{tx.date}</p>
                    </div>
                    <div className="col-span-2">
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-0.5">{tx.asset}</p>
                       <p className="font-mono text-xs font-bold text-white tracking-widest">
                         {tx.asset === 'USDT' || tx.asset === 'MUSD' ? '$' : ''}{tx.amount}
                       </p>
                    </div>
                    <div className="col-span-2 flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]", tx.type === 'Credit' ? 'text-primary' : 'text-red-400')} />
                        <span className={cn("text-[9px] font-black uppercase tracking-widest", tx.type === 'Credit' ? 'text-primary' : 'text-red-400')}>
                          {tx.type}
                        </span>
                      </div>
                      <Badge variant="outline" className={cn(
                        "w-fit text-[8px] h-4 font-black uppercase border-none",
                        tx.status === 'Completed' ? "bg-primary/10 text-primary" : 
                        tx.status === 'Pending' ? "bg-orange-500/10 text-orange-400" : 
                        "bg-red-500/10 text-red-400"
                      )}>
                        {tx.status}
                      </Badge>
                    </div>
                    <div className="col-span-4 text-[10px] text-gray-500 font-medium italic pr-4" title={tx.description}>
                      {tx.description}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {currentData.length === 0 && (
                <div className="px-8 py-24 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-600">
                    <Filter size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-white font-bold uppercase tracking-widest italic">Signal Lost</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">No matching transactions found in the ledger</p>
                  </div>
                  <Button variant="outline" onClick={resetFilters} className="h-8 text-[9px] font-black tracking-widest border-white/10">Clear Intelligence Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-8 py-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/[0.01]">
          <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
            Showing {currentData.length} of {filteredTransactions.length} records
          </p>
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto max-w-full pb-2 sm:pb-0">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-primary/50 disabled:opacity-30 transition-all font-bold"
            >
              <ArrowLeft size={12} />
            </button>
            <div className="flex gap-1.5 md:gap-2">
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={cn(
                    "shrink-0 w-7 h-7 rounded-lg text-[9px] font-black transition-all",
                    currentPage === i + 1 ? "bg-primary text-black" : "text-gray-500 hover:text-white hover:bg-white/5"
                  )}>
                  {i + 1}
                </button>
              ))}
              {totalPages > 5 && <span className="text-gray-700 text-[10px] pt-1.5">...</span>}
            </div>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-primary/50 disabled:opacity-30 transition-all font-bold"
            >
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
