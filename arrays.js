//*11.8. Составить программу вывода на экран любого элемента массива по его индексу.

const arr = [1, 2, '1', '2', {key: 'value'}, [1,2,3]];
function elementArray (array){
    console.log(arr[5]);//вывод любого элемента массива
}
elementArray(arr)

function valueKey (array){
    console.log(arr[4].key);//вывод значения ключа объекта из массива
}
valueKey(arr) 