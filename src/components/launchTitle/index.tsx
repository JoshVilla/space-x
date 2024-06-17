import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
type Props = {
  code: "crew" | "starlink" | "private";
  title: string;
};

const LaunchTitle = ({ code = "crew", title = "" }: Props) => {
  const [upperTitle, setUpperTitle] = useState("");
  const getUpperTitle = () => {
    const getCode = title.split("-")[0];
    if (code === getCode.toLowerCase() && code === "crew") {
      setUpperTitle("CREW MISSION");
    } else if (code === getCode.toLowerCase() && code === "starlink") {
      setUpperTitle("STARLINK MISSION");
    } else {
      setUpperTitle("PRIVATE MISSION");
    }
  };

  useEffect(() => {
    getUpperTitle();
  }, [title]);

  return (
    <div className={style.mainContainer}>
      <div className={style.upperTitle}>{upperTitle}</div>
      <div className={style.name}>{title}</div>
    </div>
  );
};

export default LaunchTitle;
