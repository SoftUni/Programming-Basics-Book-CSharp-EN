# Chapter 7.1. More Complex Loops

Once we have learned what loops are and what **the `for` loops** serve for, now is the time to take a look at **other types of loops** as well as some **more complex loops constructions**. They will expand our knowledge and help us solve difficult and challenging problems. In particular, we will discuss how to use the following program constructions:

  * loops **with step**
  * **`while`** loops
  * **`do-while`** loops
  * **infinite** loops

In the current chapter, we will also understand what the **`break`** operator is and **how** to **break** a loop. Also, using the **`try-catch`** construction, we will learn to keep track of **errors** during our program's execution.

## Video

Watch a video lesson on this chapter here: https://www.youtube.com/watch?v=IovQ8OTnYuQ.

## Introduction by Example

**Loops** repeat a piece of code many times while a condition holds and usually changes the so called "loop variable" after each iteration. Example of a `for` loop from 10 down to 0, using a **step -2**:

```csharp
for (int i = 10; i >= 0; i-=2)
    Console.Write(i + " ");
// Output: 10 8 6 4 2 0
```

Another example is a `do-while` loop, that calculates the minimum number **k**, such that 2<sup>**k**</sup> > 1,000,000,000:

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

Let's get into details on how to use `for` loops with a step, how to use `while` loops, how to use `do-while` loops and how to design a program logic, based on infinite loops with a `break`.
