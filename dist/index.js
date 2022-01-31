"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const testAllConstruct = __importStar(require("./allConstruct"));
const testBestSum = __importStar(require("./bestSum"));
const testCanConstruct = __importStar(require("./canConstruct"));
const testCanSum = __importStar(require("./canSum"));
const testCountConstruct = __importStar(require("./countConstruct"));
const testGridTravel = __importStar(require("./gridTraveler"));
const testHowSum = __importStar(require("./howSum"));
testAllConstruct.Test();
testBestSum.Test();
testCanConstruct.Test();
testCanSum.Test();
testCountConstruct.Test();
testGridTravel.Test();
testHowSum.Test();
//# sourceMappingURL=index.js.map