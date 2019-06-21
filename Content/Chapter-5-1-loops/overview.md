# Chapter 5.1. Loops \(Repetitions\)

In the present chapter we will get familiar how to **repeat blocks of commands**, also known in software development as "**loops**". We will write a number of **simple loops** using the `for` operator in its simplest form (`for i = 1 … n`). Finally, we will solve series of practical problems that require repeating of series of actions, using loops.

## Video: Chapter Overview

Watch a video lesson to review what will we learn in this chapter: [https://youtu.be/GIE2smfXg2g](https://youtu.be/GIE2smfXg2g).

## Introduction to Simple Loops by Examples

In programming we can **execute a block of code multiple times** using a simple **for-loop** like this:

```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}
```

Run the above code example: [https://repl.it/@nakov/for-loop-1-to-5-csharp](https://repl.it/@nakov/for-loop-1-to-5-csharp).

The above code prints the numbers 1, 2, ..., 5. The output is as follows:

```
1
2
3
4
5
```

We can **enter multiple numbers from the console** and process them using loops like this:

1. Read the **count **`n` of the numbers.
2. In a **for-loop** read and process `n` times one single number.

This is how the above idea may work:

```csharp
int n = int.Parse(Console.ReadLine());
long sum = 0;
for (int i = 0; i < n; i++)
{
    int num = int.Parse(Console.ReadLine());
    sum += num;
}
Console.WriteLine("Sum = {0}", sum);
```

Run the above code example: [https://repl.it/@nakov/for-loop-sum-n-numbers-csharp](https://repl.it/@nakov/for-loop-sum-n-numbers-csharp).

The **output** from the above example may look like this \(when we enter 3 numbers: `10`, `20` and `30`\):

```
3
10
20
30
Sum = 60
```

Let's explain in greater detail how to use **simple for loops** to repeat blocks of code multiple times in C\#.

