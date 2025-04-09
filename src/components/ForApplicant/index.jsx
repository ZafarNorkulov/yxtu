import Yurispridensiya from "/yurispridensiya.jpg";
import Iqtisod from "/iqtisod-600x450.png";

const ForApplicant = () => {
  return (
    <section className="forApplicant" id="forApplicant">
      <div className="container d-flex align-items-center justify-content-center">
        <div
          className="d-flex flex-column text-center align-items-center justify-content-center"
          style={{ rowGap: 50 }}
        >
          <div className="forApplicant__head">
            <h3 data-aos="fade-right">Abituriyentlarga</h3>
            <p data-aos="fade-right">
              Yevroosiyo Xalqaro Taʼlim Universitetida quyidagi yo'nalishlar
              bo'yicha qabul davom etmoqda
            </p>
          </div>
          <div className="d-flex gap-5">
            <div className="card forApplicant__card" data-aos="zoom-in">
              <img src={Yurispridensiya} alt="Hamshira" className="card-img" />
              <div className="card-body">
                <h5 className="card-title">Yurisprudensiya</h5>
                <p>
                  Ta'lim yo'nalishi shifri -{" "}
                  <span className="cipher">50910203</span>
                </p>
                <p>O'qish muddat: 4 yil</p>
                <p>Kontrakt miqdori: 8 751 400 so'm</p>
              </div>
            </div>
            <div className="card forApplicant__card" data-aos="zoom-in">
              <img src={Iqtisod} alt="Hamshira" className="card-img" />
              <div className="card-body">
                <h5 className="card-title">Iqtisodiyot</h5>
                <p>
                  Ta'lim yo'nalishi shifri -{" "}
                  <span className="cipher">52940253</span>
                </p>
                <p>O'qish muddat: 4 yil</p>
                <p>Kontrakt miqdori: 8 233 990 so'm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForApplicant;
