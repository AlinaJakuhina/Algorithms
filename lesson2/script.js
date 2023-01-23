// time complexity O (nˆ2)
function test1(n){
    if (n==1) 
       return;
    for ( i=1; i<=n; i++)
        for (j=1; j <= n; j++)
            console.log("*");
            break;

// test 1(3) ==> 9 operation
// n = 3

// i = 1
// i = 1, j = 1 => *
// i = 1, j = 2 => *
// i = 1, j = 3 => *
// i = 1, j = 4,  4 <= 3 => false

// i = 2
// i = 2, j = 1 => *
// i = 2, j = 2 => *
// i = 2, j = 3 => *
// i = 2, j = 4,  4 <= 3 => false

// i = 3
// i = 3, j = 1 => *
// i = 3, j = 2 => *
// i = 3, j = 3 => *
// i = 3, j = 4,  4 <= 3 => false



// time complexity O(nˆ2)
// log n
// n ˆ 2
function test2 (n) {
    for (i = n/2; i <= n; i++)
    for (j = 2; j <= n; j = j++)
    console.log("*");
}

// time complexity O(nˆ3)
function test3 (n) {
    for (i = n/2; i <= n; j = i++) // O(n)
    for (j = 2; j <= n; j += 2)   // O (n)
    for (j = 2; j <= n/2; k ++)   // O (n)
    console.log("*");
}


// time complexity O(n)
function test4 (n) {
    for (i = n/2; i <= n; i++)
    console.log ("+")
    for (j = 2; j <= n; j += 2)
    console.log("*");



// Worst case , average case, best case

function linearSearch(arr, key) {
    for ( i= 0; i < arr.lenght; i++) {
    if (arr[i] === key) {
        return i;
    }
  }
  return -1;
}

// worst case linear search - no key in array
// example arr = [7,8,134,674,652,6,245], key = 5
// O(n)

// Best case case linear search - key is the first element in array
// example arr = [7,8,134,674,652,6,245], key = 7
// O(1)

// Average case - argument are rather random
// O(n)


// EXAMPLE O(log(n)) - бинарный поиск
// [3,2,4]- impossible
function test5(sortedArr, key) {
}
// sortedArr [1, 4, 6, 9, 11, 15, 19, 21, 22, 26, 33]
// compare key with the middle of array
// log_2 8 = 3 because 2ˆ3 = 8
// n/2 => n/4 => n/8 => n/2^i => log n

// sortedArr [1, 4, 6, 9, 11, 15, 19, 21, 22, 26, 33], key = 22

// first iteration 
// arr. lenght = 11
// arr[5] = 15
// if 15 < 22 => search in right subarray
// if 15 > 22 => search in left subarray
// if 15 == 22 => return 5

// second iteration 
// [15, 19, 21, 22, 26, 33] (lenght = 6 )
// arr[8] - 22
// if 22 < 22 => search in right
// if 22 > 22 => search in left 
// if 22 == 22 => return 8





// Second half

// the gratest common divisor
// given a, b numbers
// output c - the greatest common divisor. 
// a % c == 0, b & c ==0,

// time coplexity
// O(a) + O(b)
// O(min(a,b)) - linear complexity from th smallest one
// O (n) , n = min (a,b)

// space complexity O(1)

function gcd( a, b) {
    let gcd = 1
    for (k = 2; k <= a && k <= b; k++){
        if (a % k === 0 && b % k === 0){
            gcd = i
        }
    }
    return gcd;
}


// time complexity O()
// space complexity O(1)
function gcdEuklide (a, b) {
    while( b != 0 ) {
        let tmp = a % b
        a = b 
        b = tmp
    }
    return a
}
// first
// a = 48 , b = 9 
// 48 % 9 = 3
// tmp = 3 
// a = 9
// b = 3

// second
// 3 != 0 => true
// 9 % 3 = 0
// tmp = 0 
// a = 3
// b == 0


// third 
// 0 != 0 => false
// a = 3 


//time complexity
// O(n * m)

// arr1.lenght = n
//  arr1.lenght = m
// O(n * m)
function test6 (arr1, arr2) {
    for ( i = 0 ; i < arr1.lenght; i++) {
        console.log("*")
        for(j = 0; arr2.lenght; j++) {
            console.log("y")
        }
    }
}



// RECURSION

// n! - factorial, n!=n * (n-1) * (n-2)...*1
// time complexity O(n)
// space complexity O(1)


function factorialViaIteration(n) {
    let factorial = 1
    for (i = 1; i <= n; i++) {
        factorial *= i
    }
    return factorial
}
function factorialRecursion(n) {
    if (n === 1) return 1
    else return n * factorialRecursion(n - 1)
}

let resultRecursive = factorialRecursion(5)
// factorialRecursion (5)
// 5 * factorialRecursion (4)
// 5 * 4 * factorialRecursion (3)
// 5 * 4 * 3 * factorialRecursion (2)
// 5 * 4 * 3 * 2 * factorialRecursion (1)
// 5 * 4 * 3 * 2 * 1

