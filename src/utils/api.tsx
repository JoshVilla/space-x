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

export const getNextLaunch = async () => {
  return await axios({
    method: "get",
    url: "https://api.spacexdata.com/v4/launches/next",
  });
};

export const getCores = async () => {
  return await axios({
    method: "get",
    url: "https://api.spacexdata.com/v4/cores",
  });
};
//

export const getRockets = async (id: string = "") => {
  return await axios({
    method: "get",
    url: `https://api.spacexdata.com/v4/rockets/${id}`,
  });
};
