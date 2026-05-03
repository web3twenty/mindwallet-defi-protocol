export interface StakingPool {
  id: string;
  name: string;
  symbol: string;
  availableBalance: string;
  usdtBalance: string;
  lockedBalance: string;
  actionType: 'Stake' | 'Join' | 'Coupon' | 'Transfer';
  icon: string;
}

export const STAKING_POOLS: StakingPool[] = [
  {
    id: '1',
    name: 'MindChain',
    symbol: 'MIND',
    availableBalance: '2640456',
    usdtBalance: '$49165',
    lockedBalance: '62251',
    actionType: 'Stake',
    icon: 'Brain'
  },
  {
    id: '2',
    name: 'Mind USD',
    symbol: 'MUSD',
    availableBalance: '2640456',
    usdtBalance: '$49165',
    lockedBalance: '62251',
    actionType: 'Stake',
    icon: 'DollarSign'
  },
  {
    id: '3',
    name: 'B-MindChain',
    symbol: 'BMIND',
    availableBalance: '2640456',
    usdtBalance: '$49165',
    lockedBalance: '62251',
    actionType: 'Stake',
    icon: 'Zap'
  },
  {
    id: '4',
    name: 'Elite Pool',
    symbol: 'ELITE',
    availableBalance: '2640456',
    usdtBalance: '$49165',
    lockedBalance: '62251',
    actionType: 'Join',
    icon: 'Star'
  },
  {
    id: '5',
    name: 'Merchant Pool',
    symbol: 'MARCHENT',
    availableBalance: '2640456',
    usdtBalance: '$49165',
    lockedBalance: '62251',
    actionType: 'Coupon',
    icon: 'ShoppingBag'
  },
  {
    id: '6',
    name: 'Ambassador',
    symbol: 'AMB',
    availableBalance: '2640456',
    usdtBalance: '$49165',
    lockedBalance: '62251',
    actionType: 'Transfer',
    icon: 'Award'
  }
];

export interface Transaction {
  id: string;
  no: number;
  method: string;
  amount: string;
  type: 'Credit' | 'Debit';
  description: string;
  date: string;
}

export const TRANSACTIONS: Transaction[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `tx-${i}`,
  no: i + 1,
  method: 'Daily Staking Bonus',
  amount: '$0.55',
  type: 'Credit',
  description: 'Daily Bonus for purchasing Staking Package',
  date: '2024-05-03'
}));

export const MARKET_STATS = {
  mindPrice: '$0.0350',
  bmindPrice: '$0.0350',
  marketCap: '2,746,536',
  totalElite: '115',
  nextPrice: '$0.056',
  extendedTime: '00D 00H 00M 00S'
};

export const TARGET_STATS = {
  targetBMIND: 'No Target',
  bmindOwnPurchase: '19453.67',
  teamSales: '2,746,536',
  timeline: '00',
  status: 'Null'
};
