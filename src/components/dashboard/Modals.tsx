import React, { useState, useEffect } from 'react';
import { Modal, Button, Input } from '@/src/components/ui/Primitives';
import { Copy, QrCode, ArrowUpRight, ArrowDownLeft, Send, User, Wallet, Check, X, ArrowRightLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const DepositModal = ({ isOpen, onClose, asset }: { isOpen: boolean, onClose: () => void, asset: string }) => (
  <Modal isOpen={isOpen} onClose={onClose} title={`Deposit ${asset}`}>
    <div className="space-y-6 text-center">
      <div className="bg-white p-4 rounded-3xl inline-block mx-auto">
        <QrCode size={160} className="text-black" />
      </div>
      
      <div className="space-y-2">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Your {asset} Deposit Address</p>
        <div className="flex bg-white/5 border border-white/10 rounded-2xl p-4 items-center justify-between group">
          <code className="text-xs font-mono text-primary truncate mr-4">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</code>
          <button className="text-gray-500 hover:text-white transition-colors">
            <Copy size={18} />
          </button>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 text-left">
        <p className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1 italic">Automated System</p>
        <p className="text-xs text-gray-400 leading-relaxed">
          Deposits are processed automatically after 3 network confirmations. Please ensure you are sending on the correct network.
        </p>
      </div>

      <Button onClick={onClose} className="w-full">Done</Button>
    </div>
  </Modal>
);

export const WithdrawModal = ({ isOpen, onClose, asset }: { isOpen: boolean, onClose: () => void, asset: string }) => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Withdraw ${asset}`}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Withdraw Amount</label>
          <div className="relative">
            <Input 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="0.00"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-primary hover:underline">MAX</button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Destination Address</label>
          <Input 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="0x..."
          />
        </div>

        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-4">
          <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-wider mb-1 italic">Manual Processing</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Withdrawals are processed manually by our security team. Expected time: 1-12 hours.
          </p>
        </div>

        <div className="flex gap-4">
          <Button variant="secondary" onClick={onClose} className="flex-1">Cancel</Button>
          <Button className="flex-1" icon={<Send size={18} />}>Submit Request</Button>
        </div>
      </div>
    </Modal>
  );
};

export const TransferModal = ({ isOpen, onClose, asset }: { isOpen: boolean, onClose: () => void, asset: string }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [isValidUser, setIsValidUser] = useState<boolean | null>(null);

  useEffect(() => {
    if (recipient.length > 5) {
      setIsValidating(true);
      const timer = setTimeout(() => {
        setIsValidating(false);
        setIsValidUser(recipient.startsWith('0x') || recipient.includes('@') || recipient.length > 8);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsValidUser(null);
    }
  }, [recipient]);

  const limits = {
    MIND: { min: 10, max: 1000000 },
    USDT: { min: 5, max: 50000 },
    MUSD: { min: 1, max: 25000 },
    BMIND: { min: 10, max: 500000 }
  }[asset as keyof typeof limits] || { min: 1, max: 1000 };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Secure Transfer: ${asset}`}>
      <div className="space-y-6 relative">
        <div className="absolute -top-12 -right-6 opacity-5 pointer-events-none">
          <ArrowRightLeft size={100} />
        </div>

        <div className="space-y-6">
          {/* Recipient Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Recipient Wallet / User ID</label>
              <div className="flex items-center gap-2">
                {isValidating && <span className="text-[8px] font-black text-primary uppercase animate-pulse tracking-widest">Validating Registry...</span>}
                {!isValidating && isValidUser === true && <span className="text-[8px] font-black text-primary uppercase flex items-center gap-1 border border-primary/30 px-2 py-0.5 rounded-full bg-primary/5"><Check size={8} /> Node Verified</span>}
                {!isValidating && isValidUser === false && <span className="text-[8px] font-black text-red-500 uppercase">Unknown Protocol ID</span>}
              </div>
            </div>
            <div className="relative">
              <Input 
                placeholder="0x... or user@id" 
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className={cn(
                  "h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-sm font-bold uppercase transition-all tracking-widest pl-12",
                  isValidUser === true && "border-primary/40 bg-primary/[0.02]",
                  isValidUser === false && "border-red-500/40 bg-red-500/[0.02]"
                )}
              />
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Transfer Magnitude</label>
              <div className="text-[9px] font-bold text-gray-600 uppercase tracking-tighter flex gap-2">
                <span>MIN: {limits.min}</span>
                <span className="text-gray-800">|</span>
                <span>MAX: {limits.max}</span>
              </div>
            </div>
            <div className="relative">
              <Input 
                type="number"
                placeholder="0.00" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-xl font-mono font-bold pl-12"
              />
              <Wallet size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-[10px] font-black text-primary px-2 py-1 bg-primary/10 rounded-lg">{asset}</span>
                <button className="text-[9px] font-black text-white/30 hover:text-white uppercase transition-colors p-1">MAX</button>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-black/20 border border-white/5 space-y-3">
             <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
               <span className="text-gray-600 font-bold">Transaction Fee</span>
               <span className="text-primary font-mono">0.00 {asset}</span>
             </div>
             <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
               <span className="text-gray-600 font-bold">Final Settlement</span>
               <span className="text-white font-mono">Instantaneous</span>
             </div>
          </div>

          <div className="grid grid-cols-5 gap-3 pt-4">
            <Button variant="secondary" onClick={onClose} className="col-span-2 h-14 uppercase text-[9px] font-black tracking-widest opacity-60 hover:opacity-100">Abort</Button>
            <Button 
              className="col-span-3 h-14 uppercase text-[10px] font-black tracking-[0.2em] shadow-xl shadow-primary/10 group overflow-hidden relative"
              disabled={!isValidUser || !amount}
            >
              <span className="relative z-10 flex items-center gap-2">Authorize Transfer <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const ApplyEliteModal = ({ isOpen, onClose, onDeposit }: { isOpen: boolean, onClose: () => void, onDeposit: () => void }) => {
  const usdtBalance = 282.10; // Mocked balance for now
  const price = 1250;
  const hasEnoughFunds = usdtBalance >= price;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm Application">
      <div className="space-y-8">
        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Package Price</span>
            <span className="text-white font-mono font-bold">$1,250.00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Your USDT Balance</span>
            <span className={cn("font-mono font-bold", hasEnoughFunds ? "text-primary" : "text-red-500")}>
              ${usdtBalance.toFixed(2)}
            </span>
          </div>
          <div className="h-px bg-white/5" />
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Status</span>
            {hasEnoughFunds ? (
              <span className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full font-black uppercase tracking-tighter italic">Ready to Apply</span>
            ) : (
              <span className="text-[10px] bg-red-500/20 text-red-500 px-3 py-1 rounded-full font-black uppercase tracking-tighter italic">Insufficient Funds</span>
            )}
          </div>
        </div>

        {!hasEnoughFunds && (
          <div className="p-5 rounded-3xl bg-gradient-to-br from-red-500/10 via-transparent to-transparent border border-red-500/20 text-center space-y-4">
            <div className="space-y-1">
              <p className="text-xs text-red-400 font-bold uppercase tracking-wider">Insufficient Funds</p>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">You need an additional <span className="text-white font-bold font-mono">${(price - usdtBalance).toFixed(2)} USDT</span> to join the Elite Club.</p>
            </div>
            <button 
              className="w-full h-14 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-[length:200%_auto] animate-gradient-x hover:scale-[1.02] active:scale-95 border-none text-white text-xs uppercase font-black tracking-[0.2em] shadow-[0_8px_30px_rgba(239,68,68,0.4)] transition-all rounded-2xl flex items-center justify-center gap-3 group"
              onClick={() => {
                onClose();
                onDeposit();
              }}
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Deposit USDT Now
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

        <div className="flex gap-4">
          <Button variant="secondary" onClick={onClose} className="flex-1">Cancel</Button>
          <Button className="flex-1" disabled={!hasEnoughFunds}>
            {hasEnoughFunds ? 'Confirm & Join' : 'Apply'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
