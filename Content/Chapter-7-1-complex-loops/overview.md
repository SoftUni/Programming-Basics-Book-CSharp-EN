# Chapter 7.1. More Complex Loops

Once we have learned what loops are and what **the **`for`** loops** serve for, now is the time to take a look at **other types of loops** as well as some **more complex loops constructions**. They will expand our knowledge and help us solve difficult and challenging problems. In particular, we will discuss how to use the following program constructions:

* loops **with step**
* `while` loops
* `do-while` loops
* **infinite** loops

In the current chapter, we will also understand what the `break` operator is and **how** to **break** a loop. Also, using the `try-catch` construction, we will learn to keep track of **errors** during our program's execution.

## Video: Chapter Overview

Watch a video lesson to review what shall we learn in this chapter: [https://youtu.be/J18RgaaMi7U](https://youtu.be/J18RgaaMi7U).

## Introduction to More Complex Loops by Examples

**Loops** repeat a piece of code many times while a condition holds and usually changes the so called "**loop variable**" after each iteration. The loop variable using a **certain step**, e.g. 5 or -2. Example of a `for` loop from 10 down to 0, using a **step -2**:

```csharp
for (int i = 10; i >= 0; i-=2)
    Console.Write(i + " ");
// Output: 10 8 6 4 2 0
```

Run the above code example: [https://repl.it/@nakov/for-loop-step-minus-2-csharp](https://repl.it/@nakov/for-loop-step-minus-2-csharp).

One of the simplest loops in programming is the **while-loop**. It repeats a block of code while a condition is true:

```csharp
int n = 5;
int factorial = 1;
while (n > 1)
{
    factorial = factorial * n;
    n--;
}
Console.WriteLine(factorial);
// Output: 120
```

Run the above code example: [https://repl.it/@nakov/while-loop-factorial-csharp](https://repl.it/@nakov/while-loop-factorial-csharp).

Another example of loops is the `do-while`** loop**.  It repeats a code block while a condition holds. For example, we can calculate the minimum number **k**, such that $$2^k$$ &gt; 1,000,000,000, using the code below:

```csharp
int num = 1, count = 0;
do
{
    count++;
    num = num * 2;
} while (num <= 1000000000);
Console.WriteLine("2^{0} = {1}", count, num);
// Output: 2^30 = 1073741824
```

Run the above code example: [https://repl.it/@nakov/do-while-loop-power-of-2-calculation-csharp](https://repl.it/@nakov/do-while-loop-power-of-2-calculation-csharp).

Sometime in programming we don't know in advance how many times to repeat a loop, neither we have a clear loop condition, so we may use **infinite loop with exit condition** inside the loop. For example, we want to print the first 5 results, matching certain condition, calculated inside a loop. We use **infinite loop** and exit it using **the **`break`** operator**:

```csharp
int value = 0, min = 100000, count = 0;
while (true)
{
    value = 2 * value + 1;
    if (value > min)
    {
        Console.WriteLine(value);
        count++;
    }
    if (count == 5)
        break;
}
```

Run the above code example: [https://repl.it/@nakov/infinite-loop-with-break-csharp](https://repl.it/@nakov/infinite-loop-with-break-csharp).

Let's get into details on how to use `for`** loops with a step**, how to use `while`** loops**, how to use `do-while`** loops** and how to design a program logic, based on **infinite loops with a **`break`.

