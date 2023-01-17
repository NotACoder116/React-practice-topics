import { useEffect, useState } from "react";

const useOnScreen = (ref) => {
    const [isIntersectiong, setIsIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
    });

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }
    });

    return isIntersectiong;
}

export default useOnScreen;