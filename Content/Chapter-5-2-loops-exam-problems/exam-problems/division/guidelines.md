### Hints and Guidelines

For the current and the next task you will need to write by yourself the program code, following the given guidelines.

The program that solves the current problem is similar to the one from the **Histogram** problem, which we reviewed earlier. That's why we can start declaring the required variables:
Sample names of variables may be: **`n`** – count of numbers (that we need to read from the console) and **`divisibleBy2`**, **`divisibleBy3`**, **`divisibleBy4`** – helper variables that keeps the count of the numbers in the corresponding group.

To read and allocate each number to its corresponding group we have to rotate **`for` loop** from **`0`** to **`n`** (count of numbers). Each iteration of the loop should read and allocate **one single number**. The difference here is that a **single number can get into several groups at once**, so we have to make **three separate `if` checks for each number** – respectively check whether it is divided by 2, 3 and 4 (using **`if-else`** statement in this case will not work, because after finding a match it interrupts further checking of conditions) and increase the value of the variable that keeps the count of numbers in the corresponding group.

Finally, you need to print the received results, by following the specified format.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/511#4](https://judge.softuni.bg/Contests/Practice/Index/511#4).
