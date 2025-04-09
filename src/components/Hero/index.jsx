
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__wrapper">
          <h4 className="hero__title">Biz yuqori sifatli ta'lim uchun mas'ulmiz</h4>
          <p className="hero__text">O'qish uchun online hujjat topshiring!</p>
          <a href="https://t.me/bxtt_admin">
            {" "}
            <button className="hero__btn btn btn-primary">Ro'yxatdan o'tish</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
