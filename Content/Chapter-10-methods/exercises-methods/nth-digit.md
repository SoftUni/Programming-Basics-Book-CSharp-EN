# Problem: N-th Digit

Create a method **`FindNthDigit(number, index)`**, which takes a number and index N as parameters and prints the N-th digit of the number (counting **from right to left** and starting from 1). After that print the result on the console.

## Sample Input and Output

| Input | Output | Input | Output | Input | Output |
| --- | --- | --- | --- | --- | --- |
|83746<br>2|4|93847837<br>6|8|2435<br>4|2|

## Hints and Guidelines

In order to do the algorithm use a **`while`** loop, until the given number equals 0. At each iteration of the **`while`** loop check if the current index of the digit is equal to the index you are looking for. If it is, return as a result the digit at this index (**`number % 10`**). If not, remove the last digit in the number (**`number = number / 10`**). You should count which digit you are checking by index (from right to left and starting from 1). When you find the number, return the index. 

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/594#10](https://judge.softuni.org/Contests/Practice/Index/594#10).
