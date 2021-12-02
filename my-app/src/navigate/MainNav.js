import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  //Check if user isAuth
  const isAuth = false;

  //Component
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand px-3" to="/">
            Student-Invest
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {/* IF Auth is false */}
              {isAuth === false && (
                <li className="nav-item px-3">
                  <Link className="nav-link" to="/auth/signup">
                    Sign Up
                  </Link>
                </li>
              )}

              {isAuth === false && (
                <li className="nav-item px-3">
                  <Link className="nav-link" to="/auth/signin">
                    Sign In
                  </Link>
                </li>
              )}

              {/* IF Auth is true */}
              {isAuth && (
                <li className="nav-item px-3">
                  <a className="nav-link" href="#contacts_block">
                    Welcome back, ...
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
