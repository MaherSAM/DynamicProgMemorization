"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.canConstruct = void 0;
const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo)
        return memo[target];
    if (target === "")
        return true;
    for (let key = 0; key < wordBank.length; key++) {
        let word = wordBank[key];
        if (target.indexOf(word) === 0) {
            let reminder = target.slice(word.length);
            if ((0, exports.canConstruct)(reminder, wordBank, memo) === true) {
                memo[reminder] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};
exports.canConstruct = canConstruct;
const Test = () => {
    console.log("*********canConstruct*********");
    console.log((0, exports.canConstruct)("dad", ["ad", "d"])); //True
    console.log((0, exports.canConstruct)("bad", ["ad", "d"])); //False
    console.log((0, exports.canConstruct)("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //False
    console.log((0, exports.canConstruct)("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
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
//# sourceMappingURL=canConstruct.js.map