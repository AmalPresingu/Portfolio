import './LandingStyles.css'
import '../App.css'
import TypingReveal from './TypingReveal';
import Fade from './Fade'

const LandingPage = () => {
    return (
        <div className='landing'>
            <h1 className="greeting pixel">
                <TypingReveal text="> Hello world, my name is" speed={100}/>
            </h1>
            <Fade delay={3500}>
                <h1 className="name helvetica">Amal Presingu.</h1>
                <h2 className="role helvetica">Software Engineer <span className='role-desc'>specializing in Web Development.</span></h2>
            </Fade>
        </div>
    )
}

export default LandingPage;