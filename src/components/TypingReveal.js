import { useEffect, useState } from "react"

const TypingReveal = ({text, speed}) => {
    const [index, setIndex] = useState(0);
    const [content, setContent] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            const timer = setTimeout(() => {
                setContent(prevContent => prevContent + text.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }, speed);

            return () => clearTimeout(timer);
        }

        const cursorBlinking = setInterval(() => {
            setCursorVisible((visible) => !visible);
        }, 500);

        const hideCursorTimer = setTimeout(() => {
            clearInterval(cursorBlinking)
            setCursorVisible(false);
        }, 5000);

        return () => {
                clearTimeout(hideCursorTimer);
                clearInterval(cursorBlinking);
            }   
        }, [index, text, speed]);

    return (
        <span>
            {content}
            {cursorVisible && <span className="cursor"></span>}
        </span>
    );
};

export default TypingReveal;