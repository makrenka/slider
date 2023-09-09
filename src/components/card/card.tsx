import photo1 from "./assets/amazing-aerial-shot-beautiful-forested-mountains-armenia.jpg";

import styles from "./card.module.scss";

export const Card = ({ index }: string) => (
  <div className={styles.card}>
    <img src={photo1} alt="photo1" />
  </div>
);
