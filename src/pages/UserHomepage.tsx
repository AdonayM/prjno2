import { FunctionComponent, useCallback } from "react";
import TopNavigation from "../components/TopNavigation";
import { useNavigate } from "react-router-dom";
import styles from "./UserHomepage.module.css";

const UserHomepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.userHomepage}>
      <TopNavigation
        adminName="(User name)"
        logoTop="0"
        logoPosition="sticky"
        topNavigationAlignSelf="stretch"
        topNavigationLeft="unset"
        topNavigationWidth="unset"
      />
      <section className={styles.main}>
        <div className={styles.sideMenuParent}>
          <div className={styles.sideMenu}>
            <div className={styles.menuHeader}>
              <div className={styles.menuIcon} />
              <div className={styles.taskLink}>
                <div className={styles.image3Parent}>
                  <img
                    className={styles.image3Icon}
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                  <div className={styles.assignedTasksWrapper}>
                    <div className={styles.assignedTasks}>Assigned Tasks</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.logoutLink}>
              <div
                className={styles.image4Parent}
                onClick={onFrameContainerClick}
              >
                <img
                  className={styles.image4Icon}
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
                <div className={styles.logOutWrapper}>
                  <div className={styles.logOut}>Log out</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.welcomeMessageWrapper}>
            <div className={styles.welcomeMessage}>
              <div className={styles.welcomeBackUser}>
                Welcome back, (User name)
              </div>
              <div className={styles.assignedTasksContainer}>
                <h1 className={styles.assignedTasks1}>Assigned Tasks</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.twoOrangeWorksheetsWithTasWrapper}>
          <img
            className={styles.twoOrangeWorksheetsWithTas}
            loading="lazy"
            alt=""
            src="/two-orange-worksheets-with-tasks@2x.png"
          />
        </div>
        <div className={styles.twoOrangeWorksheetsWithTasContainer}>
          <img
            className={styles.twoOrangeWorksheetsWithTas1}
            alt=""
            src="/two-orange-worksheets-with-tasks-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default UserHomepage;
