import Banner from "../../components/banner/banner";
import Nav from "../../components/nav/nav";
import Content1 from "../../components/content/content1/content1";
import Content2 from "../../components/content/content2/content2";
import Content3 from "../../components/content/content3/content3";
import Content4 from "../../components/content/content4/content4";
import Content5 from "../../components/content/content5/content5";
import Customers from "../../components/customers/customers";
import Map from "../../components/map/map";
import Footer from "../../components/footer/footer";

import "./main.css";

const Main = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Nav scrollToSection={scrollToSection} />
      <div id="AVEC">
        <Banner />
      </div>
      <div id="Agricultural Products">
        <Content1 />
      </div>
      <div id="Natural Resources">
        <Content2 />
      </div>
      <div id="Frozen Foods">
        <Content3 />
      </div>
      <div id="Market Research And Data Analysis">
        <Content4 />
      </div>
      <div id="Technology Management">
        <Content5 />
      </div>
      {/* <div id="AVEC"> */}
      <Customers />
      {/* </div> */}
      <div id="About Us">
        <Map />
      </div>
      <Footer />
    </div>
  );
};
export default Main;
