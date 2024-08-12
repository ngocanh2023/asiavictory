// import { useNavigate } from "react-router-dom";
import Image from "../../image/Air-freight-vs.-Sea-Freight.png";
import "./banner.css";

function Banner() {
  // const navigate = useNavigate();

  return (
    <div className="bannerContainer">
      
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${Image})`,
          backgroundPosition: "center center",
          borderRadius: "0.5rem",
        }}
      >
        <div className="banner__contents">
          <b>Asia Victory Exim Commercial Company Limited (AVEC)</b> is a
          distinguished establishment that emerged in the year 2010,
          specializing in the realm of logistics. Over an extensive span of 15
          years, we have meticulously curated a team of over 60 dedicated
          individuals, spanning across various regions encompassing Asia,
          Europe, America, Africa, and beyond. Our company proudly engages in
          trading an extensive array of commodities, including agricultural
          products, industrial goods, chemicals, and electronic components,
          catering to a diverse clientele.
          <br />
          <br />
          Since 2019, we have embarked on a transformative journey to transition
          into a pioneering technology enterprise. Our primary focus lies in
          offering avant-garde business solutions that are tailored to meet the
          dynamic needs of our esteemed patrons. Key facets of our commitment
          revolve around enhancing cost-efficiency, streamlining processes,
          bolstering safety standards, and leveraging cutting-edge technology to
          propel our client's operations to new heights. <br />
          <br />
          In the era of the Industry 4.0 technological revolution, our strategic
          shift exemplifies our alignment with the rapidly evolving global tech
          landscape. By seamlessly integrating our traditional product lines
          with our futuristic technology-driven offerings, we aim to deliver
          unparalleled value to our customers, thereby fostering mutual
          prosperity and growth for both our clientele and our organization.{" "}
          <br />
          <br />
          At Asia Victory Exim Trading Company Limited, our ardent aspiration is
          to forge lasting partnerships with discerning entities like yours. We
          believe that collaboration with your esteemed company holds the
          potential to unlock a myriad of synergies and opportunities that could
          collectively propel our mutual success to unparalleled levels. We
          eagerly anticipate the prospect of collaborating with you and
          embarking on a transformative journey that ushers in a new era of
          shared prosperity and innovation.
          <br />
          {/* <button
            className="banner__button1"
            onClick={() => {
             navigate("/login");
            }}
          >
            Login
          </button>
          <button
            className="banner__button"
            onClick={() => {
              navigate("/register")
            }}
          >
            Register
          </button> */}
        </div>
        <div className="banner__fadeBottom"></div>
      </header>
    </div>
  );
}

export default Banner;
