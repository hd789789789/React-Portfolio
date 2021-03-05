import React from 'react';
import {FaFacebookF, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa';
import Man from '../assets/man-01.png'

const Banner = () => {
    const [state] = React.useState({title: 'Lê Nguyễn Hải Duy', text: 'Hello, I\'m Lê Nguyễn Hải Duy' });
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
                <h1>{ state.title }</h1>
                <p>{ state.text }</p>
                <div className="header_button">
                  <a href="" className="btn btn-outline">My Portfolio</a>
                </div>
              </div>  
            </div>
          </div>
          <div className="col-6">
          <div className="banner_img">
            <img src={ Man } alt="My image"/>
          </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Banner
 