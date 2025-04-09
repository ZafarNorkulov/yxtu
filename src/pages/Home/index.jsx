import { useEffect } from "react";
// Aos
import Aos from "aos";
import "aos/dist/aos.css";
// Components
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import GeneralInfo from "../../components/GeneralInfo";
import ForApplicant from "../../components/ForApplicant";
import Contact from "../../components/Contact";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          className="scrollspy-example"
          tabIndex="0"
        >
          <Hero />
          <GeneralInfo />
          <ForApplicant />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.4901387520845!2d64.43305489961305!3d39.77355456692362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5005fd63ca24bd%3A0x6e0c32712789836d!2z0K7RgNC40LTQuNGH0LXRgdC60LjQuSDQutC-0LvQu9C10LTQtg!5e0!3m2!1sru!2s!4v1744191161083!5m2!1sru!2s"
            className="location"
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
