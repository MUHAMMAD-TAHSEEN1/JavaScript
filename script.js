// 1) parentheses (3+3)
const step1 = 3 + 3;
console.log("1) (3 + 3) =", step1); // 6

// 2) 18 ÷ (result)  => 18 / 6
const step2 = 18 / step1;
console.log("2) 18 ÷ (3+3) =", step2); // 3

// 3) multiply by 4 => previous * 4
const step3 = step2 * 4;
console.log("3) (18 ÷ (3+3)) × 4 =", step3); // 12

// 4) inner parentheses (2+1)
const step4 = 2 + 1;
console.log("4) (2 + 1) =", step4); // 3

// 5) 5 × (2+1)
const step5 = 5 * step4;
console.log("5) 5 × (2+1) =", step5); // 15

// 6) {12 − [5×(2+1)]}  => 12 - step5
const step6 = 12 - step5;
console.log("6) {12 − [5 × (2+1)]} =", step6); // -3

// 7) 7^2  => 7 ** 2
const step7 = 7 ** 2;
console.log("7) 7^2 =", step7); // 49

// 8) Combine: step3 − step6 + step7
// Note: step6 is -3, so minus step6 = minus(-3) = +3
const result = step3 - step6 + step7;
console.log("8) Final: (step3) − (step6) + (step7) =", result); // 64