function sumClassifier(numbers) {
    // Your code here
    let sumOfNumber = 0;
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        sumOfNumber += number;
    }
    let result = "Large Sum";
    switch (true) {
        case sumOfNumber === 10:
            result = "Equal Sum";
            break;
        case sumOfNumber < 10:
            result = "Small Sum";
            break;
    }
    return result;
}

console.log(sumClassifier([1, 2, 3, 5])); // Output: "Large Sum"
console.log(sumClassifier([5, 5])); // Output: "Equal Sum"
console.log(sumClassifier([0, 1, 2])); // Output:

module.exports = sumClassifier;
