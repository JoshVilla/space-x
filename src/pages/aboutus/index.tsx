import React, { useEffect, useState } from "react";
import TitlePage from "../../components/titlePage";
import { getCompanyInfo } from "../../utils/api";
import style from "./style.module.scss";
type AccountProps = {
  twitter: string;
  elonTwitter: string;
  flickr: string;
};

type LinkProps = {
  mainTwitter: string;
  muskTwitter: string;
  flickrMain: string;
};

const AboutUs = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState<AccountProps>({
    twitter: "",
    elonTwitter: "",
    flickr: "",
  });
  const [links, setLinks] = useState<LinkProps>({
    mainTwitter: "",
    muskTwitter: "",
    flickrMain: "",
  });
  useEffect(() => {
    getCompanyInfo({})
      .then((res) => {
        console.log(res.data.links.twitter, "resss");

        if (res.data) {
          setLoading(true);
          const { links } = res.data;
          setAccount({
            twitter: links.twitter.replace("https://", ""),
            elonTwitter: links.elon_twitter.replace("https://", ""),
            flickr: links.flickr.replace("https://www.", ""),
          });
          setLinks({
            mainTwitter: links.twitter,
            muskTwitter: links.elon_twitter,
            flickrMain: links.flickr,
          });
          setData(res.data);
        }
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <TitlePage title="About Us" />
          <div className={style.container}>
            <div className={style.summary}>{data.summary}</div>
            <div className={style.infoContainer}>
              <div className={style.info}>
                {/* <div>{No. of Emplyees${data.employees}`}</div> */}
                <div>
                  <span style={{ marginRight: "20px" }}>No. of Emplyees: </span>
                  <span>{data.employees}</span>
                </div>
                <div>
                  <span style={{ marginRight: "20px" }}>No. of Vehicles: </span>
                  <span>{data.vehicles}</span>
                </div>
              </div>
              <div className={style.info}>
                {/* <div>{No. of Emplyees${data.employees}`}</div> */}
                <div>
                  <span style={{ marginRight: "20px" }}>
                    No. of Launch Sites:{" "}
                  </span>
                  <span>{data.launch_sites}</span>
                </div>
                <div>
                  <span style={{ marginRight: "20px" }}>
                    No. of Test Sites:{" "}
                  </span>
                  <span>{data.test_sites}</span>
                </div>
              </div>
            </div>
            <div className={style.persons}>
              <div className={style.itemPerson}>
                <img src="/assets/images/elon-musk.bmp" alt="" />
                <div>{data.ceo}</div>
                <div>Chief Executive Officer</div>
              </div>
              <div className={style.itemPerson}>
                <img src="/assets/images/gwynne-shotwell.bmp" alt="" />
                <div>{data.coo}</div>
                <div>Chief Operating Officer</div>
              </div>
              <div className={style.itemPerson}>
                <img src="/assets/images/tom-mueller.bmp" alt="" />
                <div>{data.cto_propulsion}</div>
                <div>CEO of Impulse Space</div>
              </div>
            </div>
            <TitlePage title="Reach Us On" />
            <div className={style.accountContainer}>
              <div>
                <i className="fa-brands fa-x-twitter" />
                <a
                  href={links.mainTwitter}
                  target="_blank"
                  className={style.name}
                >
                  {account.twitter}
                </a>
              </div>
              <div>
                <i className="fa-brands fa-x-twitter" />
                <a
                  href={links.muskTwitter}
                  target="_blank"
                  className={style.name}
                >
                  {account.elonTwitter}
                </a>
              </div>
              <div>
                <i className="fa-brands fa-flickr" />
                <a
                  href={links.flickrMain}
                  target="_blank"
                  className={style.name}
                >
                  {account.flickr}
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={style.loading}>
          <img
            src="/assets/videos/loading.gif"
            className={style.imgg}
            width={50}
          />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
