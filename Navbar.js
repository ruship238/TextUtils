import React from "react";
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { link } from "react-router-dom";

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <link to ="/" className="navbar-brand" href="/">{props.title}</link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <link to="/">Home</link>
              </li>
              <li className="nav-item">
                <link to="/" className="nav-link" >{props.about}</link>
              </li>
             
            </ul>
            
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          {/* eslint-disable-next-line no-undef*/}
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
      </nav>

    )

}
Navbar.propTypes = {
  title:PropTypes.string,
  about:PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here",
  about:"About text here"
}  

