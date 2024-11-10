import {
  AboutUs,
  // Feeds,
  Team,
  Testimonial,
} from "../components/common/page-componets";
import Mission from "../components/common/page-componets/Mission";

const About = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <AboutUs />
      <Team />
      <Mission />
      <Testimonial />
      {/* <Feeds /> */}
    </div>
  );
};

export default About;
