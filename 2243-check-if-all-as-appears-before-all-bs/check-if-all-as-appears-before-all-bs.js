/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
     let seenB = false;

    for (let char of s) {
        if (char === 'b') {
            seenB = true;
        }

        if (char === 'a' && seenB) {
            return false;
        }
    }

    return true;
};