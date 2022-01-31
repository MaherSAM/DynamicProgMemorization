"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.allConstruct = void 0;
const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo)
        return memo[target];
    if (target === "")
        return [[]];
    let result = [];
    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let ways = (0, exports.allConstruct)(suffix, wordBank, memo);
            let targetWays = ways.map((w) => [word, ...w]);
            if (targetWays.length > 0) {
                result.push(...targetWays);
            }
        }
    }
    memo[target] = result;
    return result;
};
exports.allConstruct = allConstruct;
const Test = () => {
    console.log("*********allConstruct*********");
    console.log((0, exports.allConstruct)("dad", ["ad", "d"])); //True
};
exports.Test = Test;
//# sourceMappingURL=allConstruct.js.map