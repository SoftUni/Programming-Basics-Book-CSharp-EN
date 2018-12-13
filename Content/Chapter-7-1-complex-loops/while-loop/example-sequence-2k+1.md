### Example: Sequence 2k+1

Write a program that prints all **numbers ≤ n** of the row: **1, 3, 7, 15, 31, …**, assuming that every next number = **previous number \* 2 + 1**.

Here is how we can solve the problem:

   * We create a **`num`** variable for the current number to which we assign an initial **value of 1**.
   * For a loop condition, we put **the current number <= n**.
   * In **the body of the loop**: we print the value of the current number and increase the current number by using the formula from the problem's description.

Here is a sample implementation of this idea:

![](/assets/chapter-7-images/05.Numbers-2k+1-01.png)
 
#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#4](https://judge.softuni.bg/Contests/Practice/Index/514#4).
