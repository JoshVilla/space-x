import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.homeContainer}>
      <div
        className={style.showcase1}
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <div className={style.titleContainer}>
          <div className={style.title}>Making Life Multi Planetary</div>
          <div className={style.subTitle}>
            Space Exploration Technologies Corporation
          </div>
          <Link className={style.btnAbout} to="/aboutUs">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
