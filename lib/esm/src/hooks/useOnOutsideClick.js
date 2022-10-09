import { useEffect, useRef } from 'react';
var useOnOutsideClick = function (ref, handler) {
    var callbackRef = useRef(handler);
    var callback = callbackRef.current;
    useEffect(function () {
        var listener = function (event) {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, callback]);
};
export default useOnOutsideClick;
