# Chapter 6.1. Nested Loops

In the current chapter we will be looking at **nested loops** and how to use `for` loops to **draw** various **figures on the console**, that contain symbols and signs, ordered in rows and columns on the console. We will use **single** and **nested loops** (loops that stay in other loops), **calculations** and **checks**, in order to print on the console simple and not so simple figures by specified sizes.

## Video: Chapter Overview

Watch a video lesson to learn what we will learn in this chapter: [https://youtu.be/sbmhyr1Yz7U](https://youtu.be/sbmhyr1Yz7U).

## Introduction to Nested Loops by Examples

In programming **loops can be nested**, which means that in a loop we can put another loop. This is an example of **nested for-loops**, which are used to draw a square of `n` rows, each holding `n` times the chars `=-`:

```csharp
int n = int.Parse(Console.ReadLine());
for (int row = 1; row <= n; row++)
{
    for (int col = 1; col <= n; col++)
    {
        Console.Write("=-");
    }
    Console.WriteLine();
}
```

Run the above code example: [https://repl.it/@nakov/nested-for-loops-draw-square-csharp](https://repl.it/@nakov/nested-for-loops-draw-square-csharp).

If we run the above code and enter `5` as input, the **output** will be as follows:

```
5
=-=-=-=-=-
=-=-=-=-=-
=-=-=-=-=-
=-=-=-=-=-
=-=-=-=-=-
```

Using a combination of **calculations**, **conditional statements** and **nested loops**, we can implement **more complex logic**. For example, we can draw a **rhombus of stars** as follows:

```csharp
int n = 10;
for (int row = 1; row < n; row++)
{
    var spaces = Math.Abs(n / 2 - row);
    var stars = n/2 - spaces;
    for (int col = 1; col <= spaces; col++)
        Console.Write(" ");
    for (int col = 1; col <= stars; col++)
        Console.Write("* ");
    Console.WriteLine();
}
```

Run the above code example: [https://repl.it/@nakov/nested-for-loops-draw-rhombus-csharp](https://repl.it/@nakov/nested-for-loops-draw-rhombus-csharp).

The above code will print on the console the following **output**:

```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```

Let's explain in greater detail how to use **nested loops** to implement more complex logic in our C\# programs.
