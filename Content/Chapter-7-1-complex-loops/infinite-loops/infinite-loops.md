# Infinite Loops with Break

So far, we have learned about different types of loops, learning what structures they have and how they are applied. We need to understand what an **infinite loop** is, when it arises, and how we can **break** it through the **`break`** operator.

## Infinite Loop – Explanation

An infinite loop we call this loop, which **repeats infinitely** the performance of its body. In **`while`** and **`do-while`** loops, the end check is a conditional expression that **always** returns **`true`**. Infinite **`for`** occurs when there is **no condition to end**.

Here is how it looks an **infinite `while`** loop:

![](/assets/chapter-7-images/00.Infinite-while-loop-01.png)

And here is how it looks an **infinite `for`** loop:

![](/assets/chapter-7-images/00.Infinite-for-loop-01.png)

## Operator Break

We already know that the infinite loop performs a certain code infinitely, but what if we want at some point under a given condition to go out of the loop? The help comes from the operator **`break`**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>The operator <b><code>break</code></b> stops the execution of the loop at the time it is called and continues from the first line after the end of the loop. This means that the current iteration of the loop will not be completed, accordingly, the rest of the code in the body of the loop will not be executed.</td>
</tr></table>

## Prime Numbers – Definition

The next problem we are going to solve is to **check for a prime number**. Before proceeding to it, let's recall what the prime numbers are.

**Definition**: An integer is **prime** if it is divisible only to itself and by 1. By definition, the prime numbers are positive and greater than 1. The smallest prime number is 2.

We can assume that an integer **n** is prime if **n > 1** and **n** is not divisible by a number between **2** and **n-1**.

The first few prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, …

Unlike these, **composite numbers** are such numbers, the composition of which is the result of the multiplication of prime numbers.

Here are some examples of composite numbers:

* **10** = 2 * 5
* **42** = 2 * 3 * 7
* **143** = 13 * 11

**Algorithm to check** if an integer is **prime**: check that **n > 1** and **n** is divisible by **2**, **3**,  …, **n-1** without reminder.
   * If it is divisible by any of the numbers, it is **composite**.
   * If it is not divisible by any of the numbers, then it is **prime**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>We can optimize the algorithm instead of checking it to <code><strong>n-1</strong></code>, to check divisors to <code><strong>√n</strong></code>. Think about why.</td>
</tr></table>

## Example: Check Prime

Check if a number **n** is prime. We will do this by checking if **n** is divided by the numbers between 2 and √n.

Here is an algorithm for checking a prime number, step by step:

   * We create the variable **`n`** to which we assign an integer taken from the console input.
   * We create an **`isPrime`** boolean variable with an initial value **`true`**. We assume that a number is prime until proven otherwise.
   * We create a **`for`** loop in which we set an initial value 2 for the loop variable, for condition **the current value `<= √n`**. The loop step is 1.
   * In **the body of the loop**, we check if **`n`**, divided by **the current value**, has a remainder. If there is **no reminder** from the division, then we change **`isPrime`** to **`false`** and we exit the loop through the **`break`** operator.
   * Depending on the value of **`isPrime`**, we print whether the number is prime (**`true`**) or composite (**`false`**).

### Implementation of the Prime Checking Algorithm

Here is a sample implementation of the algorithm described:

![](/assets/chapter-7-images/10.Check-if-prime-01.png)

It remains to add **check if the input number is greater than 1**, because by definition numbers such as 0, 1, -1 and -2 are not prime.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#9](https://judge.softuni.bg/Contests/Practice/Index/514#9).

## Example: Infinite Loop with Break

Write a program to **enter an even number**. If non-even number is entered, ask the user to **enter even number again**. This repeats many times until finally the entered number is even.

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

Note: Although the code above is correct, it will not work if the user enters **text** instead of numbers, such as "**Invalid number**". Then parsing the text to a number will break and the program will display **an error message (exception)**. How to deal with this problem and how to capture and process exceptions through **the `try-catch` construction** will be learned later.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#10](https://judge.softuni.bg/Contests/Practice/Index/514#10).
