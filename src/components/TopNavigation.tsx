import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TopNavigation.module.css";

export type TopNavigationType = {
  className?: string;
  adminName?: string;

  /** Style props */
  logoTop?: CSSProperties["top"];
  logoPosition?: CSSProperties["position"];
  topNavigationAlignSelf?: CSSProperties["alignSelf"];
  topNavigationLeft?: CSSProperties["left"];
  topNavigationWidth?: CSSProperties["width"];
};

const TopNavigation: FunctionComponent<TopNavigationType> = ({
  className = "",
  adminName,
  logoTop,
  logoPosition,
  topNavigationAlignSelf,
  topNavigationLeft,
  topNavigationWidth,
}) => {
  const topNavigationStyle: CSSProperties = useMemo(() => {
    return {
      top: logoTop,
      position: logoPosition,
      alignSelf: topNavigationAlignSelf,
      left: topNavigationLeft,
      width: topNavigationWidth,
    };
  }, [
    logoTop,
    logoPosition,
    topNavigationAlignSelf,
    topNavigationLeft,
    topNavigationWidth,
  ]);

  return (
    <header
      className={[styles.topNavigation, className].join(" ")}
      style={topNavigationStyle}
    >
      <div className={styles.logo}>
        <img
          className={styles.yvmuc8s5riurkdegjdvtvu8cagkx1Icon}
          alt=""
          src="/yvmuc8s5riurkdegjdvtvu8cagkx-1@2x.png"
        />
      </div>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.adminNameWrapper}>
            <a className={styles.adminName}>{adminName}</a>
          </div>
          <img
            className={styles.iconWithAPerson}
            loading="lazy"
            alt=""
            src="/icon-with-a-person@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
