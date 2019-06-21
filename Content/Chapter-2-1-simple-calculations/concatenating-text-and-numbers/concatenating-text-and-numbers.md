# Concatenating Text and Numbers

Besides for summing up numbers, the operator `+` is also used for **joining pieces of text** \(concatenation of two strings one after another\). In programming, joining two pieces of text is called "**concatenation**". Here is how we can concatenate a text with a number by the `+` operator:

```csharp
var firstName = "Maria";
var lastName = "Ivanova";
var age = 19;
var str = firstName + " " + lastName + " @ " + age;
Console.WriteLine(str);  // Maria Ivanova @ 19
```

## Video: Concatenating Text and Numbers

Watch a video lesson about concatenating text and numbers: [https://youtu.be/vPI-V2NG\_CU](https://youtu.be/vPI-V2NG_CU).

## Examples: Concatenating Text and Numbers

Here is another **example** of concatenating text and numbers:

```csharp
var a = 1.5;
var b = 2.5;
var sum = "The sum is: " + a + b;
Console.WriteLine(sum);  // The sum is: 1.52.5
```

Did you notice **something strange**? Maybe you expected the numbers `a` and  `b` to be summed? Actually, the concatenation works from right to left and the result above is absolutely correct. If we want to sum the numbers, we have to use **brackets**, in order to change the order of execution of the operations:

```csharp
var a = 1.5;
var b = 2.5;
var sum = "The sum is: " + (a + b);
Console.WriteLine(sum);  // The sum is: 4
```
