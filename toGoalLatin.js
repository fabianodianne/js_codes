// problem from leetcode

function toGoatLatin(sentence) {
    const words = sentence.split(" ");

    for(let i = 0; i < words.length; i++) {
        const word = words[i][0].toLowerCase();
        const index = i + 1;
        const a = 'a'.repeat(index);
        if (word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u') {
            words[i] = words[i].concat("ma").concat(a);
        } else {
            words[i] = words[i].slice(1).concat(words[i][0]).concat("ma").concat(a);
        }
    }
    sentence = words.join(" ");

    return sentence;
};

console.log(toGoatLatin("I speak Goat Latin"));