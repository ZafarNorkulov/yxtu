import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const GeneralInfo = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section className="general-info">
      <div className="general-info__bg" />
      <div className="container">
        <div className="row py-5">
          <div className="col-md-5">
            <h3
              className="general-info__title"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Umumiy Ma'lumotlar
            </h3>
          </div>
          <div className="col-md-7" data-aos="fade-up" data-aos-duration="1200">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center pb-3 pr-3">
                  <strong>
                    {counter && <CountUp start={0} end={25} duration={2.3} />}
                  </strong>
                  <p>Professor o'qituvchilar</p>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center pb-3 pl-3">
                  <strong>
                    {counter && <CountUp start={0} end={35} duration={2} />}
                  </strong>
                  <p>O'quv amaliy korpuslar</p>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center pt-3 pr-3">
                  <strong>
                    {counter && <CountUp start={0} end={2} duration={2} />}
                  </strong>
                  <p>Ta'lim yo'nalishlari</p>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center pt-3 pl-3">
                  <strong>
                    {counter && <CountUp start={0} end={500} duration={2.5} />}
                  </strong>
                  <p>Qabul kvota</p>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
