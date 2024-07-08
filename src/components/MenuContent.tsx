import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import styles from "./MenuContent.module.css";

export type MenuContentType = {
  className?: string;
};

const MenuContent: FunctionComponent<MenuContentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/tasks");
  }, [navigate]);

  return (
    <div className={[styles.menuContent, className].join(" ")}>
      <FrameComponent
        people="/control-panel@2x.png"
        users="Dashboard"
        propAlignSelf="unset"
        onPeopleItemContainerClick={onFrameContainerClick}
      />
      <FrameComponent1
        controlPanel="/people@2x.png"
        dashboard="Users"
        propAlignSelf="unset"
        propWidth="130px"
      />
      <FrameComponent
        people="/todo-list@2x.png"
        users="Tasks"
        propAlignSelf="stretch"
        onPeopleItemContainerClick={onFrameContainerClick1}
      />
    </div>
  );
};

export default MenuContent;
