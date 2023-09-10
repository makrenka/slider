import rightArrow from "./assets/right-arrow.svg";

import styles from "./arrow.module.scss";

export const Arrow = () => (
  <img src={rightArrow} alt="right arrow" className={styles.arrow} />
);
