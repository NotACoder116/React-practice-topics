import { useLayoutEffect, useRef, useState } from "react";
/** useLayoutEffect is synchronous but useEffect is asynchronous */
const LearnUseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;

    const { bottom } = button.current.getBoundingClientReact();
    popup.current.style.top = `${bottom+25}px`;

  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here</button>
      {show && (
        <div style={{ position: 'absolute'}} ref={popup}>This is popup</div>
      )}
    </>
  )
}

export default LearnUseLayoutEffect;