import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar shadow-lg navbar-bg text-white navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-theme="dark"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="w-100">
            {/* First Row */}
            <div className="d-flex justify-content-end py-2">
              <ul
                data-bs-theme="dark"
                className="navbar-nav nav-text mb-2 mb-lg-0 d-flex align-items-center"
              >
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="/"
                    id="navbarDropdownMenuLink1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Placeholder Title
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink1"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="/"
                    id="navbarDropdownMenuLink2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Placeholder Title
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink2"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="/"
                    id="navbarDropdownMenuLink3"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Placeholder Title
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink3"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ms-3">
                  <form className="d-flex">
                    <button
                      className="btn btn-outline-light rounded-pill"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </form>
                </li>
              </ul>
            </div>
            <hr className="border-light" />
            {/* Second Row */}
            <div className="d-flex justify-content-end py-2">
              <ul className="navbar-nav nav-sub-text mb-2 mb-lg-0 d-flex">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    Placeholder Title
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/"
                  >
                    Placeholder Title
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/"
                  >
                    Placeholder Title
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/"
                  >
                    Placeholder Title
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
