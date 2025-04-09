import React, { useState } from "react";
import { PatternFormat } from "react-number-format";

const SignUp = () => {
  const [allowEmpty, setAllowEmpty] = useState(false);
  return (
    <section className="register">
      <div className="container">
        <div className="register__wrapper shadow-lg">
          <h1 className="register__title">Buxoro Xalqaro Tibbiyot Texnikumi</h1>
          <form action="">
            <div className="login-input-box ">
              <PatternFormat
                name="username"
                format="+998 (##) ### ## ##"
                mask="_"
                allowEmptyFormatting={allowEmpty}
                onFocus={(e) => {
                  setAllowEmpty(true);
                }}
                onBlur={() => {
                  setAllowEmpty(false);
                }}
                required
              />
              <label htmlFor="">Telefon raqam</label>
            </div>
            <div className="btn-wrap">
              <button>Ro'yxatdan o'tish</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
