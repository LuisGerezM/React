import { toFixedCryptoNumber } from '@/utilities/to-fixed-crypto-number.util';

export const cryptoAdapter = crypto => ({
  id: crypto.id,
  name: crypto.name,
  image: crypto.image,
  price: toFixedCryptoNumber(crypto.current_price),
  symbol: crypto.symbol,
  percent: toFixedCryptoNumber(crypto.price_change_percentage_24h),
});
