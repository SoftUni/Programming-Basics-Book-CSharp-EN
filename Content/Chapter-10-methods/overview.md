# Chapter 10. Methods

In the current chapter we get familiar with **methods** and learn what they **are**, and which are the **base concepts** when working with them. We will also learn why it is a **good practice** to use them, how to **declare** and **call** them. We will look at **parameters** and **return value of a method**, and also understand how to use the returned value. At the end of the chapter we will look at **the established practices** when using methods.

## Introduction by Examples

**Methods** allow invoking a parameterized **named piece of code** several times from many places in the code. Example:

```csharp
static void PrintLetter(char letter, int count)
{
    for (int i = 0; i < count; i++)
        Console.Write(letter + " ");
    Console.WriteLine();
}

static void Main()
{
    int count = 0;
    for (char letter = 'a'; letter <= 'd'; letter++)
        PrintLetter(letter, ++count);
    for (char letter = 'c'; letter >= 'a'; letter--)
        PrintLetter(letter, --count);
}
```

Run the above code example: [https://repl.it/@nakov/triangle-of-letters-csharp](https://repl.it/@nakov/triangle-of-letters-csharp).

The above code produces the following **output**:

```
a
b b
c c c
d d d d
c c c
b b
a
```

The above **method** \(named piece of code\) `PrintLetter(letter, count)` prints given character \(`letter`\) several times \(`count`\). It is invoked several times in two loops from the program `Main()` method.

Let's get into details how methods are **defined**, how methods are **invoked**, how methods accept **parameters** \(input values\) and how methods return **results** \(output values\).

Methods can take parameters and can **return values**, e.g.

```csharp
static double CalcCircleArea(double radius)
{
    return Math.PI * radius * radius;
}

static void Main()
{
    Console.WriteLine("r = {0}, area = {1}", 5, CalcCircleArea(5));
    Console.WriteLine("r = {0}, area = {1}", 2.8, CalcCircleArea(2.8));
}
```

Run the above code example: [https://repl.it/@nakov/circle-area-methods-csharp](https://repl.it/@nakov/circle-area-methods-csharp).

The output from the above code is like this:

```
r = 5, area = 78.5398163397448
r = 2.8, area = 24.630086404144
```

Let's get into details on how to **define, invoke and use methods** in C\#, how to take and pass **parameters** and to **return values**.
