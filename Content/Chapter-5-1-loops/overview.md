# Chapter 5.1. Loops \(Repetitions\)

In the present chapter we will get familiar how to **repeat blocks of commands**, also known in software development as "**loops**". We will write a number of **loops** using the `for` operator in its simplest form. Finally, we will solve series of practical problems that require repeating of series of actions, using loops.

## Video

Watch a video lesson on this chapter here: [https://www.youtube.com/watch?v=Xjwjk9yS4uw](https://www.youtube.com/watch?v=Xjwjk9yS4uw).

## Introduction by Examples

In programming we can **execute a block of code multiple times** using a simple **for-loop** like this:

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```

The above code prints the numbers 0, 1, ..., 4. The output is as follows:

```
0
1
2
3
4
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

The output from the above example may look like this \(when we enter 3 numbers: `10`, `20` and `30`\):

```
3
10
20
30
Sum = 60
```

Let's explain in greater detail how to use **simple for loops** to repeat blocks of code multiple times in C\#.

