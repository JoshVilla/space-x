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
          <Link to="/rockets/info/5e9d0d95eda69955f709d1eb">Learn More</Link>
        </div>
      </div>
      <div className={style.rocketContainer2}>
        <div className={style.titleContainer}>
          <div className={style.title}>FALCON 9</div>
          <div className={style.subTitle}>
            First Orbital Class Rocket Capable of Reflight
          </div>
          <Link to="/rockets/info/5e9d0d95eda69973a809d1ec">Learn More</Link>
        </div>
      </div>
      <div className={style.rocketContainer3}>
        <div className={style.titleContainer}>
          <div className={style.title}>FALCON HEAVY</div>
          <div className={style.subTitle}>Over 5 Million Lbs of Thrust</div>
          <Link to="/rockets/info/5e9d0d95eda69974db09d1ed">Learn More</Link>
        </div>
      </div>
      <div className={style.rocketContainer4}>
        <div className={style.titleContainer}>
          <div className={style.title}>STARSHIP</div>
          <div className={style.subTitle}>
            Service to Earth Orbit, Moon, Mars and Beyond
          </div>
          <Link to="/rockets/info/5e9d0d96eda699382d09d1ee">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Rockets;
