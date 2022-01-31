"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.gridTraveler = void 0;
const gridTraveler = (n, m, memo = {}) => {
    const key = m + "," + n;
    if (key in memo)
        return memo[key];
    if (n === 0 || m === 0)
        return 0;
    if (n === 1 && m === 1)
        return 1;
    memo[key] = (0, exports.gridTraveler)(n - 1, m, memo) + (0, exports.gridTraveler)(n, m - 1, memo);
    return memo[key];
};
exports.gridTraveler = gridTraveler;
const Test = () => {
    console.log("*********gridTraveler*********");
    console.log((0, exports.gridTraveler)(1, 1)); //1
    console.log((0, exports.gridTraveler)(2, 3)); //3
    console.log((0, exports.gridTraveler)(3, 2)); //3
    console.log((0, exports.gridTraveler)(3, 3)); //6
    console.log((0, exports.gridTraveler)(18, 18)); //2333606220
};
exports.Test = Test;
//# sourceMappingURL=gridTraveler.js.map