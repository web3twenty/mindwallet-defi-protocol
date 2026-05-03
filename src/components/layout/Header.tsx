import React from 'react';
import { Search, Bell, Menu, Zap, User } from 'lucide-react';
import { Button } from '@/src/components/ui/Primitives';

export const Header = ({ title, onProfileClick }: { title: string; onProfileClick?: () => void }) => {
  return (
    <header className="h-20 bg-background/50 backdrop-blur-xl border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <button className="p-2 text-gray-400 hover:text-white lg:hidden">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold tracking-tight uppercase italic font-mono text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-80 group focus-within:border-primary/50 transition-all">
          <Search size={18} className="text-gray-500 group-focus-within:text-primary" />
          <input 
            type="text" 
            placeholder="Search assets, tx..." 
            className="bg-transparent border-none outline-none text-xs w-full text-white placeholder:text-gray-600" 
          />
        </div>

        <div className="flex items-center gap-6 border-l border-white/10 pl-6 h-8">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-[#0A0A0A]"></span>
          </button>
          
          <Button variant="outline" size="sm" className="hidden sm:flex gap-2 bg-primary/5">
            <Zap size={14} className="text-primary" />
            <span className="text-primary">0x4f...a231</span>
          </Button>

          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={onProfileClick}
          >
            <div className="text-right hidden xl:block">
              <p className="text-xs font-bold text-white tracking-widest uppercase">Aditya Joy</p>
              <p className="text-[10px] text-primary font-bold">VIP MEMBER</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center p-[2px] group-hover:scale-110 transition-transform">
              <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center">
                <User size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
