import { FunctionComponent } from "react";
import styles from "./LogIn.module.css";

const LogIn: FunctionComponent = () => {
  return (
    <div className={styles.logIn}>
      <header className={styles.topNavigation}>
        <div className={styles.logo}>
          <img
            className={styles.yvmuc8s5riurkdegjdvtvu8cagkx1Icon}
            alt=""
            src="/yvmuc8s5riurkdegjdvtvu8cagkx-1@2x.png"
          />
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.auth}>
          <div className={styles.username}>Username</div>
          <div className={styles.loginField}>
            <h1 className={styles.login}>Login</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
