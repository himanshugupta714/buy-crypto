import styles from "./cryptoCard.module.css";

import Tick from "../../assets/icon/tick";

const CryptoCard = ({
  alt,
  icon,
  isSelected,
  text,
  handleCardClick,
}: CryptoCardProps) => {
  return (
    <div
      onClick={handleCardClick}
      className={`${isSelected ? styles.selectedContainer : styles.container}`}
    >
      <div className={styles.textWrapper}>
        <img src={icon} alt={alt} className={styles.logo} />
        <div className={styles.title}>{text}</div>
      </div>
      {isSelected && <Tick />}
    </div>
  );
};

export interface CryptoCardProps {
  text: string;
  icon: string;
  alt: string;
  isSelected: boolean;
  handleCardClick: VoidFunction;
}

export default CryptoCard;
