import { Card } from "../card";

import photo1 from "./assets/amazing-aerial-shot-beautiful-forested-mountains-armenia.jpg";
import photo2 from "./assets/beautiful-shot-people-walking-up-mountain-distance-cloudy-sky.jpg";
import photo3 from "./assets/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background.jpg";
import photo4 from "./assets/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise.jpg";
import photo5 from "./assets/landscape-river-hills.jpg";
import photo6 from "./assets/river-surrounded-by-forests-cloudy-sky-thuringia-germany.jpg";
import photo7 from "./assets/summer-landscape-mountains-blue-sky.jpg";
import photo8 from "./assets/view-from-inside-tent-wild-nature-sunny-day.jpg";

import styles from "./slider.module.scss";

const photos = [
  { name: photo1, id: 1 },
  { name: photo2, id: 2 },
  { name: photo3, id: 3 },
  { name: photo4, id: 4 },
  { name: photo5, id: 5 },
  { name: photo6, id: 6 },
  { name: photo7, id: 7 },
  { name: photo8, id: 8 },
];

export const Slider = () => (
  <div className={styles.slider}>
    {photos.map((item) => (
      <Card data={item} key={item.id} />
    ))}
  </div>
);
