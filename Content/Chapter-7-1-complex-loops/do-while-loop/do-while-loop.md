# Do-While Loop

The next loops we will get familiar with are **`do-while`**. By structure, it resembles **`while`**, but there is a significant difference between them. It is that **`do-while`** will execute its body **at least once**. Why is this happening? In the **`do-while`** loop construction, **the condition** is always checked **after** the body, which ensures that **the first loop rotation will execute** the code and **the check for the end of the loop** will be applied to each subsequent iteration of the **`do-while`**.

![](/assets/chapter-7-images/00.Do-while-01.png)

Here is following the usual set of sample problems, the solution of which will help us better understand the **`do-while`** loops.

## Example: Calculate Factorial

For natural **n** calculate **n! = 1 \* 2 \* 3 \* … \* n**. For example, if **n = 5**, the result will be: **5!** = 1 \* 2 \* 3 \* 4 \* 5 = **120**.

Here is how we can specifically calculate factorial:

   * We create the variable **`n`** to which we assign an integer value taken from the console input.
   * We create another variable - a **`fact`** which initial value is 1. We will use it for the calculation and storage of the factorial.
   * For a loop condition, we will use **`n > 1`**, because each time we perform the calculations in the body of the loop, we will decrease the value of **`n`** by 1.
   * In the body of the loop:
      * We assign a new value to a **`fact`** that is the result of multiplying the current **`fact`** value to the current value of **`n`**.
      * We decrease the value of **`n`** by **-1**.
   * Outside the body of the loop, we print the final factorial value.
   
![](/assets/chapter-7-images/08.Factorial-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#7](https://judge.softuni.bg/Contests/Practice/Index/514#7).

## Example: Sum Digits

Sum up the digits of a **positive** integer **n**. For example, if **n = 5634**, the result will be: 5 + 6 + 3 + 4 = **18**.

We can use the following idea to solve the problem:

   * We create the variable **`n`**, to which we assign a value equal to the number entered by the user.
   * We create a second variable - **`sum`**, which initial value is 0. We will use it for the calculation and storage of the result.
   * For a loop condition, we will use **`n > 0`** because after each calculation of the result in the body of the loop, we will remove the last digit of **`n`**.
   * In the body of the loop:
       * We assign a new value of **`sum`** that is the result of the sum of the current value of **`sum`** with the last digit of **`n`**.
       * We assign a new value to **`n`**, which is the result of removing the last digit of **`n`**.
   * Outside the body of the loop, we print the final value of the sum.

![](/assets/chapter-7-images/09.Sum-digits-01.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px;" /></td>
<td><code><strong>n % 10</strong></code>: <b>returns</b> the last digit of the number <code><strong>n</strong></code>.<br>
<code><strong>n / 10</strong></code>: <b>deletes</b> the last digit of <code><strong>n</strong></code>.</td>
</tr></table>

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#8](https://judge.softuni.bg/Contests/Practice/Index/514#8).
