#### Example: A Program That Converts Leva to Euro

Let's take a look at another simple program that reads from the user some amount of money in leva (an integer), converts it into Euro (by dividing it by the Euro's rate) and prints the received result. This is a program of 3 consecutive commands:

```csharp
var leva = int.Parse(Console.ReadLine());
var euro = leva / 1.95583;
Console.WriteLine(euro);
```

We examined **three examples of computer programs**: a single command, series of commands in a loop and 3 consecutive commands. Now let's get to the more interesting part: how we can write our own programs in **C#** and how we can compile them and run them.
