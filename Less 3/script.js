// Task1
let num = prompt('Select your symbol and we show factorial for this number');
let i = 1;
for (j = 2; j <= num; j++) {
    i = i * j;
}
alert('Your factorial is ' + i);


// Task2
for (let i = 1000; i >= 1000 && i <= 9999; i += 3) {
    document.write(`<h5> Your number is ${i} </h5>`)
}

// Task3
let n = 1;
for (let i = 1; i <= 55; i++) {
    n += 2;
    document.write(`<h3>Your number is ${n} </h3>`)
}


// Task4
for (let n = 90; n >= 0; n -= 5) {
    document.write(`<h3>Your number is ${n} </h3>`)
}


// Task5
let n = 1;
for (let i = 1; i <= 20; i++) {
    n = n * 2;
    document.write(`<h3>Your number is ${n} </h3>`)
}

// Task6
for (let a = 2; a <= 10000; a = 2 * a - 1) {
    document.write(`<h3>Your number is ${a} </h3>`)
}

// Task7
let i;
a = -166;
for (i = (a++ << 1) + 200; i < 100; a++) {
    if (i > -100)
        document.write(`<h3>Your number is ${i} </h3>`);
    i = (a++ << 1) + 200;
}

// Task8
let a = prompt('Введіть число, яке необхідно піднести до степеня');
let b = prompt('Введіть степінь до якого потрібно піднести число');
let result = a;
for (let i = 1; i < b; i++) {
    result *= a;
}
document.write(`<h3>Your number is ${result} </h3>`)