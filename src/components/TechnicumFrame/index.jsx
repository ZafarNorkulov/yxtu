import TechPhoto from "../../assets/images/techphoto.jpg";
import TechPhoto2 from "../../assets/images/techphoto2.jpg";
import TechPhoto3 from "../../assets/images/techphoto3.jpg";
import TechPhoto4 from "../../assets/images/techphoto4.jpg";
import TechPhoto5 from "../../assets/images/techphoto5.jpg";
import TechPhoto6 from "../../assets/images/techphoto6.jpg";
import TechPhoto7 from "../../assets/images/techphoto7.jpg";
import TechPhoto8 from "../../assets/images/techphoto8.jpg";
import TechPhoto9 from "../../assets/images/techphoto9.jpg";
import TechPhoto10 from "../../assets/images/techphoto10.jpg";
import TechPhoto11 from "../../assets/images/techphoto11.jpg";
import TechPhoto12 from "../../assets/images/techphoto12.jpg";
import TechPhoto13 from "../../assets/images/techphoto13.jpg";
import TechPhoto14 from "../../assets/images/techphoto14.jpg";
import TechPhoto15 from "../../assets/images/techphoto15.jpg";
import TechPhoto16 from "../../assets/images/techphoto16.jpg";
import TechPhoto17 from "../../assets/images/techphoto17.jpg";
import TechPhoto18 from "../../assets/images/techphoto18.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

const TechnicumFrame = () => {
  return (
    <section className="frame" id="technicumFrame">
      <div className="container">
        <div className="frame__head">
          <h3 data-aos="fade-right" style={{ fontSize:"24px" }}>Texnikumdan Lavhalar</h3>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper frame__photos"
      >
        <SwiperSlide>
          <img src={TechPhoto3} className="col-6" loading="lazy" />
          <img src={TechPhoto} className="col-6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TechPhoto7} className="col-6" loading="lazy" />
          <img src={TechPhoto6} className="col-6" loading="lazy" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={TechPhoto2} className="col-6" loading="lazy" />
          <img src={TechPhoto4} className="col-6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TechPhoto5} className="col-6" loading="lazy" />
          <img src={TechPhoto8} className="col-6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TechPhoto9} className="col-6" loading="lazy" />
          <img src={TechPhoto10} className="col-6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TechPhoto13} className="col-6" loading="lazy" />
          <img src={TechPhoto14} className="col-6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TechPhoto15} className="col-6" loading="lazy" />
          <img src={TechPhoto16} className="col-6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TechPhoto17} className="col-6" loading="lazy" />
          <img src={TechPhoto18} className="col-6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TechPhoto11} className="col-6" loading="lazy" />
          <img src={TechPhoto12} className="col-6" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TechnicumFrame;
