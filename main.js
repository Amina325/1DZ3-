
var minNumver = (num1  , num2) => {
    console.log(Math.min(num1, num2))
}

console.log(minNumver(1, 5))


var stringLengh = (m = prompt("введите строку")) => {
    console.log(m.length)
}
stringLengh()

var calculator = (num1 = Number(prompt("введите первое число")), operator = prompt ("выберите + - * /"), num2 = Number( prompt ("второе число"))) => {

    if(operator === '/' && num2 === 0){
        console.log("На ноль делить нельзя")
    }
    else if (operator === '+') {
        console.log(num1 + num2)
    }else if (operator === "-"){
        console.log(num1 - num2)
    }else if (operator === '*') {
        console.log(num1 * num2)
    }else if (operator === '/'){
        console.log(num1 / num2)
    }else {
        console.log("Введите число")
    }
}

calculator()