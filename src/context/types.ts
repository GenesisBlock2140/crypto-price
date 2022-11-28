export const FILTER_CRYPTO: string = 'FILTER_CRYPTO';
export const CLEAR_FILTER: string = 'CLEAR_FILTER';

export interface CryptoProps {
  id: string,
  symbol: string,
  name: string,
  image: string
  price_change_percentage_24h: number
}