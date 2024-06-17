import React, { useEffect, useMemo, useState } from "react";
import style from "./style.module.scss";
import TitlePage from "../../components/titlePage";
import { getLatestLaunch, getNextLaunch } from "../../utils/api";
import LaunchTitle from "../../components/launchTitle";
import { useSelector } from "react-redux";
import LaunchInfo from "../../components/launchInfo";

const Launches = () => {
  const [data, setData] = useState<any>({});
  const [nextLaunchData, setNextLaunchData] = useState<any>({});
  useEffect(() => {
    getLatestLaunch().then((res) => {
      setData(res.data);
    });

    getNextLaunch().then((res) => {
      setNextLaunchData(res.data);
    });
  }, []);

  return (
    <div>
      <div className={style.launchContainer}>
        <div className={style.titleContainer}>LAUNCHES</div>
      </div>
      <LaunchInfo data={data} code="crew" title="Latest Launch" />
      <LaunchInfo
        data={nextLaunchData}
        code="private"
        title="Upcoming Launch"
      />
    </div>
  );
};

export default Launches;
