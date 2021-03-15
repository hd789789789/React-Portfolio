import React from 'react';
import About_img from '../assets/features-3.png';

const About = () => {
    const [header] = React.useState({
        subHeader: 'About Me',
        text:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.',
    });
    const [state] = React.useState([
        { id: 1, title: 'Name:', text: 'Lê Nguyễn Hải Duy' },
        { id: 2, title: 'Email:', text: 'Lenguyenhaiduy789789@gmail.com' },
        { id: 3, title: 'Phone:', text: '032 6161 901' },
        { id: 4, title: 'Username:', text: 'Haiduyhd789' },
    ]);
    const listItems = state.map((info) => (
        <div className="col-6" key={info.id}>
            <strong>{info.title}</strong>
            <p>{info.text}</p>
        </div>
    ));
    return (
        <div className="about">
            <div className="container">
                <div className="common" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="main_header">{header.subHeader}</h1>
                    <p className="main_content">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6 col-6_about-img" data-aos="fade-up" data-aos-delay="200">
                        <div className="about_img">
                            <img src={About_img} alt="About_img" />
                        </div>
                    </div>
                    <div className="col-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="about_info">
                            <h1>Hi There</h1>
                            <div className="about_info-p1">
                                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus
                                fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies
                                eros, ac porta sem turpis
                            </div>
                            <div className="about_info-p2">
                                nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem
                                turpis quis leo. Nulla in feugiat elit
                            </div>
                            <div className="info_contacts">
                                <div className="row">{listItems}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
