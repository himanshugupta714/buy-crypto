import ReactModal from "react-modal";

import styles from "./styles.module.css";
import CloseIcon from "../../assets/icon/close";
import CryptoCard from "../cryptoCard";
import { Config, config } from "./config";
import { useState } from "react";
import SearchBar from "../Search";

const CryptoSelectionModal = ({
  isOpen,
  onClose,
  setSelectedToken,
  selectedToken,
}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleCardClick = (item: Config) => () => {
    setSelectedToken(item);
    onClose();
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <ReactModal
      className={styles.container}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      onAfterClose={onClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <div className={styles.header}>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </div>
      </div>
      <SearchBar value={searchValue} onChange={handleOnChange} />

      <div className={styles.cryptoWrapper}>
        {config
          .filter((item) =>
            item.text.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <CryptoCard
              isSelected={selectedToken.text === item.text}
              handleCardClick={handleCardClick(item)}
              alt={item.alt}
              icon={item.icon}
              text={item.text}
            />
          ))}
      </div>
    </ReactModal>
  );
};

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  setSelectedToken: React.Dispatch<React.SetStateAction<Config>>;
  selectedToken: Config;
}

export default CryptoSelectionModal;
