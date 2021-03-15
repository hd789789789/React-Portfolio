import React from 'react';
import Skill_img from '../assets/skill-img.png';

const Skills = () => {
    const [header] = React.useState({ subHeader: 'My Skills' });

    const Progress = ({ done }) => {
        const [style, setStyle] = React.useState({});

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`,
            };

            setStyle(newStyle);
        }, 200);

        return (
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
        );
    };
    const [state] = React.useState([
        {
            id: 1,
            process: <Progress done="60" />,
            info: 'Office Computer',
        },
        {
            id: 2,
            process: <Progress done="60" />,
            info: 'HTML & CSS & Bootstrap',
        },
        {
            id: 3,
            process: <Progress done="50" />,
            info: 'Javascript',
        },
        {
            id: 4,
            process: <Progress done="40" />,
            info: 'React.js',
        },
        {
            id: 5,
            process: <Progress done="40" />,
            info: 'Node.js',
        },
        {
            id: 6,
            process: <Progress done="50" />,
            info: 'English',
        },
        {
            id: 7,
            process: <Progress done="70" />,
            info: 'Teamwork',
        },
    ]);

    const listItems = state.map((value) => (
        <li key={value.id}>
            <div className="skills_process">{value.process}</div>
            <p className="skills_info">{value.info}</p>
        </li>
    ));

    return (
        <div className="skills">
            <div className="container">
                <div className="common" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="main_header">{header.subHeader}</h1>
                    <div className="commonBorder"></div>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-6 col-6_skill-img">
                        <div className="skill_img">
                            <img src={Skill_img} alt="Skill_img" />
                        </div>
                    </div>
                    <div className="col-6 col-6_skill-content">
                        <div className="skill_content">
                            <div className="skills_section">
                                <ul className="skills_ul">{listItems}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
