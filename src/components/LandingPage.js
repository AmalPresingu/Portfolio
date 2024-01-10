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
            <h1 className="greeting pixel">
                <TypingReveal text="> Hello world, my name is" speed={100}/>
            </h1>
            <div className="landing">
                {showDiv && (
                <>
                    <h1 className="name inter">Amal Presingu</h1>
                    <h1 className="role inter">Software Engineer</h1>
                </>
                )}
            </div>
            {showResume && (
                <div className='resume'>
                    <button className='inter'>Resume</button>
                </div>
            )}
            
        </>
    );
}

export default LandingPage;
