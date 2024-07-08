import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  people?: string;
  users?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onPeopleItemContainerClick?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  people,
  users,
  propAlignSelf,
  onPeopleItemContainerClick,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const navigate = useNavigate();

  const onPeopleItemContainerClick1 = useCallback(() => {
    navigate("/users");
  }, [navigate]);

  return (
    <div
      className={[styles.peopleItemWrapper, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.peopleItem} onClick={onPeopleItemContainerClick}>
        <img className={styles.peopleIcon} loading="lazy" alt="" src={people} />
        <div className={styles.usersWrapper}>
          <a className={styles.users}>{users}</a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
