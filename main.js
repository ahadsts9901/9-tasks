//  task 1

function factorial() {
    let number = document.getElementById("input-1").value;

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    document.getElementById("result-1").innerHTML = `The Factorial Of '${number}' IS '${result}'`
}

// task 2

function removeVowels() {

    let text = document.getElementById("input-2").value;

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (!vowels.includes(text[i])) {
            result += text[i];
        }
    }

    document.getElementById("result-2").innerHTML = result;
}

//task 3

function largestNumber() {

    let numbers = document.getElementById("input-3");
    numbers = numbers.value.split(",").map(Number);

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > result) {
            result = numbers[i];
        }
    }

    document.getElementById("result-3").innerHTML = `The Largest Number Is '${result}'`;
}

// task 4

function capitalizeFirstLetter() {

    let text = document.getElementById("input-4").value;

    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (i === 0 || text[i - 1] === " ") {
            result += text[i].toUpperCase();
        } else {
            result += text[i];
        }
    }

    document.getElementById("result-4").innerHTML = result;
}

// task 5

function average() {

    let numbers = document.getElementById("input-5");
    numbers = numbers.value.split(",").map(Number);

    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    let result = sum / numbers.length;

    document.getElementById("result-5").innerHTML = `The Average Is '${result}'`;
}

// task 6

function palindrome() {

    let text = document.getElementById("input-6").value;

    let cleanedValue = text.toLowerCase();

    let reversedValue = cleanedValue.split("").reverse().join("");
    let result = "";
    if (cleanedValue === reversedValue) {
        result = `'${text}' Is Palindrome`
    } else {
        result = `'${text}' Is Not Palindrome`
    }

    document.getElementById("result-6").innerHTML = result;
}

// task 7

function sortText() {

    let values = document.getElementById("input-7");
    values = values.value.split(",");

    let result = values.sort();

    document.getElementById("result-7").innerHTML = result;
}

//task 8

function primeNumbers() {

    let number = document.getElementById("input-8").value;
    number = Number(number);

    let result = ""

    let isPrime = true;
    if (number < 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime === true) {
        result = `'${number}' Is A Prime Number`
    } else {
        result = `'${number}' Is Not A Prime Number`
    }


    document.getElementById("result-8").innerHTML = result
}

//task 9