import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import TitlePage from "../titlePage";
import LaunchTitle from "../launchTitle";
import { useSelector } from "react-redux";
type Props = {
  data: any;
  code: "crew" | "starlink" | "private";
  title: string;
};

const LaunchInfo = ({ data, code, title }: Props) => {
  const crewList = useSelector((state: any) => state.crews.value);
  const [launchCrewList, setLaunchCrewList] = useState<any>([]);
  const getLaunchCrewList = (latestLaunchCrew: any[]) => {
    let count = 0;
    if (launchCrewList?.length === 0) {
      crewList.find((o: any) => {
        if (
          count <= latestLaunchCrew?.length &&
          o.id === latestLaunchCrew[count]
        ) {
          setLaunchCrewList((prev: any) => [...prev, o]);
          count++;
        } else return;
      });
    } else return;
  };

  useEffect(() => {
    getLaunchCrewList(data?.crew);
  }, [data]);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
        style={{ marginTop: "70px" }}
      >
        <TitlePage title={title} />
        <div className={style.latestLaunch}>
          <div className={style.leftSide}>
            <LaunchTitle code={code} title={data.name} />
            <div className={style.crew}>
              {launchCrewList.map((items: any, idx: number) => (
                <div className={style.crewItems} key={idx}>
                  <img src={items.image} alt="" />
                  <div className={style.crewInfo}>
                    <span className={style.crewName}>{items.name}</span>
                    <span>{items.agency}</span>
                    <div className={style.stats}>
                      <span>Status: </span>
                      <span
                        style={{
                          color:
                            items.status === "active" ? "#008000" : "#c1c1c1",
                        }}
                      >
                        {items.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.rightSide}>
            {data?.links?.patch?.large && (
              <div className={style.patch}>
                <img src={data?.links?.patch?.large} alt="crew patch" />
              </div>
            )}
            <div className={style.headerLive}>Watch it live</div>
            <iframe
              width="420"
              height="345"
              src={`https://www.youtube.com/embed/${data?.links?.youtube_id}`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchInfo;
