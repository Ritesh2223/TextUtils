import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode}  bg-${props.mode}`} style={{backgroundColor: props.mode==='dark'?'#02111d':'#dee2e6',
        color: props.mode==='dark'?'#dee2e6':'black'}} 
      >
        <div className="container-fluid" style={{backgroundColor: props.mode==='dark'?'#02111d':'#dee2e6',
                    color: props.mode==='dark'?'#dee2e6':'black'}}>
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li> */}
            </ul>
            {/* <div className="d-flex">
                <div className="bg-primary rounded mx-2" style={{height: '30px', width:'30px'}}></div>
            </div> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
                Enable Darkmode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

// Navbar.defltProps = {
//   title: 'TextUtils',
//   aboutText : 'About us'
// };