"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.substract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        var res;
        if (b != 0) {
            res = a / b;
        }
        else {
            res = null;
        }
        return res;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
