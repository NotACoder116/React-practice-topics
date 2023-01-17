import CustomUseToggle from "./CustomUseToggle";

const UseToggle = () => {
    const [value, ToggleValue] = CustomUseToggle(false);

    return (
        <>
            <span>{value.toString()}</span>
            <button onClick={ToggleValue}>Toggle</button>
            <button onClick={() => ToggleValue(true)}>Make it true</button>
            <button onClick={() => ToggleValue(false)}>Make it false</button>
        </>
    );
}

export default UseToggle;