# While Loop

The next type of loops that we will get familiar with are called **`while` loops**. The specific thing about them is that they repeat a block of commands **until a condition is true**. As a structure, they differ from **`for`** loops, even have a simple syntax.

## While Loop – Explanation

In programming **the `while` loop** is used when we want to **repeat** the execution of a certain logic while **a condition is in effect**. By "**condition**," we understand every **expression** that returns **`true`** or **`false`**. When **the condition** is **wrong**, **the `while` loop** is **interrupted**, the program **continues** to execute the remaining code after the loop. **The `while` loop** construction looks like this:

![](/assets/chapter-7-images/00.While-loop-01.png)

Here is a series of sample problems, the solution of which will help us to better understand the use of the **`while`** loop.

## Example: Sequence 2k+1

Write a program that prints all **numbers ≤ n** of the row: **1, 3, 7, 15, 31, …**, assuming that every next number = **previous number \* 2 + 1**.

Here is how we can solve the problem:

   * We create a **`num`** variable for the current number to which we assign an initial **value of 1**.
   * For a loop condition, we put **the current number <= n**.
   * In **the body of the loop**: we print the value of the current number and increase the current number by using the formula from the problem's description.

Here is a sample implementation of this idea:

![](/assets/chapter-7-images/05.Numbers-2k+1-01.png)
 
### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#4](https://judge.softuni.bg/Contests/Practice/Index/514#4).

## Example: Number in Range [1 … 100]

Enter an integer in the range [**1 … 100**]. If the entered number is invalid, enter it again. In this case, an invalid number will be any one that **is not** within the specified range.

To solve the problem, we can use the following algorithm:

   * We create a **`num`** variable to which we assign the integer value obtained from the console input.
   * For a loop condition, we put an expression that is **`true`** if the number of the input **is not** in the range specified in the problem's description.
   * In **the body of the loop**: we print a message with "**Invalid number!**" on the console, then assign a new value to **`num`** from the console input.
   * Once we have validated the entered number, we print the value of the number outside the body of the loop.

Here's a sample implementation of the algorithm using **`while` loop**:

![](/assets/chapter-7-images/06.Numbers-in-range-1..100-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#5](https://judge.softuni.bg/Contests/Practice/Index/514#5).
