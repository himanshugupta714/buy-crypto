import SearchIcon from "../../assets/icon/search";
import styles from "./searchBar.module.css";

const SearchBar = ({ onChange, value }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <SearchIcon />
      <input
        onChange={onChange}
        value={value}
        placeholder="Search chains"
        className={styles.input}
      />
    </div>
  );
};

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default SearchBar;
