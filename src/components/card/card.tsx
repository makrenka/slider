import styles from "./card.module.scss";

type CardProps = {
  data: {
    name: string;
    id: number;
  };
};

export const Card = ({ data }: CardProps) => {
  console.log(data);

  return (
    <div className={styles.card}>
      <img src={data.name} alt="photo1" className={styles.image} />
    </div>
  );
};
