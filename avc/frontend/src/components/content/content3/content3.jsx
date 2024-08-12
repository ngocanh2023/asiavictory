import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
// import Image3 from "../../../image/frozen.png";
import "./content3.css";

const Content3 = () => {
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
      "http://localhost:5000/getDataByDate?title=Frozen Foods",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="content3">
      <h3 onClick={()=>{navigate("/frozenfood")}}>FROZEN FOODS</h3>
     {data && <div className="contPra3">
        <div className="imgCo3">
          <img src={data[0]?.image} alt="" />
        </div>
        <div className="cont3All"> 
          <h4>{data[0]?.title}</h4>
          <div>{data[0]?.content}</div>
          {/* Frozen foods are food items preserved through freezing and stored in a
          freezer until preparation. <br/>Primary types of frozen foods include
          frozen fruit, juice, vegetables, and specialty frozen foods. Frozen
          fruits, harvested at peak ripeness, are rapidly frozen and packaged in
          a nitrogen environment. These frozen food items cater to users in the
          food service industry and retail sectors, distributed through various
          channels such as supermarkets, hypermarkets, convenience stores,
          e-commerce platforms, and other distribution channels. <br/>The frozen food
          market size has grown strongly in recent years. It will grow from
          $226.16 billion in 2023 to $240.88 billion in 2024 at a compound
          annual growth rate (CAGR) of 6.5%. The growth observed in the
          historical period can be attributed to various factors, including
          globalization's cross-cultural influences, brand loyalty stemming from
          effective marketing campaigns, the appeal of convenience and
          time-saving attributes, evolving consumer lifestyles, and innovations
          in product varieties within the frozen food industry.
          <br /> */}
        </div>
      </div>}
    </div>
  );
};
export default Content3;
