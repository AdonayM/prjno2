import { FunctionComponent, useCallback } from "react";
import TopNavigation from "../components/TopNavigation";
import MenuItems from "../components/MenuItems";
import { useNavigate } from "react-router-dom";
import styles from "./AdminHomepage.module.css";

const AdminHomepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.adminHomepage}>
      <TopNavigation adminName="(Admin name)" />
      <section className={styles.content}>
        <div className={styles.sideMenu}>
          <MenuItems />
          <div className={styles.logoutItemWrapper}>
            <div className={styles.logoutItem}>
              <img
                className={styles.logoutRoundedIcon}
                loading="lazy"
                alt=""
                src="/logout-rounded@2x.png"
              />
              <div
                className={styles.logOutWrapper}
                onClick={onFrameContainerClick}
              >
                <div className={styles.logOut}>Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.dashboardContentParent}>
            <div className={styles.dashboardContent}>
              <h1 className={styles.dashboard}>Dashboard</h1>
              <div className={styles.welcomeMessage}>
                <div className={styles.welcomeBackAdmin}>
                  Welcome back, (Admin name)
                </div>
              </div>
            </div>
            <div className={styles.totalItemWrapper}>
              <div className={styles.totalItem}>
                <img
                  className={styles.totalItemChild}
                  alt=""
                  src="/rectangle-2.svg"
                />
                <h1 className={styles.total}>Total</h1>
                <div className={styles.totalValue}>
                  <b className={styles.numberOfEmploy}>
                    Number of Employ users
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chartItemWrapper}>
          <div className={styles.chartItem}>
            <div className={styles.chartItemChild} />
            <h1 className={styles.chartOf}>Chart of</h1>
            <b className={styles.numberOfAssigned}>Number of Assigned tasks</b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHomepage;
