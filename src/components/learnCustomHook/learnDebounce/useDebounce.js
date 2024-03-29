import { useCallback, useRef } from "react";

export const useDebounce = (fn, delay, immediate = false) => {
    // ref the timer
    const timerId = useRef();
    // create a memoized debounce
    const debounce = useCallback(
        function () {
            // reference the context and args for the setTimeout function
            let context = this,
                args = arguments;
            // should the function be called now? If immediate is true
            // and not already in a timeout then the answer is: Yes
            const callNow = immediate && !timerId.current;
            // base case
            // clear the timeout to assign the new timeout to it.
            // when event is fired repeatedly then this helps to reset
            clearTimeout(timerId.current);
            // set the new timeout
            timerId.current = setTimeout(function () {
                // Inside the timeout function, clear the timeout variable
                // which will let the next execution run when in 'immediate' mode
                timerId.current = null;
                // check if the function already ran with the immediate flag
                if (!immediate) {
                    // call the original function with apply
                    fn.apply(context, args);
                }
            }, delay);
            // immediate mode and no wait timer? Execute the function immediately
            if (callNow) fn.apply(context, args);
        },
        [fn, delay, immediate]
    );
    return debounce;
};
