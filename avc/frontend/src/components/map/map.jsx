// import {useState, useEffect} from "react";
import mapHP from "../../image/map.png"
import "./map.css"

const Map = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   await fetch(
  //     "http://localhost:5000/getDataByDate?title=About Us",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => {
  //       setData(JSON.parse(result));
  //     })
  //     .catch((error) => console.error(error));
  // };
   
    return (
     <div className="mapAll">
        <h3>ABOUT US</h3>
        <div className="mapCon">
        <div className="mapImg"><img src={mapHP} alt=""/></div>
        <div className="mapAdd">
            <div className="mapTitle">
               {/* {data[0]?.content} */}
            <b>ASEAN VICTORY EXIM COMMERCIAL CO., LTD</b><br/>
            Office 1: 8 No Chocon street, Lechan district, Haiphong city, Vietnam.<br/>
            Office 2: Anlu, Thuynguyen, Haiphong, Vietnam. <br/>
            Email: mranhvuhp@gmail.com, anhvnfx18783@funix.edu.vn <br/>
            Phone: 84-902 011 755 (Mr Tony). <br/>
            Fax: 84-353-840017 <br/>
            </div>
        </div>
        </div>
     </div>
     
    );
  };

export default Map;
