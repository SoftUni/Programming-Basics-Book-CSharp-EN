# Infinite Loops with Break

So far, we were introduced to various types of loops, learning what structures they have and how they are applied. Now, we need to understand what an **infinite loop** is, when it occurs, and how we can **break** it using the **`break`** operator.

## Video: Infinite Loops with Break

Watch this video lesson to learn how to use infinite loops, along with the `break` operator: https://youtu.be/rpez6b9TpdA.

## Infinite Loop – Explanation

We call an infinite loop one that **repeats infinitely** the performance of its body. In **`while`** and **`do-while`** loops the end check is a conditional expression that **always** returns **`true`**. Infinite **`for`** occurs when there is **no condition to end the loop**.

Here is what an **infinite `while`** loop looks like:

![](/assets/chapter-7-images/00.Infinite-while-loop-01.png)

And here is what an **infinite `for`** loop looks like:

![](/assets/chapter-7-images/00.Infinite-for-loop-01.png)

## Break Operator

We already know that the infinite loop performs a certain code infinitely, but what if we want at some point under a given condition to go out of the loop? The **`break`** operator comes in handy in this situation.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>The <b><code>break</code></b> operator stops the execution of a loop at the time it is called and continues from the first line after the end of the loop. This means that the current iteration of the loop will not be completed, accordingly, the rest of the code in the body of the loop will not be executed.</td>
</tr></table>

## Prime Numbers – Example

The next problem we are going to solve is to **check for a prime number**. Before proceeding to it, let's recall what prime numbers are.

**Definition**: An integer is **prime** if it is divisible only by itself and by 1. By definition, the prime numbers are positive and greater than 1. The smallest prime number is 2.

We can assume that an integer **n** is a prime number if **n > 1** and **n** is not divisible by a number between **2** and **n-1**.

The first few prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, …

Unlike these, **composite numbers** are such numbers, the composition of which is the result of the multiplication of prime numbers.

Here are some examples of composite numbers:

* **10** = 2 * 5
* **42** = 2 * 3 * 7
* **143** = 13 * 11

**Algorithm to check** if an integer is **prime**: check if **n > 1** and **n** is divisible by **2**, **3**,  …, **n-1** without reminder.
   * If it is divisible by any of the numbers, it is **composite**.
   * If it is not divisible by any of the numbers, then it is **prime**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>We can optimize the algorithm instead of checking it to <code><strong>n-1</strong></code>, to check divisors to <code><strong>√n</strong></code>. Think what is the reason for that.</td>
</tr></table>

## Example: Check for Prime Number. Break Operator

Check if a number **n** is prime. We will do this by checking if **n** is divisible by the numbers between 2 and √n.

Here is an algorithm for checking a prime number, step by step:

   * We create the variable **`n`** to which we assign an integer taken from the console input.
   * We create an **`isPrime`** bool variable with an initial value **`true`**. We assume that a number is prime until proven otherwise.
   * We create a **`for`** loop in which we set an initial value 2 for the loop variable, for condition **the current value `<= √n`**. The loop step is 1.
   * In **the body of the loop**, we check if **`n`**, divided by **the current value**, has a remainder. If there is **no reminder** from the division, then we change **`isPrime`** to **`false`** and we exit the loop through the **`break`** operator.
   * Depending on the value of **`isPrime`**, we print whether the number is prime (**`true`**) or composite (**`false`**).

### Implementation of the Prime Checking Algorithm

Here is a sample implementation of the algorithm described:

![](/assets/chapter-7-images/10.Check-if-prime-01.png)

What remains is to add a **condition that checks if the input number is greater than 1**, because by definition numbers such as 0, 1, -1 and -2 are not prime.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#9](https://judge.softuni.bg/Contests/Practice/Index/514#9).

## Example: Infinite Loop with Break

Write a program that checks if a particular number **n** is even, and if it is – to print it on the screen. An even number is one that can be divided by 2 without remainder. If an invalid number is entered, the system should ask the user to enter it again and display notification that the input number is not even.

Here is an idea how we can solve the problem:

   * We create a variable **`n`** to which we assign an initial value of **0**.
   * We create an infinite **`while`** loop and as condition we will set **`true`**.
   * In **the body of the loop**:
      * We take an integer value from the console input and assign it to **`n`**.
      * If **the number is even**, we exit the loop by **`break`**.
      * **Otherwise**, we display a message stating that **the number is not even**. The iterations continue until an even number is entered.
   * Finally, after the loop, print the even number on the screen.

### Infinite Loop with Break – Implementation

Here is an example implementation of the idea:

![](/assets/chapter-7-images/00.Break-in-infinite-loop-01.png)

Note: Although the code above is correct, it will not work if the user enters **text** instead of numbers, such as "**Invalid number**". Then parsing the text to a number will break and the program will display **an error message (exception)**. How to deal with this problem and how to capture and process exceptions using **the `try-catch` construction** will be learned later.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#10](https://judge.softuni.bg/Contests/Practice/Index/514#10).
