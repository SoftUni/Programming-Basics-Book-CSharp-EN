# Chapter 2.1. Simple Calculations

In this chapter we are going to get familiar with the following concepts and programming techniques:

* What is the **system console**?
* How to **read numbers** from the system console?
* How to work with **data types and variables**, which are necessary to process numbers and the operations between them?
* How to **print** output \(a number\) on the console?
* How to do simple **arithmetic operations**: add, subtract, multiply, divide, string concatenation?

## Video

Watch a video lesson on this chapter here: [https://youtu.be/0f7c9RIZGaE](https://www.youtube.com/watch?v=0f7c9RIZGaE).

## Introduction by Examples

Computer programs can **enter data** from the **console**, perform **calculations** and **print the results** on the console. This is a simple example of C\# program that converts between foots and meters:

```csharp
Console.Write("Foots = ");              
var foots = double.Parse(Console.ReadLine());
var meters = foots * 0.3048;
Console.Write("Meters = ");
Console.WriteLine(meters);
```

The above program **enters a number** \(e.g. `5`\) and **converts** its value from **foots** to **meters**. This is a **sample output** from the above code, when the user enters `5` as input:

```
Foots = 5
Meters = 1.524
```

In C\# we can **read a text line** from the console using `Console.ReadLine()` and we can convert the text to a floating-point number using `double.Parse(text)`. We can **print text and numbers** using text formatting as follows:

```

```



