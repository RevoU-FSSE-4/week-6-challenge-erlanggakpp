function filterWords(words) {
    // Your code here
    let result = [];
    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if (words[index].length > 3) {
            result.push(element);
        }
    }
    return result;
}
const inputWords = ["apple", "car", "grape"];
console.log(filterWords(inputWords));
module.exports = filterWords;
