### Tips and Tricks

For current and next task you will need to write by yourself the program code, following the given guidelines.

The program that solves the current problem is similar with the one from **Histogram** problem, which we reviewed above. That's why we can start declaring the necessary variables:
Sample names of variables may be: **`n`** – count of numbers (that we need to read from the console) and **`divisibleBy2`**, **`divisibleBy3`**, **`divisibleBy4`** – helping variables, that keeps the count of the numbers in corresponding group.

To read and allocate each number to its corresponding group we have to rotate **`for` loop** from **`0`** to **`n`** (count of numbers). Each iteration of the loop should read and allocate **one single number**. The difference here is that a **single number can get into several groups at once**, so we have to make **three separate `if` checks for each number** – respectively whether it is divided by 2, 3 and 4 (using **`if-else`** construction in this case will not work, because after finding a match is interrupted further checking the conditions) and increase the value of the variable that keeps the count of numbers in corresponding group.

Finally you need to print the received results, by following the specified format.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/511#4](https://judge.softuni.bg/Contests/Practice/Index/511#4).
