import React, { useState } from 'react';
import { Card, Button, Badge, Input } from '@/src/components/ui/Primitives';
import { 
  User, 
  Mail, 
  ShieldCheck, 
  Star, 
  Award, 
  Lock, 
  Camera, 
  ChevronRight,
  LogOut,
  UserCheck,
  MapPin,
  Globe,
  Copy,
  Check,
  Share2,
  ExternalLink,
  Users,
  Gift
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Profile = () => {
  const [profile, setProfile] = useState({
    username: 'Aditya Joy',
    email: 'web3twenty@gmail.com',
    biography: 'Blockchain developer and decentralization enthusiast exploring the boundaries of Web3.',
    location: 'Singapore',
    timezone: 'GMT +8',
    referralCode: 'MIND-ADITYA-77X'
  });

  const [copied, setCopied] = useState(false);

  const referralUrl = `https://mindchainwallet.com/ref/${profile.referralCode}`;
  const displayUrl = referralUrl.replace(/(.{25}).+(.{8})/, '$1...$2');

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-8">
      {/* Profile Header Section - No Cover, More Compact */}
      <section className="relative px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          <div className="relative group">
            <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-primary via-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-[1.9rem] bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya" 
                  alt="Profile" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <button className="absolute -bottom-1 -right-1 p-2.5 bg-white text-black rounded-xl shadow-xl hover:scale-110 active:scale-95 transition-all">
              <Camera size={14} />
            </button>
          </div>

          <div className="flex-1 space-y-3 pt-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h1 className="text-2xl md:text-3xl font-black font-mono tracking-tighter uppercase italic leading-none">{profile.username}</h1>
              <div className="flex gap-2">
                <Badge className="bg-primary/10 text-primary border border-primary/20 py-0.5 px-3 text-[8px] font-black tracking-widest flex items-center gap-2">
                  <Star size={10} fill="currentColor" /> ELITE TIER
                </Badge>
                <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 py-0.5 px-3 text-[8px] font-black tracking-widest flex items-center gap-2">
                  <ShieldCheck size={10} /> VERIFIED
                </Badge>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors"><Mail size={12} className="text-primary" /> {profile.email}</div>
              <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors"><MapPin size={12} className="text-primary" /> {profile.location}</div>
              <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors"><UserCheck size={12} className="text-primary" /> AMBASSADOR LEVEL 12</div>
            </div>
            <p className="text-gray-500 text-xs max-w-2xl leading-relaxed font-medium capitalize prose prose-invert opacity-80">
              {profile.biography}
            </p>
          </div>

          <div className="md:self-start">
             <Button variant="outline" className="gap-2 border-white/10 hover:border-primary/50 transition-colors uppercase text-[9px] font-black tracking-widest h-11 px-5">
               <Share2 size={12} /> Profile Link
             </Button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Detailed Settings */}
        <div className="lg:col-span-8 space-y-8">
          {/* Referral Section - ENHANCED VISIBILITY */}
          <Card className="p-6 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent border-primary/20 overflow-hidden relative group">
            <div className="absolute -top-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-all rotate-12 group-hover:rotate-0 group-hover:scale-110">
              <Users size={180} />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-black font-mono tracking-tighter uppercase italic flex items-center gap-3">
                    <Gift className="text-primary" size={20} /> Referral Authority
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Growth incentive: Earn 5% residuals on all referred trades</p>
                </div>
                <div className="hidden md:flex gap-2">
                  <div className="text-right">
                    <p className="text-[9px] text-gray-600 font-black uppercase">Active Referrals</p>
                    <p className="text-lg font-mono font-bold text-white leading-none">24</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-stretch gap-4">
                <div 
                  onClick={handleCopyReferral}
                  className="flex-1 bg-black/40 border border-white/10 rounded-2xl p-4 flex items-center justify-between group/code hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="space-y-1">
                    <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Your Private Node Link</p>
                    <span className="font-mono font-bold text-white tracking-tighter text-xs truncate max-w-[200px] md:max-w-none">
                      {displayUrl}
                    </span>
                  </div>
                  <div className={cn(
                    "p-2.5 rounded-xl transition-all shadow-xl",
                    copied ? "bg-primary text-black scale-110" : "bg-white/5 text-primary group-hover/code:bg-primary/20"
                  )}>
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </div>
                </div>
                <Button className="h-full md:h-auto h-12 px-8 uppercase text-[10px] font-black tracking-[0.2em] shadow-[0_10px_30px_rgba(0,255,136,0.1)] group">
                  Deploy Link <ExternalLink size={12} className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Account Details */}
          <Card className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-5">
              <h3 className="text-xl font-bold font-mono tracking-tighter uppercase italic flex items-center gap-3 leading-none">
                <User size={20} className="text-primary" /> Personal Files
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Screen Name</label>
                <Input value={profile.username} onChange={(e) => setProfile({...profile, username: e.target.value})} className="h-11 bg-white/[0.03] text-sm" />
              </div>
              <div className="space-y-2 opacity-60">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email <span className="text-[8px] text-gray-700">(Verified)</span></label>
                <Input value={profile.email} disabled className="h-11 bg-transparent text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Base Location</label>
                <Input value={profile.location} onChange={(e) => setProfile({...profile, location: e.target.value})} className="h-11 bg-white/[0.03] text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Timezone</label>
                <Input value={profile.timezone} onChange={(e) => setProfile({...profile, timezone: e.target.value})} className="h-11 bg-white/[0.03] text-sm" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Biography</label>
                <textarea 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-xs font-medium text-white focus:outline-none focus:border-primary/50 transition-all min-h-[100px] resize-none"
                  value={profile.biography}
                  onChange={(e) => setProfile({...profile, biography: e.target.value})}
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button className="px-10 h-12 uppercase tracking-[0.2em] font-black text-[10px]">Synchronize Profile</Button>
            </div>
          </Card>

          {/* Security */}
          <Card className="p-6 md:p-8 space-y-6 bg-gradient-to-br from-red-500/[0.02] to-transparent">
             <div className="flex items-center justify-between border-b border-white/5 pb-5">
              <h3 className="text-xl font-bold font-mono tracking-tighter uppercase italic flex items-center gap-3">
                <Lock size={20} className="text-red-500" /> Vault Security
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Current Password</label>
                <Input type="password" placeholder="••••••••" className="h-11 bg-white/[0.03]" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">New Access Key</label>
                <Input type="password" placeholder="••••••••" className="h-11 bg-white/[0.03]" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
              <div className="bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] font-black text-primary uppercase tracking-widest">2FA Protection Enabled</span>
              </div>
              <Button variant="outline" className="w-full md:w-auto px-8 h-12 border-white/10 text-[10px] font-black uppercase tracking-widest">Update Credentials</Button>
            </div>
          </Card>
        </div>

        {/* Right Column - Stats & Badges */}
        <div className="lg:col-span-4 space-y-8">
          {/* Social Links */}
          <Card className="p-8 space-y-6">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 text-center">Connected Protocols</h4>
             <div className="space-y-3">
               {[
                 { label: 'Twitter / X', value: '@adityajoy_eth', icon: Globe },
                 { label: 'Discord ID', value: 'aditya_7731', icon: ExternalLink },
                 { label: 'GitHub', value: 'web3twenty', icon: Globe }
               ].map((social, i) => (
                 <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-primary transition-colors">
                       <social.icon size={16} />
                     </div>
                     <div>
                       <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{social.label}</p>
                       <p className="text-xs font-bold text-gray-300">{social.value}</p>
                     </div>
                   </div>
                   <ChevronRight size={14} className="text-gray-700 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                 </div>
               ))}
             </div>
             <Button variant="secondary" className="w-full h-12 uppercase text-[10px] font-black tracking-widest">Connect New</Button>
          </Card>

          {/* Achievement Badges */}
          <Card className="p-8 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 text-center">Protocol Artifacts</h4>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Star, color: 'text-primary', bg: 'bg-primary/10', label: 'ELITE' },
                { icon: ShieldCheck, color: 'text-blue-400', bg: 'bg-blue-500/10', label: 'VERIFIED' },
                { icon: Award, color: 'text-purple-400', bg: 'bg-purple-500/10', label: 'LEGEND' },
                { icon: UserCheck, color: 'text-orange-400', bg: 'bg-orange-500/10', label: 'PIONEER' }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-primary/20 transition-all cursor-help relative">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", badge.bg, badge.color)}>
                    <badge.icon size={28} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{badge.label}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="p-8 border-red-500/10 bg-red-500/[0.02] hover:bg-red-500/[0.05] transition-all cursor-pointer group">
             <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-red-500">
                    <LogOut size={16} />
                    <span className="text-xs font-black uppercase tracking-widest">Terminate Session</span>
                  </div>
                  <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Logout from all active devices</p>
                </div>
                <ChevronRight size={16} className="text-gray-800 group-hover:text-red-500 transition-transform" />
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
