import { useState } from "react";

const useToggleFlip = (initialState) => {
    const [state, setState] = useState(initialState)

    // toggle state
    const changeState =() => {
        setState(state => !state)
    }

    // return state and function for toggling state
    return [state, changeState]
}

export default useToggleFlip;