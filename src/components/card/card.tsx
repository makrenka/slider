import styles from "./card.module.scss";

type CardProps = {
  data: {
    name: string;
    id: number;
  };
};

export const Card = ({ data }: CardProps) => (
  <div className={styles.card}>
    <img src={data.name} alt="photo1" className={styles.image} />
  </div>
);
