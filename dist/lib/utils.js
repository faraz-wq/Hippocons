"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPrice = exports.cn = void 0;
var clsx_1 = require("clsx");
var tailwind_merge_1 = require("tailwind-merge");
function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
exports.cn = cn;
function formatPrice(price, options) {
    if (options === void 0) { options = {}; }
    var _a = options || {}, _b = _a.currency, currency = _b === void 0 ? "USD" : _b, _c = _a.notation, notation = _c === void 0 ? 'compact' : _c;
    var numericPrice = typeof price === "string" ? parseFloat(price) : price;
    var locale = navigator.language || "en-US";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        notation: notation,
        maximumFractionDigits: 2,
    }).format(numericPrice);
}
exports.formatPrice = formatPrice;
