import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import TitlePage from "../../components/titlePage";
import { getLatestLaunch } from "../../utils/api";
import LaunchTitle from "../../components/launchTitle";
import { useSelector } from "react-redux";

const Launches = () => {
  const crewList = useSelector((state: any) => state.crews);

  const [launchCrewList, setLaunchCrewList] = useState<any>([]);
  console.log(launchCrewList);

  const [data, setData] = useState<any>({});
  useEffect(() => {
    getLatestLaunch().then((res) => {
      setData(res.data);

      getLaunchCrewList(res.data.crew);
    });
  }, []);

  const getLaunchCrewList = (latestLaunchCrew: any[]) => {
    let count = 0;
    crewList.find((o: any) => {
      if (o.id === latestLaunchCrew[count]) {
        setLaunchCrewList((prev: any) => [...prev, o]);
        count++;
      } else return;
    });
    // crewList.value.map((items: any) => {
    //   if (count < latestLaunchCrew.length) {
    //     const { name, agency, image, status, wikipedia } = items;
    //     console.log(latestLaunchCrew[count], items.id);
    //     setLaunchCrewList((prev: any) => [
    //       ...prev,
    //       { name, agency, image, status, wikipedia },
    //     ]);
    //     count++;
    //   } else {
    //     return;
    //   }
    // });
  };

  return (
    <div>
      {/* <div className={style.launchContainer}>
        <div className={style.titleContainer}>LAUNCHES</div>
      </div> */}
      <div>
        <TitlePage title="Latest Launch" />
        <div className={style.latestLaunch}>
          <div>
            <LaunchTitle code="crew" title={data.name} />
            <div className={style.crew}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launches;
