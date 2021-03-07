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
                    <FaFacebookF className="headerIcon"/>
                  </li>
                  <li>
                    <FaYoutube className="headerIcon"/>
                  </li>
                  <li>
                    <FaTwitter className="headerIcon"/>
                  </li>
                  <li>
                    <FaInstagram className="headerIcon"/>
                  </li>
                </ul>
                <h1>{ state.title }</h1>
                <p>{ state.text }</p>
                <div className="header_button">
                  <a href="https://drive.google.com/file/d/16mcLKqur67gQLXb4iuGO42X01bB3L8WO/view?usp=sharing" className="btn btn-outline"><span></span>Watch my CV</a>
                </div>
              </div>  
            </div>
          </div>
          <div className="col-6">
          <div className="banner_img">
            {/* <img src={ Man } alt="My image"/> */}
          </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Banner
 