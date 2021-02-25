module.exports = function toReadable(number) {
    // function toReadable(number) {
    let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let numbersDozens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundredsResult;
    let dozensResult;
    let allDozen = number - (Math.floor(number / 100)) * 100;  
    let dozenMore20 = numbersDozens[Math.floor((allDozen / 10) - 2)];
    let dozenRemainder = numbers[allDozen - Math.floor((allDozen / 10)) * 10 - 1]
    let hundredsT = " hundred";
    if (number / 100 >= 1 && number % 100 == 0) {
        let hundredsN = numbers[Math.floor(number / 100 - 1)];
        hundredsResult = hundredsN + hundredsT;
    }
    else if (number / 100 >= 1) {
        let hundredsN = numbers[Math.floor(number / 100 - 1)];
        hundredsResult = hundredsN + hundredsT + " ";
    }
    else if (number % 10) {
        hundredsResult = "";
    }
    else {
        hundredsResult = "";
    }
    if (allDozen == 0) {
        dozensResult = "";
    }
    else if (allDozen >= 20) {
        if (!(allDozen % 10)) {
            dozensResult = dozenMore20;
        } else {
            dozensResult = dozenMore20 + ' ' + dozenRemainder;
        }
    } else {
        dozensResult = numbers[allDozen - 1]
    }
    let mainResult = hundredsResult + dozensResult;
    if (number == 0) {
        return "zero"
    } else {
        return mainResult
    }
}
