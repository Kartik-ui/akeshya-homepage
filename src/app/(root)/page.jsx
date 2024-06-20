import Clients from "./Clients";
import Hero from "./Hero";
import About from "./about/About";
import Counts from "./about/Counts";
import ContactUs from "./contact/ContactUs";
import Services from "./services/page";

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Counts />
      <Services />
      <ContactUs />
    </>
  );
};

export default Home;
