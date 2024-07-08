import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import styles from "./MenuItems.module.css";

export type MenuItemsType = {
  className?: string;
};

const MenuItems: FunctionComponent<MenuItemsType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPeopleItemContainerClick = useCallback(() => {
    navigate("/users");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/tasks");
  }, [navigate]);

  return (
    <div className={[styles.menuItems, className].join(" ")}>
      <div className={styles.menuPanel}>
        <FrameComponent1
          controlPanel="/control-panel@2x.png"
          dashboard="Dashboard"
        />
      </div>
      <FrameComponent
        people="/people@2x.png"
        users="Users"
        onPeopleItemContainerClick={onPeopleItemContainerClick}
      />
      <div className={styles.todoListParent} onClick={onFrameContainerClick}>
        <img
          className={styles.todoListIcon}
          loading="lazy"
          alt=""
          src="/todo-list@2x.png"
        />
        <div className={styles.tasksWrapper}>
          <div className={styles.tasks}>Tasks</div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
