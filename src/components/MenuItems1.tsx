import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import styles from "./MenuItems1.module.css";

export type MenuItems1Type = {
  className?: string;
};

const MenuItems1: FunctionComponent<MenuItems1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMenuPairContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/users");
  }, [navigate]);

  return (
    <div className={[styles.menuItems, className].join(" ")}>
      <FrameComponent
        people="/control-panel@2x.png"
        users="Dashboard"
        propAlignSelf="unset"
        onPeopleItemContainerClick={onMenuPairContainerClick}
      />
      <FrameComponent
        people="/people@2x.png"
        users="Users"
        propAlignSelf="unset"
        onPeopleItemContainerClick={onFrameContainerClick}
      />
      <FrameComponent1
        controlPanel="/todo-list@2x.png"
        dashboard="Tasks"
        propAlignSelf="unset"
        propWidth="128px"
      />
    </div>
  );
};

export default MenuItems1;
