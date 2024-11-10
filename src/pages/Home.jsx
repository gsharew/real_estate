import {
  Counter,
  Featured,
  Projects,
  Services,
  Testimonial,
} from "../components/common/page-componets";
import { DetailList } from "../components/common/page-componets/DetailList";
import {
  Feeds,
  Filters,
  Hero,
  Invest,
  Speciality,
} from "../components/home/home-1";

const Home = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero />
      <Filters />
      <Invest />
      <Speciality />
      <Services />
      <Featured />
      <Counter />
      <Projects />
      <Testimonial />
      <Feeds />
      <DetailList/>
    </div>
  );
};

export default Home;
