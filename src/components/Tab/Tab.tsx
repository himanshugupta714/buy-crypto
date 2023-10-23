import { useState } from "react";
import styles from "./Tab.module.css";
import cx from "classnames";

type TabName = "Trade" | "Earn" | "Support" | "About";

interface TabProps {
  className?: string;
}

const Tab = ({ className }: TabProps) => {
  const [activeTab, setActiveTab] = useState<TabName>("Trade");

  return (
    <div className={cx(styles.tabs, className)}>
      {(["Trade", "Earn", "Support", "About"] as TabName[]).map((tab) => (
        <div
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tab;
