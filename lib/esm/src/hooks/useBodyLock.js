import { useEffect } from 'react';
var useBodyLock = function (locked) {
    if (locked === void 0) { locked = false; }
    useEffect(function () {
        if (typeof window === 'undefined') {
            return;
        }
        if (!locked) {
            return document.body.classList.remove('overflow-hidden');
        }
        return document.body.classList.add('overflow-hidden');
    }, [locked]);
    return;
};
export default useBodyLock;
