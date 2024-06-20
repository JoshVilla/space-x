import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRockets } from "../../../../utils/api";
import style from "./style.module.scss";
import TitlePage from "../../../../components/titlePage";
const RocketInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>({});
  const [imageName, setImageName] = useState("falcon9");
  useEffect(() => {
    getRockets(id).then((res) => {
      if (res.data) {
        setData(res.data);
        console.log(res?.data?.name);

        switch (res?.data?.name) {
          case "Falcon 1":
            setImageName("falcon1");
            break;
          case "Falcon 9":
            setImageName("falcon9");
            break;
          case "Falcon Heavy":
            setImageName("falconHeavy");
            break;
          case "Starship":
            setImageName("starship");
            break;
          default:
            break;
        }
      }
    });
  }, []);

  const { diameter, mass, height } = data || {};
  const infoMap = [
    {
      label: "HEIGHT",
      conversion: `${height?.meters} m`,
      subConversion: `${height?.feet} ft`,
    },
    {
      label: "MASS",
      conversion: `${mass?.kg} kg`,
      subConversion: `${mass?.lb} lb`,
    },
    {
      label: "DIAMETER",
      conversion: `${diameter?.meters} m`,
      subConversion: `${diameter?.feet} ft`,
    },
  ];
  return (
    <div className={style.mainContainer}>
      <div className={style.infoWapper}>
        <div className={style.leftItem}>
          <TitlePage title={`${data.name} Overview`} large />
          <div className={style.description}>{data.description}</div>
          <div className={style.infoContainer}>
            {infoMap.map((items: any, idx: number) => (
              <div className={style.itemInfo} key={idx}>
                <span>{items.label}</span>
                <div className={style.value}>
                  <span>{`${items.conversion}`}</span>
                  <span>{` / ${items.subConversion}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.rightItem}>
          <img src={`/assets/images/${imageName}.png`} height={600} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RocketInfo;
