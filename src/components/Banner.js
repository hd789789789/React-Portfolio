import React from 'react';
import {FaFacebookF, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa';

const Banner = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header_content">
              <div className="header_section">
                <ul className="header_ul">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaYoutube />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                </ul>
                <h1>Hello, I'm Lê Nguyễn Hải Duy</h1>
                <p>Hello, I'm Lê Nguyễn Hải Duy</p>
              </div>  
            </div>
          </div>
          <div className="col-6">

          </div>

        </div>
      </div>
    </header>
  )
}

export default Banner
 