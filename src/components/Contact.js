import React from 'react'
import {FaFacebookF, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
                <h2 className="contact-logo">HD789</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exe- rcitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaYoutube className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
