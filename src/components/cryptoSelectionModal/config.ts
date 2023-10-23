import BitCoinImage from "../../assets/Images/bitcoin.png";
import BinanceImage from "../../assets/Images/binance.png";
import MaticImgae from "../../assets/Images/matic.png";
import SolanaImage from "../../assets/Images/solana.png";
import XrpImage from "../../assets/Images/xrp.png";

export interface Config {
  text: string;
  icon: string;
  alt: string;
  wsSymbol: string;
  abbreviation: string;
}

export const config: Config[] = [
  {
    alt: "Bitcoin",
    icon: BitCoinImage,
    text: "Bitcoin",
    wsSymbol: "btcusdt",
    abbreviation: "BTC",
  },
  {
    alt: "Binance",
    icon: BinanceImage,
    text: "Binance",
    wsSymbol: "bnbusdt",
    abbreviation: "BNB",
  },
  {
    alt: "Matic",
    icon: MaticImgae,
    text: "Matic",
    wsSymbol: "maticusdt",
    abbreviation: "MATIC",
  },
  {
    alt: "Solana",
    icon: SolanaImage,
    text: "Solana",
    wsSymbol: "solusdt",
    abbreviation: "SOL",
  },
  {
    alt: "Xrp",
    icon: XrpImage,
    text: "Xrp",
    wsSymbol: "xrpusdt",
    abbreviation: "XRP",
  },
];
