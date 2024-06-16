import React from "react";
import style from "./style.module.scss";
type Props = {
  title: string;
};

const TitlePage = ({ title }: Props) => {
  return <div className={style.title}>{title}</div>;
};

export default TitlePage;
