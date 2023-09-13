import { useState } from "react";

import { LeftArrow, RightArrow } from "../arrow";
import { Card } from "../card";
import { Dot } from "../dot";

import photo1 from "./assets/amazing-aerial-shot-beautiful-forested-mountains-armenia-min-min.jpg";
import photo2 from "./assets/beautiful-shot-people-walking-up-mountain-distance-cloudy-sky-min-min.jpg";
import photo3 from "./assets/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background-min-min.jpg";
import photo4 from "./assets/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise-min-min.jpg";
import photo5 from "./assets/landscape-river-hills-min-min.jpg";
import photo6 from "./assets/river-surrounded-by-forests-cloudy-sky-thuringia-germany-min-min.jpg";
import photo7 from "./assets/summer-landscape-mountains-blue-sky-min-min.jpg";
import photo8 from "./assets/view-from-inside-tent-wild-nature-sunny-day-min-min.jpg";

import styles from "./slider.module.scss";

export const photos = [
  { name: photo1, id: 1 },
  { name: photo2, id: 2 },
  { name: photo3, id: 3 },
  { name: photo4, id: 4 },
  { name: photo5, id: 5 },
  { name: photo6, id: 6 },
  { name: photo7, id: 7 },
  { name: photo8, id: 8 },
];

export const Slider = () => {
  const [position, setPosition] = useState(0);

  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        <div
          className={styles.slides}
          style={{
            transform: `translateX(${position * -790}px)`,
          }}
        >
          {photos.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>

        <div className={styles.rightArrow}>
          <RightArrow position={position} setPosition={setPosition} />
        </div>
        <div className={styles.leftArrow}>
          <LeftArrow position={position} setPosition={setPosition} />
        </div>
        <div className={styles.dots}>
          {photos.map((item, _, arr) => (
            <Dot
              position={position}
              itemIndex={arr.indexOf(item)}
              setPosition={setPosition}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
