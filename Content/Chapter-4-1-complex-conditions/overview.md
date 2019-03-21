# Chapter 4.1. More Complex Conditions

In the **current** chapter, we are going to examine the **nested conditional statements** in the **C\#** language, by which our program can contain **conditions** that contain other **nested conditional statements**. We call them **"nested"**, because **we put an **`if`** condition** into **another **`if`** condition**. We are going to examine the **more complex logical conditions** through proper examples.

## Video: Chapter Overview

Watch this video to see what you will learn in this chapter: [https://youtu.be/qvbVrKXxsu0](https://youtu.be/qvbVrKXxsu0).

## Introduction to Complex Conditions by Examples

**Conditional statements can be nested**, i.e. we can put `if-else` inside another `if-else` statement. Conditions in the `if` constructions can be complex, e.g. use **logical "AND"** or **logical "OR"**. Example:

```csharp
var a = decimal.Parse(Console.ReadLine());
var b = decimal.Parse(Console.ReadLine());
if (a > 0 && b > 0 && a <= 100 && b <= 100)
{
    if (a * b >= 5000)
        Console.WriteLine($"Large size: {a*b}");
    else if (a * b > 1000 && a * b < 5000)
        Console.WriteLine($"Middle size: {a * b}");
    else
        Console.WriteLine($"Small size: {a * b}");
}
else
    Console.WriteLine($"Invalid size (a={a}, b={b})");
```

Run the above code example: [https://repl.it/@nakov/nested-if-else-conditions-csharp](https://repl.it/@nakov/nested-if-else-conditions-csharp).

The above code performs a **series of checks** using nested `if-else` conditional statements and logical operators like `&&` \(logical **AND**\) to check the input data for the following 4 cases:

* Size out of range \(one of the sides is negative or bigger than 100\).
* Large size \(area &gt;= 5000\).
* Middle size \(1000 &lt; area &lt; 5000\)
* Small size \(area &lt;= 1000\)

Let's explain in greater detail how to use **complex and nested **`if-else`** conditions** in C\#.

