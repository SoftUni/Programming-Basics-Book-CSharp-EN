# Chapter 3.1. Simple Conditions

In this chapter, we will discuss the **conditional statements in the C\# language**, through which our program may have different effects, depending on a condition. We'll explain the syntax of conditional operators for checks \(`if` and `if-else`\) with appropriate examples and we will see in what range a variable \(its **scope**\) lives. Finally, we will go through **debugging** techniques to track the path that runs through our program during implementation.

## Video: Chapter Overview

Watch the video lesson about what we will learn in this chapter: [https://youtu.be/sstA00rIWk0](https://youtu.be/sstA00rIWk0).

## Introduction to Simple Conditions by Examples

In programming we can **check conditions** and execute different blocks of code depending on the check. This is typically performed using the `if-else` constructs:

```csharp
var size = decimal.Parse(Console.ReadLine());
if (size < 0)
    Console.WriteLine($"Negative size: {size}");
else if (size > 1000)
    Console.WriteLine($"Size too big: {size}");
else
{
    Console.WriteLine($"Size accepted: {size}");
    Console.WriteLine($"Area: {size * size}");
}
```

Run the above code example: [https://repl.it/@nakov/size-checker-if-else-csharp](https://repl.it/@nakov/size-checker-if-else-csharp).

When executed, the above code will **enter a decimal number **and will **check its value **several times. Depending on the above **conditions**, it will display different messages. Examples are shown below.

If we **enter **`-20`** as input**, the output will be as follows:

```
Negative size: -20
```

If we **enter **`150`** as input**, the output will be as follows:

```
Size accepted: 150
Area: 22500
```

If we **enter **`3200`** as input**, the output will be as follows:

```
Size too big: 3200
```

Let's explain in greater detail how to use **simple **`if-else`** conditions** in C\#.

