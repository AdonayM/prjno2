import { FunctionComponent } from "react";
import styles from "./UserTable.module.css";

export type UserTableType = {
  className?: string;
};

const UserTable: FunctionComponent<UserTableType> = ({ className = "" }) => {
  return (
    <div className={[styles.userTable, className].join(" ")}>
      <div className={styles.userTableChild} />
      <div className={styles.userRow}>
        <div className={styles.userFields}>
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.firstNameParent}>
          <div className={styles.firstName}>
            <input
              className={styles.firstName1}
              placeholder="First"
              type="text"
            />
          </div>
          <div className={styles.lastName}>
            <input className={styles.last} placeholder="Last" type="text" />
          </div>
        </div>
      </div>
      <div className={styles.userContact}>
        <div className={styles.emailWrapper}>
          <div className={styles.email}>Email</div>
        </div>
        <div className={styles.email1}>
          <input
            className={styles.usergmailcom}
            placeholder="user@.gmail.com"
            type="text"
          />
        </div>
      </div>
      <div className={styles.userRow1}>
        <div className={styles.frameParent}>
          <div className={styles.departmentWrapper}>
            <div className={styles.department}>Department</div>
          </div>
          <input className={styles.department1} type="text" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.phoneWrapper}>
            <div className={styles.phone}>Phone</div>
          </div>
          <div className={styles.phone1}>
            <input
              className={styles.phoneValue}
              placeholder="### ### ####"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.credentials}>
        <div className={styles.usernameParent}>
          <div className={styles.username}>Username</div>
          <input className={styles.passwordInput} type="text" />
        </div>
        <div className={styles.passwordParent}>
          <div className={styles.password}>Password</div>
          <div className={styles.passwordWrapper}>
            <input
              className={styles.password1}
              placeholder="************"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
