import { FunctionComponent, useCallback } from "react";
import TopNavigation from "../components/TopNavigation";
import UserTable from "../components/UserTable";
import MenuContent from "../components/MenuContent";
import { useNavigate } from "react-router-dom";
import styles from "./AdminHomepage1.module.css";

const AdminHomepage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.users}>
      <div className={styles.usersChild} />
      <div className={styles.usersItem} />
      <TopNavigation
        adminName="(Admin name)"
        logoTop="0px"
        logoPosition="absolute"
        topNavigationAlignSelf="unset"
        topNavigationLeft="0px"
        topNavigationWidth="100%"
      />
      <h1 className={styles.users1}>Users</h1>
      <UserTable />
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.addUser}>Add user</div>
      </button>
      <div className={styles.sideMenu}>
        <MenuContent />
        <div className={styles.logoutButtonWrapper}>
          <div className={styles.logoutButton}>
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
    </div>
  );
};

export default AdminHomepage1;
