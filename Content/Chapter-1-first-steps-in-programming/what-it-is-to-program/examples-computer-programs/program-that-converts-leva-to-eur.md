#### Example: a program that converts from leva to euro

Let's take a look at another simple program that reads from the user some amount of money in leva (an integer number), converts it into euro (by dividing it by the euro's rate) and prints the received result. This is a program of 3 consecutive commands:

```csharp
var leva = int.Parse(Console.ReadLine());
var euro = leva / 1.95583;
Console.WriteLine(euro);
```

We looked at **three examples of computer programs**: a single command, series of commands in a loop and 3 consecutive commands. Now let's get to the more intersting part: how can we write our own programs in **C#** and how can we compile them and run them?
