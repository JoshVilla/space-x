import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
type Props = {};

const Rockets = (props: Props) => {
  return (
    <div>
      <div className={style.rocketContainer1}>
        <div className={style.titleContainer}>
          <div className={style.title}>FALCON 1</div>
          <div className={style.subTitle}>FIRST EVER LIQUID FUEL ROCKET</div>
          <Link to="/rockets/info">Learn More</Link>
        </div>
      </div>
      <div className={style.rocketContainer2}>
        <div className={style.titleContainer}>
          <div className={style.title}>FALCON 9</div>
          <div className={style.subTitle}>
            First Orbital Class Rocket Capable of Reflight
          </div>
          <Link to="/rockets/info">Learn More</Link>
        </div>
      </div>
      <div className={style.rocketContainer3}>
        <div className={style.titleContainer}>
          <div className={style.title}>FALCON HEAVY</div>
          <div className={style.subTitle}>Over 5 Million Lbs of Thrust</div>
          <Link to="/rockets/info">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Rockets;
