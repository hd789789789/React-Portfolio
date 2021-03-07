import React from 'react'

const Skills = () => {
  const [header] = React.useState({subHeader:"My Skills"});
  
  const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
  
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
    )
  }
  const [state] = React.useState([
    {
      id:1,
      process: <Progress done="60"/>,
      info: 'Office Computer'
    },
    {
      id:2,
      process: <Progress done="50"/>,
      info: 'HTML & CSS'
    },
    ]);
  return (
    <div className="skills">
      <div className="container">
        <div className="common">
          <h1 className="main_header">{header.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          <div className="col-6">

          </div>
          <div className="col-6">
            <div className="skill_content">
              <div className="skills_section">
                <ul className="skills_ul">
                {state.map(value => (
                  <li>
                  <div className="skills_process">{value.process}</div>
                  <p className="skills_info">{value.info}</p>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
