import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
type Props = {
  code: "crew" | "starlink";
  title: string;
};

const LaunchTitle = ({ code = "crew", title = "" }: Props) => {
  const [upperTitle, setUpperTitle] = useState("");
  const getUpperTitle = () => {
    const getCode = title.split("-")[0];
    if (code === getCode.toLowerCase()) {
      setUpperTitle("CREW MISSION");
    } else {
      setUpperTitle("STARLINK MISSION");
    }
  };

  useEffect(() => {
    getUpperTitle();
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.upperTitle}>{upperTitle}</div>
      <div className={style.name}>{title}</div>
    </div>
  );
};

export default LaunchTitle;
