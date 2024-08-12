import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import "./content1.css";

const Content1 = () => {
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
      "http://localhost:5000/getDataByDate?title=Agricultural Products",
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
    <div className="content1">
      <h3 onClick={()=> {navigate("/agricultural")}} >AGRICULTURAL PRODUCTS</h3>
      {data && <div className="contPra">
        <div className="imgCo1">
          <img src={data[0]?.image} alt="" />
        </div>
        <div className="contAll">
        <h4>{data[0]?.title}</h4>
          <div className="mainCon">{data[0]?.content}</div>
        </div>
        {/* <div className="imgCo1">
          <img src={Image1} alt="" />
        </div>
        <div className="contAll">
          According to the Ministry of Agriculture and Rural Development, the
          total export turnover of agriculture, forestry and fisheries of the
          whole country was estimated at 38.48 billion USD, in the first nine
          months of 2024, down 5.1% compared to the same period in 2023. The
          agricultural sector still maintains its target of a total export
          turnover of 54 billion USD, for the whole year 2024. <br />
          It is predicted that the last months of the year will be an
          opportunity for many commodities to make breakthroughs to realise this
          goal. In particular, the fruit, vegetable and rice commodities are
          expected to achieve record export turnover, thanks to outstanding
          growth in the first nine months of the year. Meanwhile, the seafood
          industry is likely to recover strongly in the coming months.
          <br />
          It is forecasted that in the last months of the year, the world
          agricultural product market will continue to recover and grow
          strongly, creating opportunities for many industries to increase
          export turnover. The most notable is the fruit and vegetable industry.
          According to the Import-Export Department under the Ministry of
          Industry and Trade, fruit and vegetable exports recorded high growth
          rates in most commodity categories, in the first nine months of 2023.
          It is expected that in the whole year, fruit and vegetable export
          turnover may exceed 5 billion USD. <br />Typically, the export value of
          durian increased sharply and was continuously recorded at a high
          level. In the first eight months of 2023 alone, durian export value
          reached 1.28 billion USD, an increase of 708.4% over the same period
          in 2022. China is the main durian import market of Vietnam. General
          Secretary of the Vietnam Fruit and Vegetables Association Dang Phuc
          Nguyen said that under market signals, durian export prices and output
          will continue to increase in the near future because China's consumer
          demand is still forecast to remain at a sharp increase. <br /> Regarding international cooperation and market development to
          promote general consumption of agricultural products, Deputy Minister
          of Agriculture and Rural Development Phung Duc Tien noted that in the
          near future, the ministry will continue to handle market issues to
          create favourable conditions for agricultural exports, especially to
          the markets of China, the US and the EU. In particular, it is crucial
          to take advantage of free trade agreements to promote the export of
          key agricultural, forestry and fishery products, as well as support
          businesses in signing new export orders.<br />
        </div> */}
      </div>}
    </div>
  );
};
export default Content1;
