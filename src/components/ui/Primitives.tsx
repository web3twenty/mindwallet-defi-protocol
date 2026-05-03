import React from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]',
      secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10',
      outline: 'bg-transparent border border-white/20 text-white hover:border-primary/50 hover:text-primary',
      ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
      danger: 'bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20',
    };

    const sizes = {
      sm: 'px-2.5 py-1.5 text-[10px]',
      md: 'px-4 py-2 text-xs',
      lg: 'px-6 py-3 text-sm',
      icon: 'p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none gap-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : null}
        {children}
      </button>
    );
  }
);

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full bg-white/5 border border-white/10 rounded-2xl p-3.5 text-xs font-mono font-bold text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-700",
        className
      )}
      {...props}
    />
  )
);

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  children: React.ReactNode 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md glass rounded-3xl p-6 space-y-5 shadow-2xl border-white/10"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-mono tracking-tighter uppercase italic">{title}</h3>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/5 rounded-full transition-colors text-gray-500 hover:text-white"
          >
            <Zap className="rotate-45" size={18} />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export const Card = ({ children, className, hover = true, ...props }: { children: React.ReactNode; className?: string; hover?: boolean } & React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn(
      "glass rounded-3xl p-6 border border-white/5",
      hover && "hover:border-primary/20 transition-all duration-300",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const Badge = ({ children, variant = 'default', className }: { children: React.ReactNode; variant?: 'default' | 'primary' | 'danger' | 'warning'; className?: string }) => {
  const variants = {
    default: 'bg-white/10 text-gray-300',
    primary: 'bg-primary/10 text-primary',
    danger: 'bg-red-400/10 text-red-400',
    warning: 'bg-yellow-400/10 text-yellow-400',
  };
  return (
    <span className={cn("px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider", variants[variant], className)}>
      {children}
    </span>
  );
};
