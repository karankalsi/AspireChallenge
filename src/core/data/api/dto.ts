export type CardType = 'Visa' | 'MasterCard' | 'Amex' | 'Discover';

export interface Card {
  name?: string;
  number?: string;
  expiry?: string;
  type?: CardType;
  active?: boolean;
  freezed?: boolean;
  balance?: number;
}

export interface User {
  id?: string;
  name?: string;
  debitCard?: Card;
  deactivatedCards?: Card[];
  weeklyLimit?: number | null;
}
