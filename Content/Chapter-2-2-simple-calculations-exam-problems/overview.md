# Chapter 2.2. Simple Calculations – Exam Problems

In the previous chapter, we explained how to work with the system console – how to **read numbers** from it and how to **print the output**. We went through the main arithmetical operations and briefly mentioned data types. Now, we are going to practice what we have learned by solving a few **more complex exam problems**.

## Simple Calculations – Quick Review

Before jumping into the practical problems, let's first make a **quick review** of what we learned in the previous chapter.

## Reading Numbers from the Console

Before going to the tasks, we are going to revise the most important aspects of what we have studied in the previous chapter. We will start by reading numbers from the console.

### Reading an Integer

We need to create a variable to store the integer \(for example, `num`\) and use a standard command for reading input from the console `Console.ReadLine()`, combined with the function `int.Parse(…)` which converts string to an integer:

```csharp
var num = int.Parse(Console.ReadLine());
```

### Reading a Floating-Point Number

We read a floating-point number, the same way we read an integer one, but this time we use the function `double.Parse(…)`:

```csharp
var num = double.Parse(Console.ReadLine());
```

## Printing Text Using Placeholders

**Placeholder** is an expression which is replaced with a particular value while printing an output. The methods `Console.Write(…)` / `WriteLine(…)` supports printing a string based on a placeholder, where the first argument is the formatted string, followed by the number of arguments, equal to the number of placeholders.

```csharp
Console.WriteLine("You are {0} {1}, a {2}-years old person from {3}.",
  firstName, lastName, age, town);
```

## Arithmetic Operators

Let' s revise the main arithmetic operators for simple calculations.

### Operator +

```csharp
var result = 3 + 5; // the result is 8
```

### Operator -

```csharp
var result = 3 - 5; // the result is -2
```

### Operator \*

```csharp
var result = 3 * 5; // the result is 15
```

### Operator /

```csharp
var result = 7 / 3; // the result is 2 (integer division)
var result2 = 5 / 2.0; // the result is 2.5 (floating-point division)
```

## String Concatenation

By using the operator `+` between string variables \(or between a string and a number\), **concatenation** is being performed \(combining strings\).

```csharp
var firstName = "Ivan";
var lastName = "Ivanov";
var age = 19;
var str = firstName + " " + lastName + " is " + age + " years old";
// Ivan Ivanov is 19 years old
```

## Exam Problems

Now, after having revised how to make simple calculations and how to read and print numbers from the console, let' s go to the tasks. We will solve a few **problems from a SoftUni entrance exam:**

* [Problem: Training Lab](/Content/Chapter-2-2-simple-calculations-exam-problems/exam-problems/training-lab/training-lab.md)
* [Problem: Vegetables Market](/Content/Chapter-2-2-simple-calculations-exam-problems/exam-problems/vegetables-market/vegetables-market.md)
* [Problem: Changing Tiles](/Content/Chapter-2-2-simple-calculations-exam-problems/exam-problems/change-tiles/change-tiles.md)
* [Problem: Money](/Content/Chapter-2-2-simple-calculations-exam-problems/exam-problems/money/money.md)
* [Problem: Daily Earnings](/Content/Chapter-2-2-simple-calculations-exam-problems/exam-problems/daily-earnings/daily-earnings.md)
