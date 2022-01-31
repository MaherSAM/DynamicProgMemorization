"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.howSum = void 0;
//Combinatorics Problem
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    //n= numbers.length
    //m=targetSum
    for (let num of numbers) {
        //Time n
        let dif = targetSum - num;
        var result = (0, exports.howSum)(dif, numbers, memo); //Time m
        if (result !== null) {
            memo[dif] = [...result, num]; //Time m
            return memo[dif];
        }
    }
    memo[targetSum] = null;
    return null;
};
exports.howSum = howSum;
//Time O(n*m*m)
const Test = () => {
    console.log("*********howSum*********");
    console.log((0, exports.howSum)(10, [5, 2, 3, 7])); // [5,2,3] or [3,7]
    console.log((0, exports.howSum)(1, [5, 4, 7])); // null
    console.log((0, exports.howSum)(300, [14, 7])); // null
};
exports.Test = Test;
//# sourceMappingURL=howSum.js.map