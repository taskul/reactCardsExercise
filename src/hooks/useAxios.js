import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import useLocalStorage from "./useLocalStorage";

// accepts url, formatData function, and key for saving to localStorage
// formatData function specifies which data to return when spreading into 
// setDataArr object
const useAxios = (url, formatData, key) => {
    // using useLocalStorage custom hook we are setting state for dataArr, and 
    // saving it to local storage at the same time.
    // we pass key variable which will be used to save data in localStorage 
    // under that key. we also pass in an empty array as a defaul value if 
    // data under key name is not found in localStorage
    const [dataArr, setDataArr] = useLocalStorage(key, [])
    
    // checking to see if there is an additional resource in url besides base url
    // then making API call to that url and setting setDataArr with response
    // data
    const addToDataArr = async (urlResource='') => {
        let fullUrl = typeof(urlResource) === 'string' ? url+urlResource : url;
        
        const response = await axios.get(fullUrl);
        setDataArr(data => [...data, {...formatData(response.data), id: uuid()}])
    }

    // this allows us to clear state of all the data that is stored in it
    const clearState = () => {
        setDataArr([])
    }

    // returning state, function for adding to state, and function for clearing state
    return [dataArr, addToDataArr, clearState]
}

export default useAxios;