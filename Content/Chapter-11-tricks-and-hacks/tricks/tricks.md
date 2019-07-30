# Tricks for C\# Developers

In this section we will recall some **tricks and techniques** in programming with C\#, already seen in this book, which can be very useful if you attend an exam for beginner programming.

## Inserting Variable Values in Strings

In programming we often need to **combine text with variable values** to obtain a string value, e.g.

```csharp
var text = "some text";
Console.WriteLine("{0}", text);
// This will print on the console "some text"
```

In this case we are using a **placeholder** – `{x}`, where **x** is a number \(larger than or equal to 0\), corresponding to the position on which we have placed our variable. Therefore, if we insert two variables, we will have one placeholder, which will be `{0}` and it will keep the value of **the first variable** and another one – `{1}`, which will keep the value of **the second variable**. For example:

```csharp
var text = "some text";
var number = 5;
Console.WriteLine("{0} {1} {0}", text, number);
// This will print "some text 5 some text"
```

In this example we can see that we can insert **not only text variables**. We can also use a given variable **several times** and for this we put the number which **corresponds with the position of the variable** in the placeholder. In this case on position zero is the variable `text`, and at first position is the variable `number`. At the beginning, numbering can be confusing, but you need to remember that in programming **counting starts from 0**.

## Formatting with 2 Digits After the Decimal Point

When we print numbers, we often need to round them to 2 digits after the decimal point, e.g.

```csharp
var number = 5.432432;
Console.WriteLine(Math.Round(number, 2));
// This will print on the console "5.43"
```

## Rounding Numbers

To round numbers, we may use the `Math.Round(…)` method, which takes 2 parameters:
  - the first one is **the number we want to round**
  - the second one is the number that determines **how many digits after the decimal point we want to round to** (this should always be an integer)

If we want to round the number to **2 digits after the decimal point** and the third digit is lower than 5, as in the example above, the rounding is down, but if the third digit is equal or bigger than 5 – the rounding is up as in the example below:

```csharp
var number = 5.439;
Console.WriteLine(Math.Round(number, 2));
// This will print on the console "5.44"
```

## Other Rounding Methods

In case we always want to round down instead of `Math.Round(…)` we can use another method – `Math.Floor(…)`, which always rounds down, but also always rounds to an integer. For example, if we have the number 5.99 and we use `Math.Floor(5.99)`, we will get the number **5**.

We can also do the exact opposite – to always round up using the method `Math.Ceiling(…)`. Again, if we have for example 5.11 and we use `Math.Ceiling(5.11)`, we will get 6. Here are some examples:

```csharp
var numberToFloor = 5.99;
Console.WriteLine(Math.Floor(numberToFloor));
// This will print on the console 5

var numberToCeiling = 5.11;
Console.WriteLine(Math.Ceiling(numberToCiling));
// This will print on the console 6
```

## Rounding with a Placeholder

```cs
var num = 5.432424;
Console.WriteLine("{0:f2}", num);
```

In this case after the number we add `:f2`, which will limit the number to 2 digits after the decimal point and will work like `Math.Round(…)`. You should keep in mind that the number after the letter `f` means to how many digits after the decimal point the number is rounded \(i.e. it can be `f3` or `f5`\).

## How to Write a Conditional Statement?

The conditional `if`** construction** contains the following elements:

* Keyword `if`
* **A Boolean expression** \(condition\)
* **Body** of the conditional construction
* Optional: **`else` clause**

Example:

```csharp
if (condition)
{
    // body
}
else (condition)
{
    // body
}
```

To make it easier we can use a code snippet for an **`if` construction**:

* `if`** + \[Tab\] + \[Tab\]**

## How to Write a 'For' Loop?

For a **`for` loop** we need a couple of things:

- **Initializing block**, in which the counter variable is declared (`var i`) and its initial value is set
- **Condition** for repetition (`i <= 10`)
- Loop variable (counter) **updating statement** (`i++`)
- **Body** of the loop, holding statements

```csharp
for (var i = 0; i < 5; i++;)
{
    // body
}
```

To make it easier we can use a code snippet for a `for`** loop**:

* `for`** + \[Tab\] + \[Tab\]**
