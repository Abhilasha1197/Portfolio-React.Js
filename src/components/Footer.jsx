import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';


 function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
           
            <a href='https://www.linkedin.com/in/abhilasha-tiwari-10a073246/'><LinkedInIcon /></a>
            <FacebookIcon />
            <TwitterIcon />
        </div>
        <p> &copy;2023 Abhilasha Tiwari | All Rights Reserved |</p>
      
    </div>
  )
}

export default Footer;

