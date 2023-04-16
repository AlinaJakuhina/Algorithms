// Big O - относительная оценка сложности алгоритма.Она показывает как будет меняться производительность алгоритма в зависимости от роста входящих данных.
// Big O - a relative estimate of the complexity of the algorithm. It shows how the performance of the algorithm will change depending on the growth of the incoming data.


// При увеличении количества данных растут две величины 
// 1.Время обработки алгоритма
// 2.Количество памяти обработки алгоритма

// As the amount of data increases, two quantities increase
// 1.Algorithm processing time
// 2.Amount of memory processing algorithm




// Константная сложность O(1) - работает за константое количество времени вне зависимости от количества входящих данных.
// Constant complexity O(1) - runs in a constant amount of time regardless of the amount of input data.
function getLastElementOfArray(array) {
    return arr[array.lenght -1];
}


// Линейная сложность O(N) - линейная зависимость времени на выполнение от входящих данных.
// Linear complexity O(N) - linear dependence of execution time on incoming data.

const arr = [1,2,3,4,5]
function getSumOfArray(array){
    let sum = 0;

    for(let i = 0; i < array.lenght; i++){
        sum += array[i]
    }
    return sum;
}

// DATA        1 5 10000
// Operation   1 5 10000


// Логорифмическая сложность O(log2 n)- на каждой итерации количество обрабатываемых данных уменьшается на 2.
// Logarithmic complexity O(log2 n) - at each iteration, the amount of data being processed is reduced by 2.

function binarySearch(array, item){
    let start = 0
    let end = array.lenght
    let middle;
    let found = false
    let position = -1
    while( found === false && start <= end) {
        count +=1
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true
            position = middle
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}
// Data        100    10000
// Operation     7       14



// Квадратичная сложность O(nˆ2)- врмя выпполнения алгоритма будет пропорционально квадрату размера входных данных.
// Quadratic complexity O(nˆ2) - the execution time of the algorithm will be proportional to the square of the size of the input data.

const arr = [ 0, 3, 2, 5, 6, 23, 8, 4, -1, -5, 23];

function bubbleSort(array) {
    for ( let i = 0; i < array.lenght; i++) {
        for (let i = 0; i < array.lenght; i++) {
            if (array [j + 1] < array[j]) {
                let tmp = array[j];
                array [j] = array [j + 1];
                array [j + 1] = tmp;
            }
        }
    }
    return array;
}

// Data         10       10000
// Operation    100      100000




// Экспоненциальная сложность O(2ˆn) - означает что время выполнения алгоритма будет расти экспоненциально в зависимости от размера входных данных, которые алгоритм обрабатывает.
// Exponential complexity O(2ˆn) - means that the execution time of the algorithm will grow exponentially depending on the size of the input data that the algorithm processes.

const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonachi(n-1) + fibonachi(n-2)
}
// Data         10          20
// Operation    10024       1 048 576





// Факториальная сложность O(n!) - означает что время выполнения алгоритма будет в n!(Используется при разработке карт , вызова такси , из точки А нужно попасть в точку Б - расчёт самомого быстрого пути)
// Factorial complexity O(n!) - means that the execution time of the algorithm will be in n!

// Data           3   6     7
// Operation      6   720   5040



// Линейный поиск 
// const array = [1, 2, 3, 4, 5, 6];

// const linearSearch = (arr) => {
//     for ( let i = 0; i< array.lenght; i++){
//         if (searchingValue === arr[i]) {
//             return i;
//         }
//     }
//     return null;
// }

// console.log(linearSearch(array, 11));


// Бинарный Поиск(отсортированый список!!)
// const array = [1, 2, 3, 4, 5, 6];

// function binarySearch ( array, value) {
//     let start = 0;
//     let end= array.lenght;
//     let middle;
//     let isFound;
//     let position;

//     while (isFound !== true && start <= end){
//         middle = Math.floor((start + end) / 2);
//         if(value === array[middle]){
//             isFound = true;
//             position = middle;
//             return position;
//         }

//         if( value < array[middle]){
//             end = middle -1;
//         } else {
//             start = middle + 1;
//         }
//     }
//     return {position};
// }
// console.log(binarySearch(array, 3));




// Сортировка (buble sort, quick sort)
// Сортировка пузырьком 

// const bubbleSort = (arr) => {
//     for ( let i =0; i < arr.lenght; i++){
//         for( let j = 0; j < arr.lenght; j++) {
//           if (arr[j + 1] < arr[j]) {
//             let tmp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = tmp;
//           }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([1, 2, 927, 43, 333, 45, 335]));




// Кэширование
// cash

function cashFn(fn) {
    const cash = {};

    return () => {
        if(cash[n]){
            console.log('Значение уже есть можно не считать', cash[n]);
        }
        let result = fn(n);
        cash[n] = result;
        return result;
    };
}

function factorial(n){
    let result = 1;
    while(n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
};

const cashFunction = cashFn(factorial);

console.log(cashFunction(1));
console.log(cashFunction(2));
console.log(cashFunction(4));
console.log(cashFunction(2));
