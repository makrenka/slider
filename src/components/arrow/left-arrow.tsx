import { photos } from "../slider/slider";

import rightArrow from "./assets/right-arrow.svg";

import styles from "./arrow.module.scss";

type ArrowProps = {
  setPosition: (onChangeText: number) => void;
  position: number;
};

export const LeftArrow = ({ position, setPosition }: ArrowProps) => {
  const changePosition = () => {
    if (position !== 0) {
      setPosition(position - 1);
    } else {
      setPosition(photos.length - 1);
    }
  };

  return (
    <button className={styles.btn} onClick={changePosition}>
      <img src={rightArrow} alt="right arrow" className={styles.arrow} />
    </button>
  );
};
