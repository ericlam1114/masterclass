import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import {headerData} from '../../data/headerData';
import aboutImage from '../../assets/images/phone.png';

// import { Button } from '@material-ui/core';






function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutImage}  
                        alt="" 
                    />
                     <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={"https://thenftmasterclass.substack.com/"}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                  
                                </a>
                            )}
                            {/* <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            > */}
                                {/* <Button className={classes.contactBtn}>
                                    Instagram
                                </Button> */}
                            {/* </NavLink> */}
                        </div>
                </div>
            </div>
        </div>

    )
}

export default About
