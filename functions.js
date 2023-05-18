//*2.4. Дана сторона квадрата. Найти его периметр.

function P(a){
    return a * 4;
}
console.log(P(2));

//*2.5. Дан радиус окружности. Найти ее диаметр.

function D(radius){
    return radius * 2;
}

//*2.7. Дана длина ребра куба. Найти объем куба и площадь его боковой поверхности.
function  V(c){
    return c ** 3;
}
console.log(V(3));

function  squareOfSideSurface(b){
    return  4 * (b ** 2);
}
//1 вариант
console.log(squareOfSideSurface(2));
//2 вариант
console.log(`Square of the cube - ${squareOfSideSurface(2)}`);

//*2.10. Даны два целых числа. Найти:
//а) их среднее арифметическое;
//б) их среднее геометрическое.

function  n(x,y){
    return  (x + y)/2;
}
console.log(n(3,5));

function  x(f,z){
    let l = f * z;
    return Math.sqrt(l);
}
console.log(x(7,8));

//*2.12. Известны количество жителей в государстве и площадь
//его территории. Определить плотность населения в этом государстве.

function  D(P,S){
    return P / S;
}
console.log(D(120,60));

//*2.15. Найти площадь кольца по заданным внешнему и внутреннему радиусам.

function  S(R,r){
    let ext = R ** 2;
    let int = r ** 2;
    return Math.PI * (ext - int);
}
console.log(S(12,6));

//*2.22. Даны два числа. Найти среднее арифметическое и сред-
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

//*2.31. Известна стоимость 1 кг конфет, печенья и яблок. 
//Найти стоимость всей покупки, если купили x кг конфет, у кг печенья и z кг яблок.

const candiesPrice = 10;
const cookiesPrice = 20;
const appliesPrice = 30;
function totalPrice (x,y,z){
    return totalPrice =  (x * candiesPrice) + (y * cookiesPrice) + (z * appliesPrice)
}
console.log (totalPrice (1,2,3));
