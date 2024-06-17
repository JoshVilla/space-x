import React from "react";
import style from "./style.module.scss";
type Props = {
  title: string;
};

const TitlePage = ({ title }: Props) => {
  return (
    <div className={style.title} data-aos="fade-up" data-aos-duration="1000">
      {title}
    </div>
  );
};

export default TitlePage;
