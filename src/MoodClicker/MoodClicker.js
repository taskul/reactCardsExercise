import { useState } from "react";
import useToggleState from "../hooks/useToggleState";
import './MoodClicker.css'

const MoodClicker = () => {
    // we destructure useToggleState to get state and toggleState function
    // we can also pass in inisial state as an argument
    // we can now use toggleState functions to control state
    // name of the function doesn't have to match. 
    const [isHappy, toggleIsHappy ] = useToggleState(true);
    const [isDarkMode, toggleIsDarkMode] = useToggleState(false);

    return (
        <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
            <h1>{isHappy ? '😊' : '😢' }</h1>
            <button onClick={toggleIsHappy}>Change mood</button>
            <button onClick={toggleIsDarkMode}>Toggle Dark/Light mode</button>
        </div>
    )
}

export default MoodClicker;


//  -------------   without custom hook ---------------------------------
// import { useState } from "react";
// import './MoodClicker.css'

// const MoodClicker = () => {
//     const [isHappy, setIsHappy ] = useState(true);
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const toggleMood = () => {
//         setIsHappy(mood => !mood)
//     }

//     const toggleIsDarkMode = () => {
//         setIsDarkMode(darkMode => !darkMode)
//     }
//     return (
//         <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
//             <h1>{isHappy ? '😊' : '😢' }</h1>
//             <button onClick={toggleMood}>Change mood</button>
//             <button onClick={toggleIsDarkMode}>Toggle Dark/Light mode</button>
//         </div>
//     )
// }

// export default MoodClicker;