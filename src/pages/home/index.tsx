import React, { useEffect } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { getCores, getCrew } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getCrews } from "../../features/getCrews";
import { getCoress } from "../../features/getCores";
const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCrew().then((res) => {
      if (res.status === 200) {
        dispatch(getCrews(res.data));
      }
    });

    getCores().then((res) => {
      if (res.status === 200) {
        dispatch(getCoress(res.data));
      }
    });
  }, [dispatch]);

  return (
    <div className={style.homeContainer}>
      <div
        className={style.showcase1}
        data-aos="fade-up"
        data-aos-duration="1000"
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
      <div
        className={style.showcase2}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className={style.titleContainer}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={style.titleItem}>STARLINK MISSION</div>
          <a href="">See Schedule</a>
        </div>
      </div>
      <div
        className={style.showcase3}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className={style.titleContainer}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={style.titleItem}>CREW DRAGON MISSION</div>
          <a href="">See Schedule</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
