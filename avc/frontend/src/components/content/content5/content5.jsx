import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
// import Image5 from "../../../image/techno.png";
import "../content3/content3.css";

const Content5 = () => {
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
      "http://localhost:5000/getDataByDate?title=Technology Management",
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
      <h3 onClick={() => {navigate("/technology")}}>TECHNOLOGY MANAGEMENT</h3>
      {data && <div className="contPra3">
        <div className="imgCo3">
          <img src={data[0]?.image} alt="" />
        </div>
        <div className="cont3All"> 
          <h4>{data[0]?.title}</h4>
          <div className="mainCnt">{data[0]?.content}</div>
          {/* Technology management can also be defined as the integrated planning,
          design, optimization, operation and control of technological products,
          processes and services, a better definition would be the management of
          the use of technology for human advantage. <br/>Technology Management was
          deemed an emerging field of study by the Department of Education and
          received a new Classification of Instructional Program (CIP) code in
          2020. Technology Management education is defined as a program that
          prepares individuals to develop science, technical, and business
          skills required for management of people and systems in
          technology-based industries, government agencies, and non-profit
          organizations. Includes instruction in computer applications, general
          management principles, production and operations management, project
          management, quality control, safety and health issues, and statistics.
          52.0216 2020 CIP Code Perhaps the most authoritative input to our
          understanding of technology is the diffusion of innovations theory
          developed in the first half of the twentieth century. It suggests that
          all innovations follow a similar diffusion pattern – best known today
          in the form of an "s" curve though originally based upon the concept
          of a standard distribution of adopters. In broad terms the "s" curve
          suggests four phases of a technology life cycle – emerging, growth,
          mature and aging. These four phases are coupled to increasing levels
          of acceptance of an innovation or, in our case a new technology. In
          recent times for many technologies an inverse curve – which
          corresponds to a declining cost per unit – has been postulated. This
          may not prove to be universally true though for information technology
          where much of the cost is in the initial phase it has been a
          reasonable expectation. <br/>The second major contribution to this area is
          the Carnegie Mellon Capability Maturity Model. This model proposes
          that a series of progressive capabilities can be quantified through a
          set of threshold tests. These tests determine repeatability,
          definition, management and optimization. The model suggests that any
          organization has to master one level before being able to proceed to
          the next.<br/> The third significant contribution comes from Gartner – the
          research service, it is the Hype cycle, this suggests that our modern
          approach to marketing technology results in the technology being over
          hyped in the early stages of growth. Taken together, these fundamental
          concepts provide a foundation for formalizing the approach to managing
          technology.
          <br /> */}
        </div>
      </div>}
    </div>
  );
};
export default Content5;
