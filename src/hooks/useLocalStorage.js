import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
    // passing a function to useState which will check localStorage for data
    // under a key name passed in, or it will serve defaul value passed in if 
    // data under key name is not found
    const [state, setState] = useState(() => {
        let value;

        try {
            value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue));
            return value
        } catch (e) {
            console.log(e)
            value = defaultValue
        }
    })

    // using useEffect to keep track of key and state, and then when there is a change
    // it saves to localStorage
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    // returns state and function for setting state
    return [state, setState]
}

export default useLocalStorage;