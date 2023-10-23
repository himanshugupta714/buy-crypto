import NorPayLogo from "../../assets/Images/NorPayLogo.png";
import styles from "./Header.module.css";
import Tab from "../Tab";
import Button from "../Button";

const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={NorPayLogo} alt="Logo" />
      <div className={styles.tab}>
        <Tab />
      </div>
      <div className={styles.button}>
        <Button>Connect wallet</Button>
      </div>
    </div>
  );
};

export default Header;
