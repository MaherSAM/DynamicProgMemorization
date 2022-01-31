"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.bestSum = void 0;
//Optimization Problem
const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    let shortestCombination = null;
    for (let num of numbers) {
        //Time : n
        let dif = targetSum - num;
        let result = (0, exports.bestSum)(dif, numbers, memo); //Time : m
        if (result !== null) {
            const combination = [...result, num]; //Time : m
            if (shortestCombination === null ||
                shortestCombination.length > combination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
};
exports.bestSum = bestSum;
const Test = () => {
    console.log("*********bestSum*********");
    console.log((0, exports.bestSum)(7, [5, 3, 4, 7]));
    console.log((0, exports.bestSum)(8, [2, 3, 5]));
    console.log((0, exports.bestSum)(8, [1, 4, 5]));
    console.log((0, exports.bestSum)(100, [1, 2, 5, 25]));
};
exports.Test = Test;
//# sourceMappingURL=bestSum.js.map