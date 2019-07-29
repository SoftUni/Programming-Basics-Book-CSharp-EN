# Handling Errors: Try-Catch

The last thing we will get familiar with in this chapter is how to "capture" **wrong data** using the `try-catch` construction.

## Video: Using Try-Catch

Watch this video lesson to learn how to use the `try-catch` statement to enter a valid integer number in certain range: [https://youtu.be/0WLRjNcSh3I](https://youtu.be/0WLRjNcSh3I).

## What is Try-Catch?

The `try-catch` construction is used to **intercept and handle exceptions \(errors\)** during the program execution.

In programming, **exceptions** are a notification of an event that violates the normal operation of a program. Such exceptional events **interrupt the execution** of the program, and it is looking for something to process the situation. If it does not find it, the exception is printed on the console. If found, **the exception is processed**, and the program continues its normal execution. After a while, we'll see how this happens.

When an exception is found \(e.g. when we divide an integer by zero\), it is said that the exception was **"thrown" \(throw exception\)**.

When the exception is **handled** and a piece of program logic recovers the program execution from the problem, we say the we **"catch the exception"**.

## The Try-Catch Construction

The `try-catch` construction in C\# has different forms, but for now we will use the most basic of them:

![](/assets/chapter-7-images/00.Try...catch-01.png)

We have a piece of code \(sequence of commands\) inside the `try` block. If this code **runs normally** \(without errors\), all the commands in the `try` blocks are executed. If some of the commands in the `try` block **throw and exception** \(in case of an error\), the code execution is stopped, and the `catch` block is executed. In this case we say that we **catch** and **handle** the error \(exception\).

In the next task, we will see how to handle a situation where a user enters a non-numeric input \(for example, a `string` instead of an `int`\) by `try-catch`.

## Example: Dealing with Invalid Numbers with Try-Catch

Write a program that checks if an **n** number is even, and if it is, prints it on the screen. If an **invalid number is entered**, the program should display a notification that the entered input is not a valid number and the entering of the number has to be done again.

Here's how we can **solve the problem**:

* We create an infinite `while` loop and as a condition we set `true`.
* In the body of the loop:
  * We create a `try-catch` construction.
  * In the `try` block we write the programming logic for reading the user input, parsing it to a number, and the check for even number.
  * If it is **an even number**, we print it and go out of the loop \(with `break`\). The program is done and ends.
  * If it is **an odd number**, we print a message saying that an even number is required without leaving the loop \(because we want it to be repeated again\).
  * If we **catch an exception** when executing the `try` block, we write a message for invalid input number \(and the loop is repeated because we do not explicitly go out of it\).

### Enter Even Number – Implementation

Here is a **sample implementation** of the described idea:

![](/assets/chapter-7-images/11.Wrong-numbers-try-catch-01.png)

**Play with the above code**. Try to enter invalid numbers \(e.g. text messages\), non-integer numbers, odd numbers and even numbers.

The solution should **work in all cases**: whether we are entering integer numbers, invalid numbers \(for example, too many digits\), or non-numbered text.

The above program logic will repeat in an infinite loop the process of **entering a value until a valid even integer is entered**.

* The `int.Parse()` method will **throw an exception** in case of an invalid integer. 
* In case of a valid integer, the program will check if it is even. In this case a "_success_" message is shown, and the **loop is stopped** using `break`. 
* In case of an odd integer, an **error message** is shown, and the **loop repeats again**. 
* In case of an exception \(error during the number parsing\), an **error message** is shown, and the **loop repeats again**.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/514\#12](https://judge.softuni.org/Contests/Practice/Index/514#12).
