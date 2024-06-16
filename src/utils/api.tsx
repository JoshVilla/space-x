import axios from "axios";

export const getCompanyInfo = async ({}) => {
  return await axios({
    method: "get",
    url: "https://api.spacexdata.com/v4/company",
  });
};
