import React, { useCallback, useEffect, useState } from "react";

import { Config } from "../components/CryptoModal/config";
import CryptoSelectionModal from "../components/CryptoModal";

import arrowdown from "../assets/icon/arrowdown.svg";
import Button from "../components/Button";

import styles from "./TokenCard.module.css";
import { defaultToken } from "./config";

const TokenCard = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [estimatedETH, setEstimatedETH] = useState<number>(0);
  const [currentPriceINR, setCurrentPriceINR] = useState<number>(0);
  const [selectedToken, setSelectedToken] = useState<Config>(defaultToken);

  const handleModalToggler = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${selectedToken.wsSymbol}@trade`
    );
    socket.onmessage = (event) => {
      const tradeData = JSON.parse(event.data);
      const priceUSD = parseFloat(tradeData.p);
      const priceINR = priceUSD * 80;
      setCurrentPriceINR(priceINR);
    };
    return () => socket.close();
  }, [selectedToken]);

  const handleInvestmentChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const amount = +e.target.value;
    setEstimatedETH(amount / currentPriceINR);
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert(
        "You have successfully bought " +
          estimatedETH.toFixed(2) +
          ` ${selectedToken.abbreviation}`
      );
    },
    [estimatedETH, selectedToken.abbreviation]
  );

  const onInput: React.FormEventHandler<HTMLInputElement> = (e) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, "");
    const parts = e.currentTarget.value.split(".");
    if (parts.length > 2) {
      e.currentTarget.value = parts[0] + "." + parts.slice(1).join("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src={selectedToken.icon}
          alt="Selected Crypto Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.tokenInfo}>
        <div className={styles.currentPrice}>Current value</div>
        <div className={styles.currentPriceINR}>
          ₹ {currentPriceINR.toFixed(2)}
        </div>
      </div>
      <div className={styles.dropdown} onClick={handleOpenModal}>
        <div className={styles.dropdownWrapper}>
          <img
            src={selectedToken.icon}
            alt={selectedToken.text}
            className={styles.dropdownLogo}
          />
          <div>{selectedToken.text}</div>
        </div>
        <img src={arrowdown} alt="arrow down" />
      </div>

      <div className={styles.label}>Amount you want to invest</div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputField}
          type="tel"
          placeholder="0.00"
          pattern="^\d*(\.\d{0,2})?$"
          onInput={onInput}
          onChange={handleInvestmentChange}
        />

        <div className={styles.inputFieldInr}>INR</div>
      </div>
      <div
        className={styles.label}
      >{`Estimate Number of ${selectedToken.abbreviation} You will Get`}</div>

      <div className={styles.estimatedETH}>
        <input
          className={styles.inputField}
          disabled
          type="text"
          value={estimatedETH}
          readOnly
        />
      </div>

      <Button
        disabled={estimatedETH === 0}
        type="submit"
        className={styles.buyButton}
      >
        Buy
      </Button>

      <CryptoSelectionModal
        setSelectedToken={setSelectedToken}
        isOpen={isModalOpen}
        onClose={handleModalToggler}
        selectedToken={selectedToken}
      />
    </form>
  );
};

export default TokenCard;
