import useIdle from "./useIdle";

const ParentUseIdle = () => {
    const isIdle = useIdle(2000);
    return (
        <div>
            <h1>IsIdle: {isIdle ? "true" : "false"}</h1>
        </div>
    );
};

export default ParentUseIdle;
// Output:
// IsIdle: false
// IsIdle: true // after 2 seconds
