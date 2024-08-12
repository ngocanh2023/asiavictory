import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import Image4 from "../../../image/market.png";
import "../content2/content2.css";

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
      "http://localhost:5000/getDataByDate?title=Market Research",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="content2">
      <h3 onClick={() => {navigate("/market")}}>MARKET RESEARCH AND DATA ANALYSIS</h3>
      {data && <div className="cont2Pra">
        <div className="cont2All"> 
          <h4>{data[0]?.title}</h4>
          <div>{data[0]?.content}</div>
          {/* Market research blends consumer behavior and economic trends to
          confirm and improve your business idea. It’s crucial to understand
          your consumer base from the outset. Market research lets you reduce
          risks even while your business is still just a gleam in your eye.
          Gather demographic information to better understand opportunities and
          limitations for gaining customers. This could include population data
          on age, wealth, family, interests, or anything else that’s relevant
          for your business. <br/>Then answer the following questions to get a good
          sense of your market: Demand: Is there a desire for your product or
          service? Market size: How many people would be interested in your
          offering? Economic indicators: What is the income range and employment
          rate? Location: Where do your customers live and where can your
          business reach? Market saturation: How many similar options are
          already available to consumers? Pricing: What do potential customers
          pay for these alternatives? You’ll also want to keep up with the
          latest small business trends. It’s important to gain a sense of the
          specific market share that will impact your profits. <br/>You can do market
          research using existing sources, or you can do the research yourself
          and go direct to consumers. Existing sources can save you a lot of
          time and energy, but the information might not be as specific to your
          audience as you’d like. Use it to answer questions that are both
          general and quantifiable, like industry trends, demographics, and
          household incomes. Check online or start with our list of market
          research resources.
          <br /> */}
        </div>
        <div className="imgCo2">
          <img src={data[0]?.image} alt="" />
        </div>
      </div>}
    </div>
  );
};
export default Content2;
