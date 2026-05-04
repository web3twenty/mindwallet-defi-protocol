import React, { useState } from 'react';
import { Card, Button, Badge } from '@/src/components/ui/Primitives';
import { Search, Users, Copy, ExternalLink, Calendar, Mail, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AffiliateRecord {
  id: string;
  sl: string;
  fullName: string;
  userName: string;
  email: string;
  joinDate: string;
  tier: 'Gold' | 'Silver' | 'Bronze';
}

const MOCK_AFFILIATES: AffiliateRecord[] = [
  { id: '1', sl: '001', fullName: 'Alexander Pierce', userName: 'alex_nexus', email: 'alex.p@nexus.io', joinDate: '2024-03-24', tier: 'Gold' },
  { id: '2', sl: '002', fullName: 'Sarah Jenkins', userName: 'sj_crypto', email: 'sarah.j@web3.com', joinDate: '2024-03-20', tier: 'Silver' },
  { id: '3', sl: '003', fullName: 'Chen Wei', userName: 'wei_mining', email: 'chen.wei@protocol.cn', joinDate: '2024-03-15', tier: 'Bronze' },
  { id: '4', sl: '004', fullName: 'Elena Rodriguez', userName: 'elena_v', email: 'elena.r@global.net', joinDate: '2024-03-10', tier: 'Gold' },
  { id: '5', sl: '005', fullName: 'Marcus Thorne', userName: 'mthorne', email: 'marcus@legacy.org', joinDate: '2024-03-05', tier: 'Silver' },
  { id: '6', sl: '006', fullName: 'Isabella Silva', userName: 'isabella_s', email: 'i.silva@nexus.io', joinDate: '2024-03-02', tier: 'Bronze' },
  { id: '7', sl: '007', fullName: 'Yuki Tanaka', userName: 'yuki_node', email: 'y.tanaka@protocol.jp', joinDate: '2024-02-28', tier: 'Gold' },
  { id: '8', sl: '008', fullName: 'David Cohen', userName: 'dcohen_bc', email: 'd.cohen@web3.com', joinDate: '2024-02-25', tier: 'Silver' },
  { id: '9', sl: '009', fullName: 'Amara Diop', userName: 'amara_validator', email: 'a.diop@nexus.io', joinDate: '2024-02-20', tier: 'Bronze' },
  { id: '10', sl: '010', fullName: 'Lukas Meyer', userName: 'lukas_m', email: 'l.meyer@legacy.org', joinDate: '2024-02-15', tier: 'Gold' },
  { id: '11', sl: '011', fullName: 'Sofia Rossi', userName: 'sofia_r', email: 's.rossi@protocol.it', joinDate: '2024-02-10', tier: 'Silver' },
  { id: '12', sl: '012', fullName: 'Omar Khalid', userName: 'omar_k', email: 'o.khalid@global.net', joinDate: '2024-02-05', tier: 'Bronze' },
];

export const Affiliate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const referralLink = "https://mindchain.io/ref/web3twenty";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredAffiliates = MOCK_AFFILIATES.filter(item => 
    item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAffiliates.length / itemsPerPage);
  const paginatedAffiliates = filteredAffiliates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    // You could add a toast here if available
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header & Stats */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-4 md:px-0">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-black font-mono tracking-tighter uppercase italic">Network Expansion</h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Affiliate Node Verification & Genealogy Protocol</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-6 flex-1 lg:min-w-[280px]">
             <div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Referral Link</p>
                <p className="text-[10px] font-mono text-white/60 truncate max-w-[160px]">{referralLink}</p>
             </div>
             <button 
               onClick={copyToClipboard}
               className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary hover:bg-primary/10 transition-all active:scale-95 shadow-lg"
             >
                <Copy size={16} />
             </button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-0">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input 
            type="text"
            placeholder="Search network nodes (Name, Username, Email)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-xs text-white focus:outline-none focus:border-primary/50 transition-all font-medium placeholder:text-gray-600"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
           <Card className="flex items-center gap-3 px-4 py-3 bg-white/[0.02] border-white/5 w-full md:w-auto justify-center">
              <Users size={16} className="text-primary" />
              <div className="flex items-baseline gap-1.5">
                 <span className="text-xl font-black font-mono text-white italic">{MOCK_AFFILIATES.length}</span>
                 <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Total Nodes</span>
              </div>
           </Card>
        </div>
      </div>

      {/* Desktop Table View */}
      <Card className="hidden md:block bg-white/[0.02] border-white/10 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">SL</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">Full Name</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">User Name</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">Email Address</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic">Join Date</th>
                <th className="px-6 py-5 text-[9px] font-black text-gray-500 uppercase tracking-widest italic text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {paginatedAffiliates.length > 0 ? paginatedAffiliates.map((ref) => (
                <tr key={ref.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-6 text-[10px] font-black font-mono text-gray-600">{ref.sl}</td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-[10px] font-black">
                          {ref.fullName.split(' ').map(n => n[0]).join('')}
                       </div>
                       <span className="text-sm font-bold text-white tracking-tight uppercase italic">{ref.fullName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-[11px] font-bold font-mono text-gray-400 italic">@{ref.userName}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-[11px] font-bold text-neutral-500">{ref.email}</span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 font-mono">
                      <Calendar size={12} className="text-gray-700" />
                      {ref.joinDate}
                    </div>
                  </td>
                  <td className="px-6 py-6 transition-all">
                    <div className="flex justify-center">
                       <Badge className={cn(
                        "text-[8px] h-5 font-black uppercase tracking-tighter border-none",
                        ref.tier === 'Gold' ? "bg-amber-400/20 text-amber-400" :
                        ref.tier === 'Silver' ? "bg-gray-400/20 text-gray-400" : "bg-orange-400/20 text-orange-400"
                       )}>
                         {ref.tier} Tier
                       </Badge>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                   <td colSpan={6} className="px-6 py-20 text-center">
                      <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">No network nodes matched your query</p>
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4 px-4">
        {paginatedAffiliates.map((ref) => (
          <Card key={ref.id} className="p-5 bg-white/[0.02] border-white/10 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Users size={48} />
            </div>
            
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary text-xs font-black italic">
                   {ref.fullName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-base font-black text-white italic uppercase tracking-tight leading-none">{ref.fullName}</h3>
                  <p className="text-[10px] font-bold text-gray-500 font-mono mt-1 italic">@{ref.userName}</p>
                </div>
              </div>
              <span className="text-[9px] font-black text-gray-700 font-mono">#{ref.sl}</span>
            </div>

            <div className="grid grid-cols-1 gap-3 py-4 border-y border-white/[0.03]">
               <div className="flex items-center gap-3">
                  <Mail size={12} className="text-gray-600" />
                  <span className="text-[10px] font-bold text-gray-400">{ref.email}</span>
               </div>
               <div className="flex items-center gap-3">
                  <Calendar size={12} className="text-gray-600" />
                  <span className="text-[10px] font-bold text-gray-500 font-mono">{ref.joinDate}</span>
               </div>
            </div>

            <div className="flex items-center justify-between">
               <Badge className={cn(
                  "text-[8px] font-black uppercase border-none",
                  ref.tier === 'Gold' ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20" :
                  ref.tier === 'Silver' ? "bg-gray-400 text-black" : "bg-orange-400 text-black"
                )}>
                  {ref.tier} Tier
                </Badge>
                <Button variant="ghost" className="h-8 px-3 bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest">
                  View Profile
                </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {filteredAffiliates.length > itemsPerPage && (
        <div className="flex items-center justify-between px-4 md:px-0">
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest italic">
            Showing <span className="text-white">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="text-white">{Math.min(currentPage * itemsPerPage, filteredAffiliates.length)}</span> of <span className="text-white">{filteredAffiliates.length}</span> nodes
          </p>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              className="h-8 w-8 p-0 rounded-lg bg-white/5 border border-white/10 disabled:opacity-20"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={14} />
            </Button>
            <div className="flex items-center gap-1.5 mx-2">
               {Array.from({ length: totalPages }).map((_, i) => (
                 <button
                   key={i}
                   onClick={() => setCurrentPage(i + 1)}
                   className={cn(
                     "w-6 h-6 rounded-md text-[9px] font-black uppercase transition-all",
                     currentPage === i + 1 ? "bg-primary text-black shadow-[0_0_10px_#00ffa6]" : "text-gray-500 hover:text-gray-300"
                   )}
                 >
                   {i + 1}
                 </button>
               ))}
            </div>
            <Button 
              variant="ghost" 
              className="h-8 w-8 p-0 rounded-lg bg-white/5 border border-white/10 disabled:opacity-20"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      )}

      {/* Footer Disclaimer */}
      <div className="px-4 md:px-0">
        <Card className="p-6 bg-primary/[0.02] border-primary/10">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <ExternalLink size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-[10px] font-black text-white uppercase tracking-widest italic">Expansion Protocol</h4>
              <p className="text-[10px] text-gray-500 italic leading-relaxed">
                Network rewards are calculated based on tier contribution and active staking volume of verified downline nodes. Tier synchronization occurs every 24 hours.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
