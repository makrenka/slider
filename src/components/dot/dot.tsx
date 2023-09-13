import classNames from "classnames";

import dot from "./assets/dot.svg";

import styles from "./dot.module.scss";

type DotProps = {
  position: number;
  itemIndex: number;
  setPosition: (onChangeText: number) => void;
};

export const Dot = ({ position, itemIndex, setPosition }: DotProps) => (
  <img
    src={dot}
    alt="dot"
    className={classNames(
      styles.dot,
      position === itemIndex && styles.dotActive
    )}
    onClick={() => setPosition(itemIndex)}
  />
);
