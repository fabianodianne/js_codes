/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0)
        return false;

    let chars = [];
    const opening = ['(', '[', '{'];
    const closing = [')', ']', '}'];

    for (let char of s) {
        if (opening.includes(char)) {
            chars.push(char);
        } else if (closing.includes(char)) {
            const match = opening[closing.indexOf(char)];
            if (chars.length === 0 || chars.pop() !== match)
                return false;
        }
    }
    return chars.length === 0;
};

console.log(isValid("[()]{}"));