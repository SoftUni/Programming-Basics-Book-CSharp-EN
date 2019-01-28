# Chapter 10. Methods

In the current chapter we get familiar with **methods** and learn what they **are**, and which are the **base concepts** when working with them. We will also learn why it is a **good practice** to use them, how to **declare** and **call** them. We will look at **parameters** and **return value of a method**, and also understand how to use the returned value. At the end of the chapter we will look at **the established practices** when using methods.

## Introduction by Example

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

The above **method** (named piece of code) `PrintLetter(letter, count)` prints given character (`letter`) several times (`count`). It is invoked several times in two loops from the program `Main()` method.

Let's get into details how methods are **defined**, how methods are **invoked**, how methods accept **parameters** (input values) and how methods return **results** (output values).
