// 1)Реализовать алгоритм QuickSort, когда в качестве опорного элемента (pivot) мы выбираем не последний элемент в массиве, а случайный.

// def quick_sort(arr):
//     if len(arr) <= 1:
//         return arr
//     else:
//         pivot = random.choice(arr)
//         less = [x for x in arr if x < pivot]
//         greater = [x for x in arr if x > pivot]
//         equal = [x for x in arr if x == pivot]
//         return quick_sort(less) + equal + quick_sort(greater)

// Эта реализация QuickSort выбирает случайный элемент из входного массива в качестве опорного, а затем разбивает массив на три части: элементы меньше опорного, элементы, равные опорному, и элементы, превышающие опорный. Затем эти три части рекурсивно сортируются и снова объединяются, чтобы получить окончательный отсортированный массив.

// 2)
// Задачка.Дан массив строк. Нужно найти самый длинный общий префикс, используя парадигму DivideAndConquer.


// Пример, 
// arr = ["return","retard","reunion","rest"]
// prefix = "re"


// arr = ["cheer", "cheerful", "cheese"]
// prefix = "chee"


// arr = ["mirror", "nothing"]
// prefix = "" 
// для массива ["mirror", "nothing"] самый длинный общий префикс равен "".


// Разделить массив строк на две части, используя парадигму DivideAndConquer.
// Найти самый длинный общий префикс для каждой части массива.
// Найти самый длинный общий префикс для двух полученных префиксов.
// Повторить шаги 2 и 3, пока не будет найден самый длинный общий префикс для всего массива.