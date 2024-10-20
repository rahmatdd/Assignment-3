function threeStepsAB(text) {

    let convertToArr = text.split('');
    let lengthChar = convertToArr.length;

    for (let i = 0; i < lengthChar; i++) {
        if ((convertToArr[i] === 'a' && convertToArr[i + 4] === 'b') || 
            (convertToArr[i] === 'b' && convertToArr[i + 4] === 'a')) {
            return true;
        }
    }
    return false;
}

console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false