import { useEffect, useRef } from "react"
import ForwardingRefButton from "./ForwardingRefButton"

const ParentForwardRefButton = () => {
    const buttonRef = useRef();

    useEffect(() => {
        console.log(buttonRef);
        buttonRef.current.focus()
        buttonRef.current.value = "Helloo"
    });
    return (
        <div>
            <ForwardingRefButton ref={buttonRef} />
        </div>
    )
}

export default ParentForwardRefButton;