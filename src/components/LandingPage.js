import './LandingStyles.css'
import '../App.css'
import TypingReveal from './TypingReveal';
import { useEffect, useState } from 'react';


const LandingPage = () => {
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 3850);
        return () => clearTimeout(timer);
    }, [])
    return (
        <>
            <h1 className="greeting pixel">
                <TypingReveal text="> Hello world, my name is" speed={100}/>
            </h1>
            <div className="landing">
                {showDiv && (
                <>
                <h1 className="name helvetica">Amal Presingu.</h1>
                <h2 className="role helvetica">Software Engineer <span className='role-desc'>specializing in Web Development.</span></h2>
                </>
            )}
            </div>
        </>
      );
    }

export default LandingPage;
  
