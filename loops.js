//*5.1. Напечатать ряд чисел 20 в виде: 20 20 20 20 20 20 20 20 20 20
//1 вариант
function print20(){
    console.log("20");
}

for (let i = 0; i < 10; i++){
    print20();
}

//2 вариант
let n = 20

for (let i = 0; i < 10; i++){
    console.log(n);
}

//*5.2. Вывести на экран любое заданное число любое заданное число раз в виде, 
//аналогичном показанному в предыдущей задаче.

function cycles(number,amount){
    for (let i = 0; i < amount; i++){
            console.log(number);
    }
}
cycles(15,7);

//5.3. Напечатать «столбиком»:
//*а) все целые числа от 20 до 35;
function isInt(n){
    if(Number.isInteger(n)){
         console.log(n);
     }
 }

 for(let n = 20; n <= 35; n++){
     isInt(n)
    }

 //*б)квадраты всех целых чисел от a до 50 (значение a вводится
 //с клавиатуры; a ≤ 50);
function p(arg){
    console.log(arg);
}

function IsInt(number){
    return (Number.isInteger(number))
}

function squareInt(a){
    for (let i = a; i <= 50; i++){
        if (IsInt(i)==true){
            p(i*i);
        }
    }
}
squareInt(40);

//*в) кубы всех целых чисел от 10 до b (значение b вводится с клавиатуры; b ≥ 10);
function p(arg){
    console.log(arg);
}

function IsInt(number){
    return (Number.isInteger(number))
}

function cubeInt(b){
    let i = 10;
    while(i <= b){
        if(IsInt(i)==true){
            p(i ** 3);
        }
        i++;
    }
}
cubeInt(15);