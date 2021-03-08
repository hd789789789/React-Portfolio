import React from 'react';
import {FaGithub, FaCamera, FaReact} from "react-icons/fa";

const Services = () => {
    const [header] = React.useState({mainHeader:"SERVICES", text:'Duis et veniam qui sit ullamco laboris'+
    'Duis et veniam qui sit ullamco laboris.', subHeader:"My Services"});
    const [state] = React.useState([
    {
      id:1,
      icon: <FaGithub className="commonIcons" />,
      heading: 'Web Development',
      text: 'Id consectetur adipisicing veniam adipisicing'+
      'veniam consequat occaecat. Quis veniam sit cupidatat'+
      'duis laboris mollit. Irure et tempor qui enim.'+
      'Dolor aliqua officia sint ea cupidatat magna.'
    },
    {
      id:2,
      icon: <FaCamera className="commonIcons" />,
      heading: 'Web Development',
      text: 'Id consectetur adipisicing veniam adipisicing'+
      'veniam consequat occaecat. Quis veniam sit cupidatat'+
      'duis laboris mollit. Irure et tempor qui enim.'+
      'Dolor aliqua officia sint ea cupidatat magna.'
    },
    {
      id:3,
      icon: <FaReact className="commonIcons" />,
      heading: 'Web Development',
      text: 'Id consectetur adipisicing veniam adipisicing'+
      'veniam consequat occaecat. Quis veniam sit cupidatat'+
      'duis laboris mollit. Irure et tempor qui enim.'+
      'Dolor aliqua officia sint ea cupidatat magna.'
    },
    {
      id:4,
      icon: <FaGithub className="commonIcons" />,
      heading: 'Web Development',
      text: 'Id consectetur adipisicing veniam adipisicing'+
      'veniam consequat occaecat. Quis veniam sit cupidatat'+
      'duis laboris mollit. Irure et tempor qui enim.'+
      'Dolor aliqua officia sint ea cupidatat magna.'
    },
    {
      id:5,
      icon: <FaCamera className="commonIcons" />,
      heading: 'Web Development',
      text: 'Id consectetur adipisicing veniam adipisicing'+
      'veniam consequat occaecat. Quis veniam sit cupidatat'+
      'duis laboris mollit. Irure et tempor qui enim.'+
      'Dolor aliqua officia sint ea cupidatat magna.'
    },
    {
      id:6,
      icon: <FaReact className="commonIcons" />,
      heading: 'Web Development',
      text: 'Id consectetur adipisicing veniam adipisicing'+
      'veniam consequat occaecat. Quis veniam sit cupidatat'+
      'duis laboris mollit. Irure et tempor qui enim.'+
      'Dolor aliqua officia sint ea cupidatat magna.'
    }
    ]);
    const listItems = state.map(info => (
            <div className="col-4" key={info.id}>
              <div className="service_box">
                {info.icon}
                <div className="service_box-header">{info.heading}</div>
                <div className="service_box-content">{info.text}</div>
              </div>
            </div>
            ));
  return (
    <div className="services">
      <div className="container">
        <div className="services_header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="main_header">{header.subHeader}</h1>
            <p className="main_content">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row bgMain">
            {listItems}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

