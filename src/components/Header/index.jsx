const Header = () => {
  return (
    <header className="my-head">
      <nav id="navbar-example2" className="navbar navbar-expand-lg ">
        <div className="container ">
          <a className="logo">Yevroosiyo Xalqaro Taʼlim Universitet</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav nav-pills ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <span>Bosh sahifa</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#forApplicant">
                  <span>Abituriyentlarga</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <span>Aloqa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
