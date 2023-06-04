import useLocalStorageState from "../hooks/useLocalStorageState";

const Counter = () => {
    // we'll pass in 'count' as a key for finding any value stored in localStorage
    // and we'll pass in '0', if there is no value under key 'count'
    // '0' will be used as the initial value
    const [count, setCount] = useLocalStorageState('count', 0)

    // this will use localStorage to save value with help of setCount function
    // from useLocalStorageState custom hook
    const addToCount = () => {
        setCount(count => count + 1)
    }

    return (
        <>
            <h4>{count}</h4>
            <button onClick={addToCount}>Add</button>
        </>
    )
}

export default Counter;

// making it work without custom hooks--------------------------------

// const Counter = () => {
//     /* we can pass in a function to useState() and this function will run
//        and what is returned will be used as the initial value for count
//     */
//     const [count, setCount ] = useState(() => {
//         let value;
//         value = JSON.parse(window.localStorage.getItem('count') || 0)
//         return value;
//     })

//     useEffect(() => {
//         window.localStorage.setItem('count', count);
//     }, [count])

//     const addToCount = () => {
//         setCount(count => count + 1)
//     }

//     return (
//         <>
//             <h4>{count}</h4>
//             <button onClick={addToCount}>Add</button>
//         </>
//     )
// }

// export default Counter;