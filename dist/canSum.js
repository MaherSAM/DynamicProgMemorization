"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.canSum = void 0;
//Decision problem
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0)
        return true;
    if (targetSum < 0)
        return false;
    if (targetSum in memo)
        return memo[targetSum];
    for (let num of numbers) {
        let dif = targetSum - num;
        memo[dif] = (0, exports.canSum)(dif, numbers, memo);
        if (memo[dif]) {
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};
exports.canSum = canSum;
const Test = () => {
    console.log("*********canSum*********");
    console.log((0, exports.canSum)(7, [2, 3])); //True
    console.log((0, exports.canSum)(7, [2, 3, 5, 7])); //True
    console.log((0, exports.canSum)(7, [2, 4])); //False
    console.log((0, exports.canSum)(8, [2, 3, 5])); //True
    console.log((0, exports.canSum)(300, [7, 14])); //False
};
exports.Test = Test;
//# sourceMappingURL=canSum.js.map