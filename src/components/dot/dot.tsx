import classNames from "classnames";

import dot from "./assets/dot.svg";

import styles from "./dot.module.scss";

type DotProps = {
  position: number;
  itemId: number;
  setPosition: (onChangeText: number) => void;
};

export const Dot = ({ position, itemId, setPosition }: DotProps) => (
  <img
    src={dot}
    alt="dot"
    className={classNames(
      styles.dot,
      position === itemId - 1 && styles.dotActive
    )}
    onClick={() => setPosition(itemId - 1)}
  />
);
