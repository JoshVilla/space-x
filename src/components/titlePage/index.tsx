import React from "react";
import style from "./style.module.scss";
type Props = {
  title: string;
  large?: boolean;
};

const TitlePage = ({ title, large }: Props) => {
  const largeTitle = large
    ? {
        textTransform: "uppercase",
        fontWeight: "bolder",
        fontSize: "50px",
      }
    : undefined;
  return (
    <div
      className={style.title}
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ ...largeTitle }}
    >
      {title}
    </div>
  );
};

export default TitlePage;
