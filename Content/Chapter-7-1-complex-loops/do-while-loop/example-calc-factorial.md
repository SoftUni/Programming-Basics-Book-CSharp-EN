### Example: Calculate Factorial

For natural **n** calculate **n! = 1 \* 2 \* 3 \* … \* n**. For example, if **n = 5**, the result will be: **5!** = 1 \* 2 \* 3 \* 4 \* 5 = **120**.

Here's how we can specifically calculate factorial:

   * We create the variable **`n`** to which we assign an integer value taken from the console input.
   * We create another variable - a **`fact`** which initial value is 1. We will use it for the calculation and storage of the factorial.
   * For a loop condition, we will use **`n > 1`**, because each time we perform the calculations in the body of the loop, we will decrease the value of **`n`** by 1.
   * In the body of the loop:
      * We assign a new value to a **`fact`** that is the result of multiplying the current **`fact`** value to the current value of **`n`**.
      * We decrease the value of **`n`** by **-1**.
   * Outside the body of the loop, we print the final factorial value.
   
![](/assets/chapter-7-images/08.Factorial-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#7](https://judge.softuni.bg/Contests/Practice/Index/514#7).
