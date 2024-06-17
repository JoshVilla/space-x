import axios from "axios";

export const getCompanyInfo = async ({}) => {
  return await axios({
    method: "get",
    url: "https://api.spacexdata.com/v4/company",
  });
};

export const getLatestLaunch = async () => {
  return await axios({
    method: "get",
    url: "https://api.spacexdata.com/v4/launches/latest",
  });
};

export const getCrew = async () => {
  return await axios({
    method: "get",
    url: "https://api.spacexdata.com/v4/crew",
  });
};
