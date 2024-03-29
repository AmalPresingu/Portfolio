import './LandingStyles.css'
import '../App.css'
import TypingReveal from './TypingReveal';
import '../index.css'
import { useEffect, useState } from 'react';


const LandingPage = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [showResume, setShowResume] = useState(false);

    useEffect(() => {
        const landingTimer = setTimeout(() => {
            setShowDiv(true);
        }, 3800);

        const resumeTimer = setTimeout(() => {
            setShowResume(true);
        }, 4000); 

        return () => {
            clearTimeout(landingTimer);
            clearTimeout(resumeTimer);
        };
    }, []);

    return (
        <>
            <div className='landing-container'>
                <h1 className="greeting pixel" id='home'>
                    <TypingReveal text="> Hello world, my name is" speed={100}/>
                </h1>
                <div className="landing">
                    {showDiv && (
                        <>
                        <div className='headers'>
                            <h1 className="name inter">Amal Presingu</h1>
                            <h1 className="role inter">Software Engineer</h1>
                        </div>
                        <div className='landing-image'>
                            <img src="pic2.png" alt=""></img>
                        </div>
                    </>
                    )}
                </div>
                {showResume && (
                    <div className='resume'>
                        <a href='Amal_Presingu_Resume.pdf' target='_blank' rel='noopener noreferrer' className='resume-link'>
                            <button className='inter'>Resume</button>
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}

export default LandingPage;
