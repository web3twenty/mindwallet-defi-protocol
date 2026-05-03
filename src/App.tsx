import React, { useState } from 'react';
import { Sidebar } from '@/src/components/layout/Sidebar';
import { Header } from '@/src/components/layout/Header';
import { UserProfileCard, BalanceGrid } from '@/src/components/dashboard/TopSection';
import { StakingTable, MarketWidgets } from '@/src/components/dashboard/MidSection';
import { TransactionSection } from '@/src/components/dashboard/TransactionSection';
import { EliteMember } from '@/src/components/dashboard/EliteMember';
import { Profile } from '@/src/components/dashboard/Profile';
import { DepositModal, WithdrawModal, TransferModal, ApplyEliteModal, StakeModal } from '@/src/components/dashboard/Modals';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modal, setModal] = useState<{ type: 'deposit' | 'withdraw' | 'transfer' | 'stake' | 'apply-elite' | null, asset: string }>({ type: null, asset: '' });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const openModal = (type: 'deposit' | 'withdraw' | 'transfer' | 'stake' | 'apply-elite', asset: string) => {
    setModal({ type, asset });
  };

  const closeModal = () => {
    setModal({ type: null, asset: '' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-12">
            <section className="space-y-8">
              <UserProfileCard onAction={openModal} />
              <BalanceGrid onAction={openModal} />
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              <div className="xl:col-span-8 space-y-12">
                <StakingTable onAction={openModal} />
              </div>
              <div className="xl:col-span-4 sticky top-24">
                <MarketWidgets />
              </div>
            </section>

            <section className="pb-12">
              <TransactionSection />
            </section>
          </div>
        );
      case 'elit':
        return <EliteMember onAction={openModal} />;
      case 'profile':
        return <Profile />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
            <h2 className="text-4xl font-bold font-mono tracking-tighter uppercase italic opacity-20">Under Development</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">The {activeTab} page is coming soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden">
      {/* Sidebar - Fixed on desktop, sliding on mobile */}
      <Sidebar 
        activeId={activeTab} 
        onSelect={(id) => {
          setActiveTab(id);
          setIsSidebarOpen(false);
        }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main viewport */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <Header 
          title={activeTab === 'elit' ? 'Elite Member' : activeTab === 'profile' ? 'My Profile' : activeTab.replace('-', ' ')} 
          onProfileClick={() => setActiveTab('profile')}
          onMenuClick={toggleSidebar}
        />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 px-4 md:px-8">
          <div className="max-w-[1600px] mx-auto py-6 md:py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>

            {/* Footer */}
            <footer className="pt-12 pb-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
              <div className="text-center md:text-left space-y-2 md:space-y-0">
                <p>© 2024 MINDCHAIN NETWORK. DISTRIBUTED PROTOCOL.</p>
                <p className="md:hidden opacity-50">SHIELDED • DECENTRALIZED • SECURE</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                <a href="#" className="hover:text-primary transition-colors hover:translate-y-[-1px] transition-transform inline-block">Privacy Protocol</a>
                <a href="#" className="hover:text-primary transition-colors hover:translate-y-[-1px] transition-transform inline-block">Service Terms</a>
                <a href="#" className="hover:text-primary transition-colors hover:translate-y-[-1px] transition-transform inline-block">Node Support</a>
                <a href="#" className="hover:text-primary transition-colors hidden md:inline-block text-white/40">Status: Active</a>
              </div>
            </footer>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {modal.type === 'deposit' && (
          <DepositModal 
            isOpen={true} 
            onClose={closeModal} 
            asset={modal.asset} 
          />
        )}
        {modal.type === 'withdraw' && (
          <WithdrawModal 
            isOpen={true} 
            onClose={closeModal} 
            asset={modal.asset} 
          />
        )}
        {modal.type === 'transfer' && (
          <TransferModal 
            isOpen={true} 
            onClose={closeModal} 
            asset={modal.asset} 
          />
        )}
        {modal.type === 'stake' && (
          <StakeModal 
            isOpen={true} 
            onClose={closeModal} 
            asset={modal.asset} 
          />
        )}
        {modal.type === 'apply-elite' && (
          <ApplyEliteModal 
            isOpen={true} 
            onClose={closeModal} 
            onDeposit={() => openModal('deposit', 'USDT')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
