import { useRef, useState } from 'react'

const useStateWithHistory = (initialState) => {
    const [state, setStateInterval] = useState(initialState); // Store the current state
    const history = useRef([state]); // Store all the states
    const historyIndex = useRef(0);  // Store the current state Index

    const setState = newState => {
        history.current.push(newState);
        historyIndex.current = history.current.length - 1;
        setStateInterval(newState);
    }

    const goBack = () => {
        if (historyIndex.current === 0) return;
        historyIndex.current--;
        setStateInterval(history.current[historyIndex.current]);
    }

    const goForward = () => {
        if (historyIndex.current === history.current.length - 1) return;

        historyIndex.current++;
        setStateInterval(history.current[historyIndex.current]);
    }

    return [state, setState, goBack, goForward, history.current];
}

export default useStateWithHistory;
