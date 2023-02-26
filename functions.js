//2.4. Дана сторона квадрата. Найти его периметр.

function P(a){
    return a * 4;
}
const result = P(2);
console.log(result);

//2.7. Дана длина ребра куба. Найти объем куба и площадь его боковой поверхности.

function  V(a){
    return a ** 3;
}
console.log(V(3));

function  S(a){
    return  4 * (a ** 2);
}
console.log(S(4));

//2.10. Даны два целых числа. Найти:
//а) их среднее арифметическое;
//б) их среднее геометрическое.

function  n(a,b){
    return  (a + b)/2;
}
console.log(n(3,5));

function  x(a,b){
    let c = a * b;
    return Math.sqrt(c);
}
console.log(x(7,8));

//2.12. Известны количество жителей в государстве и площадь
//его территории. Определить плотность населения в этом государстве.

function  D(P,S){
    return P / S;
}
console.log(D(120,60));

//2.15. Найти площадь кольца по заданным внешнему и внутреннему радиусам.

function  S(R,r){
    let ext = R ** 2;
    let int = r ** 2;
    return Math.PI * (ext - int);
}
console.log(S(12,6));

//2.22. Даны два числа. Найти среднее арифметическое и сред-
//нее геометрическое их модулей.

function  n(a,b){
    let ext = Math.abs(a);
    let int = Math.abs(b);
    return (ext + int)/2;
}
console.log(n(-12,6));

function  x(a,b){
    let ext = Math.abs(a);
    let int = Math.abs(b);
    let result = ext * int;
    return Math.sqrt(result);
}
console.log(x(-12,6));