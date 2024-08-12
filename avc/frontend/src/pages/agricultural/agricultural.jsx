import { useState, useEffect } from "react";
import Nav from "../../components/nav/nav";
import WideNav from "../../components/wideNav/wideNav"

const Agricultural = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      "http://localhost:5000/getDataByTitle?title=Agricultural Products",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
      })
      .catch((error) => console.error(error));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log('data', data);

  return (
    <div>
      <Nav scrollToSection={scrollToSection} />
      <WideNav/>
      <div className="content3">
        <h3>AGRICULTURAL PRODUCTS</h3>
        {data?.map((item, i) => {
          return (
            <div className="contPra3" key={i}>
              <div className="imgCo3">
                <img src={item?.image} alt="" />
              </div>

              <div className="cont3All"> 
                <h4>{item?.title}</h4>
                <div>{item?.content}</div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Agricultural;
