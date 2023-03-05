import { useState, useTransition } from "react";

const LearnTransitionHook = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleInput = (e) => {
        let value = e.target.value;
        setInput(value);

        let limit = 20000;

        startTransition(() => {
            let myList = [];
            for (let i = 0; i < limit; i++) {
                myList.push(value);
            }
            setList(myList);
        });
    }

    return <>
        <input value={input} onChange={handleInput} />
        {isPending ? '...Loading' : list.map(eachList => {
            return <p>{eachList}</p>
        })}
    </>
}

export default LearnTransitionHook;