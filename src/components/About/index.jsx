import Litsenziya from "/litsenziya.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__wrapper">
          <img src={Litsenziya} data-aos="zoom-in" />
          <div className="about__text" data-aos="fade-left">
            <h4>BIZGA ISHONCH…</h4>
            <p>
              Barcha mas'uliyatni o'z zimmamizga olgan holda, tibbiyot sohasida
              yetuk, malakali, yuqori kompetentsiyaga ega kadrlarni tayyorlash
              uchun bor bilim, malaka, kuch-g'ayratimizni ushbu sohaga safarbar
              etamiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
