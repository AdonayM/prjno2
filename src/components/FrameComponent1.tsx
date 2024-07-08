import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  controlPanel?: string;
  dashboard?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  controlPanel,
  dashboard,
  propAlignSelf,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.menuIconParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.menuIcon} />
      <div className={styles.controlPanel}>
        <div className={styles.controlItem}>
          <img
            className={styles.controlPanelIcon}
            loading="lazy"
            alt=""
            src={controlPanel}
          />
          <div className={styles.dashboardWrapper}>
            <a className={styles.dashboard}>{dashboard}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
