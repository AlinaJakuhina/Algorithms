// homework
// Дан массив строк. Нужно найти самый длинный общий префикс,
//  используя парадигму DivideAndConquer.

// Пример,
// arr = ["return","retard","reunion","rest"]
// prefix = "re"

// arr = ["cheer", "cheerful", "cheese"]
// prefix = "chee"

// arr = ["mirror", "nothing"]
// prefix = ""

// The longest common prefix
// arr = ['return', 'retard', 'reunion','rest']
// left = ['return', 'retard'], prefix = 'ret'
// right = ['reunion','rest'], prefix = 're'

//time complexity
// O(n), n - minimal of (word1.lenght, word2.lenght)
//
//space complexity

// function findCommonPrefixBetweenTwoWords(word1, word2) {
//     //pseudocode
//     // word1 = 'return'
//     // word2 = 'retard'

//     const minumalLenghtBetweenWords = min (word1.lenght, word2.lenght)
//     let i = 0
//     for (i < minimalLenghtBetweenWords; i++){
//         const firstWordChar = word1.charAr(i)
//         const secondWordChar = word2.charAr(i)
//         if (firstWordChar !== secondWordChar){
//             break;
//         }
//     }
// }

// word1 = "return"
// word2 = "retard"
// i = 0, firstWordChar = 'r', secondWordChar = 'r'
// i = 1, firstWordChar = 'e', secondWordChar = 'e'
// i = 2, firstWordChar = 't', secondWordChar = 't'
// i = 3, firstWordChar = 'u', secondWordChar = 'a'
// i = 4, firstWordChar = 'r', secondWordChar = 'r'

// package com.telran;

// import java.util.Arrays;

// public class DynamicArray {
//     private Integer[] arr;
//     private int count; // pointer to lhe last available index
//     private int size; // size of current array

//     public DynamicArray() {
//         arr = new Integer[1];
//         count = 0;
//         size = arr.length;
//     }

//     // add an element to the end of array
//     public void add(int element) {
//         if (count == size) {
//             increaseSizeOfArray();
//         }
//         arr[count] = element;
//         count++;
//     }

//     public void add(int element, int index) {
//         if (count == size) {
//             increaseSizeOfArray();
//         }
//         for (int i = count - 1; i >= index; i--) {
//             // shift element to the right
//             arr[i + 1] = arr[i];
//         }
//         arr[index] = element;
//         count++;
//     }

//     public void addToTheBeginning(int element) {
//         add(element, 0);
//     }

//     // removes last element from array
//     public void remove() {
//         if (count > 0) {
//             arr[count - 1] = null;
//             count--;
//         }
//     }

//     public void remove(int index) {
//         if (count > 0) {
//             // shift all elements right from index to the left by 1
//             for (int i = index; i < count - 1; i++) {
//                 arr[i] = arr[i + 1];
//             }
//             // remove last element
//             arr[count - 1] = null;
//             // decrease count
//             count--;
//         }
//     }


//     // [_], count = 0, size =1
//     // [2], count = 1, size = 1
//     // [2,3], count = 2, size = 2
//     // [2,3,4,5], count = 4, size = 4
//     private void increaseSizeOfArray() {
//         // create new array
//         Integer[] newArr = new Integer[size * 2];
//         // copy all existing elements to new array
//         for (int i = 0; i < size; i++) {
//             newArr[i] = arr[i];
//         }
//         // use new array as storage
//         arr = newArr;
//         size = newArr.length;
//     }

//     private void shrinkSize() {
//         if (count > 0) {
//             Integer[] newArr = new Integer[count];
//             for (int i = 0; i < count; i++) {
//                 newArr[i] = arr[i];
//             }
//             arr = newArr;
//             size = count;
//         }
//     }

//     public void printContent() {
//         System.out.println(Arrays.toString(arr));
//     }
// }
