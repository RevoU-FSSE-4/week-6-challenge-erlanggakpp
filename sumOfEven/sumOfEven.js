function sumOfEvens(numbers) {
    // Your code here
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 === 0) {
            result += number;
        }
    }
    return result;
}

module.exports = sumOfEvens;
