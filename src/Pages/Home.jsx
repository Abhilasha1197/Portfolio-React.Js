import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css';


 function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, I'm Abhilasha Tiwari</h2><br/>
     <div className='prompt'><p>A software Developer with a passion for learning and creating</p>
       <a href='https://www.linkedin.com/in/abhilasha-tiwari-10a073246/'><LinkedInIcon /></a>
       <a href='https://github.com/Abhilasha1197'><GitHubIcon /></a> 
      <EmailIcon />
      </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ul className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>React.js, Redux, HTML5, CSS3, BootStrap, MaterialUI</span>
            </li>
            <li className='item'>
            <h2>Languages</h2>
            <span>java, javaScript, C</span>
            </li>
            <li className='item'>
            <h2>Backend</h2>
            <span>firebase ;) </span>
            </li>
         </ul>
      </div>
      
    </div>
  )
}
export default Home;
