import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Image2 from "../../../image/natural.png";
import "./content2.css";

const Content2 = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      "http://localhost:5000/getDataByDate?title=Natural Resources",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
      })
      .catch((error) => console.error(error));
  };

  // console.log("data", data);
  // console.log("data", data[0].time)

  return (
    <div className="content2">
      <h3
        onClick={() => {
          navigate("/natural");
        }}
      >
        NATURAL RESOURCES
      </h3>
      {data && (
        <div className="cont2Pra">
          <div className="cont2All">
            <h4>{data[0]?.title}</h4>
            <div className="mainContent">{data[0]?.content}</div>
            {/* The WB also recognized Vietnam's success in maintaining a diversified
          export market. Among its trading partners, the US remains the largest
          market, contributing 19.5% of Vietnam's total export turnover. It is
          followed by the European Union (EU), the Association of Southeast
          Asian Nations (ASEAN), China, Japan and South Korea. <br/>Trade between
          Vietnam and the US has not been affected by recent trade policies.
          Vietnam's export turnover to the US increased by 14% from January to
          October 2018 compared to the same period last year, while imports from
          the US and Vietnam increased by 40.4%, led by agricultural products
          such as soybeans, wheat, cotton, animal feed, as well as computers,
          machinery and equipment... accounting for 5.5% of Vietnam's total
          export turnover.<br/> In particular, according to the WB, thanks to its
          diversified export markets, Vietnam has been able to maintain its
          export achievements while minimizing economic risks due to external
          economic fluctuations. Vietnam has also signed many Free Trade
          Agreements (FTAs), including two major trade agreements expected to
          come into effect in the near future: the Comprehensive and Progressive
          Agreement for Trans-Pacific Partnership (CPTPP) and the Vietnam - EU
          Free Trade Agreement (EVFTA). <br/>"The above new agreements will create
          opportunities for Vietnam to improve its access to export markets and
          attract new sources of foreign investment," the WB forecasts.
          <br /> */}
          </div>
          <div className="imgCo2">
            {" "}
            <img src={data[0]?.image} alt="" />
            {/* <img src={Image2} alt="" /> */}
          </div>
        </div>
      )}
    </div>
  );
};
export default Content2;
