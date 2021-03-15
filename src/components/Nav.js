import React from 'react';
import { Link } from 'react-scroll';
import { FaAlignJustify } from 'react-icons/fa';

const Nav = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_container">
                    <ul className="navbar_left">
                        {/* <div className="navbar_left-logo">
            <img src={Logo} alt="logo" /> */}
                        <h2 className="navbar_left-logo">
                            <Link to="header" smooth={true} duration={2000}>
                                HD789
                            </Link>
                        </h2>
                        {/* </div> */}
                    </ul>
                    {state ? (
                        <ul className="navbar_right">
                            <li>
                                <Link to="header" className="active" smooth={true} duration={1000}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="services" className="active" smooth={true} duration={1000}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="skills" className="active" smooth={true} duration={1000}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="about" className="active" smooth={true} duration={1000}>
                                    About
                                </Link>
                            </li>
                            {/* <li>
                <Link to='about' className="active" smooth={true} duration={1000}>Portfolio</Link>
              </li> */}
                            <li>
                                <Link to="contact" className="active" smooth={true} duration={1000}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    );
};

export default Nav;
