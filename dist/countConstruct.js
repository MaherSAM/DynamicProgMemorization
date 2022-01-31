"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.countConstruct = void 0;
const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo)
        return memo[target];
    if (target === "")
        return 1;
    let count = 0;
    for (let key = 0; key < wordBank.length; key++) {
        let word = wordBank[key];
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let result = (0, exports.countConstruct)(suffix, wordBank, memo);
            count += result;
        }
    }
    memo[target] = count;
    return count;
};
exports.countConstruct = countConstruct;
const Test = () => {
    console.log("*********countConstruct*********");
    console.log((0, exports.countConstruct)("dad", ["ad", "d"])); //True
    console.log((0, exports.countConstruct)("purple", ["purp", "p", "ur", "le", "purpl"])); //True
    console.log((0, exports.countConstruct)("bad", ["ad", "d"])); //False
    console.log((0, exports.countConstruct)("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //False
    console.log((0, exports.countConstruct)("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeeeeeeee",
        "eeeeeeeeeee",
        "eeeeeeeeeeeeee",
    ])); //False
};
exports.Test = Test;
//# sourceMappingURL=countConstruct.js.map