// Провести ассимптотический анализ для каждой функции.
// Написать time complexity  и space complexity

// 1) function test1(n)
//  {
//     if (n==1) 
//        return;
//     for (i=1; i<=n; i++)
//         for (j=n; j>=1; j--)
//             console.out("*");
//          break;
// }
//     time complexity O (nˆ2)
//     space complexity O(1)



// 2) function test2( n)
// {
//     let a = 0;
// for (i = 0; i < n; i++)
//     for (j = n; j > i; j--)
//         a = a + i + j;
// }
//  time complexity O (nˆ2)
//  space complexity O(1)



// 3) function test3( n)
// {
//     let i, j, a = 0;
// for (i = n/2; i <=n; i++)
//     for (j = 2; j <=n; j=j*2)
//         a=a+n/2;
// }
// time complexity O(n^2)
// space complexity O(1)



// Реализовать алгоритм бинарного поиска поиска заданного ключа в отсортированном массиве.

// Сам алгоритм (+ разбирали на уроке, функция test11):
// 1) Проверяем, что в массиве хотя бы один елемент, если нет, возвращаем -1
// 2)Берём элемент из середины массива
// 2) Сравниваем его с искомым (key)
// 3) Если ключ больше, чем найденный элемент, то повторяем процедуру для правой половины массива
//  Если ключ меньше, чем найденный элемент, то повторяем процедуру для левой половины массива

// const sortedArr = [1, 5, 8, 10, 14, 16, 17, 18, 19], key = 17
// first iteration 
// arr.length = 9
// arr[5] = 16
// if 16 < 17 =>  search in right subarray
// if 16 > 17 => search in left subarray
// if 16 == 17 => return 5


// second iteration
//  [16, 17, 18, 19] (length = 4, previous index = 56)
// arr[6] - 17 (6 = 3 + 3 = 6/2 + 3)
// if 17( (arr[6]) < 17 (key) => search in the right
// if 17 (arr[6]) > 17 (key) => search in the left
// if 17 (arr[6])== 17 (key) => return 6

// function searchBinary (arr, key){
//     if(arr.lenght > 0){

//     }
// }
// тут была сложность с функцией 