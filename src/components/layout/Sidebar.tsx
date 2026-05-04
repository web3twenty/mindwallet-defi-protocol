import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Database, 
  Wheat, 
  Coins, 
  CircleDollarSign, 
  Store, 
  Briefcase, 
  Share2, 
  Wallet as WalletIcon, 
  History, 
  MessageSquare, 
  RefreshCw, 
  Star, 
  UserRound, 
  Baby, 
  Globe, 
  FileText, 
  Compass,
  Menu,
  X,
  Brain
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const MENU_GROUPS = [
  {
    items: [{ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }]
  },
  {
    items: [{ id: 'elite', label: 'Elite Member', icon: Star }]
  },
  {
    items: [{ id: 'profile', label: 'My Profile', icon: UserRound }]
  },
  {
    items: [{ id: 'community-token', label: 'Community Token', icon: Users, hasSub: true }]
  },
  {
    items: [{ id: 'farming', label: 'Farming', icon: Wheat, hasSub: true }]
  },
  {
    items: [
      { id: 'earn-mind', label: 'Earn MIND', icon: Coins, hasSub: true },
      { id: 'earn-musd', label: 'Earn MUSD', icon: CircleDollarSign, hasSub: true }
    ]
  },
  {
    items: [
      { id: 'become-merchant', label: 'Become Merchant', icon: Store },
      { id: 'merchant-wallet', label: 'Merchant Wallet', icon: Briefcase }
    ]
  },
  {
    items: [
      { id: 'affiliate', label: 'Affiliate', icon: Share2, hasSub: true },
      { id: 'wallet', label: 'Wallet', icon: WalletIcon, hasSub: true },
      { id: 'transactions', label: 'Transaction Report', icon: History, hasSub: true }
    ]
  },
  {
    items: [
      { id: 'contact', label: 'Contact Us', icon: MessageSquare },
      { id: 'swap', label: 'Swap', icon: RefreshCw },
      { id: 'ambassador', label: 'Ambassador', icon: UserRound },
      { id: 'consultant', label: 'Consultant Program', icon: Database },
      { id: 'kids', label: 'Kids Program', icon: Baby, hasSub: true },
      { id: 'community', label: 'Community', icon: Globe, hasSub: true }
    ]
  },
  {
    items: [
      { id: 'whitepaper', label: 'Whitepaper', icon: FileText },
      { id: 'explorer', label: 'Explorer', icon: Compass }
    ]
  }
];

export const Sidebar = ({ activeId, onSelect, isOpen, onClose }: { activeId: string; onSelect: (id: string) => void, isOpen?: boolean, onClose?: () => void }) => {
  return (
    <>
      <aside className={cn(
        "w-72 bg-[#0C0C0C] border-r border-white/5 h-screen overflow-y-auto custom-scrollbar flex flex-col fixed lg:static inset-y-0 left-0 z-[60] transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0 shadow-2xl shadow-primary/10" : "-translate-x-full"
      )}>
        <div className="p-6 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.2)]">
              <Brain className="text-black w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">MIND<span className="text-primary italic font-mono tracking-normal">CHAIN</span></span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-2 text-gray-500 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-4 pb-10">
          {MENU_GROUPS.map((group, idx) => (
            <div key={idx} className="space-y-1">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all group relative",
                    activeId === item.id 
                      ? "bg-primary/10 text-primary" 
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={cn(
                      "transition-transform group-hover:scale-110",
                      activeId === item.id ? "text-primary" : "text-gray-400 group-hover:text-white"
                    )} />
                    <span className="tracking-wide uppercase">{item.label}</span>
                  </div>
                  {item.hasSub && <Compass size={14} className="opacity-40" />}
                  {activeId === item.id && (
                    <motion.div 
                      layoutId="sidebar-v-bar"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-full shadow-[0_0_10px_#00FF88]"
                    />
                  )}
                </button>
              ))}
              {idx < MENU_GROUPS.length - 1 && <div className="mx-3 h-px bg-white/5 my-2" />}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};
