import React from 'react';
import './WhoAmI.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const WhoAmI = () => {
    return (
        <div className='whoami-page'>
            <h1>Who Am I?</h1>
            <p> Motivated computer science graduate student eager for DevOps
                engineer opportunities. Strong problem-solving skills, attention to
                detail, and commitment to high-quality results. Skilled in program-
                ming with a passion for learning new technologies. Ready to con-
                tribute to challenging projects, streamline development processes,
                and enhance overall efficiency.
            </p>

            <div className="social-links">
                <a href="https://github.com/Niroth36" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/dimitris-charitos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default WhoAmI;