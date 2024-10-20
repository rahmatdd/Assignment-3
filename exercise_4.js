function arrSum(arr) {
    let maxSum = 0;
    let start = 0
    let end = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            if (currentSum > maxSum) {
                maxSum = currentSum;
                start = i;
                end = j;
            }
        }
    }

    return [arr.slice(start, end + 1), maxSum];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));