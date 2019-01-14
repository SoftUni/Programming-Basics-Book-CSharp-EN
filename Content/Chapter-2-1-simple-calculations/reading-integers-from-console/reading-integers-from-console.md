# Reading Integers from the Console

In order to read an **integer** \(not a float\) **number** from the console, we have to **declare a variable**, declare the **number type** and use the standard command for **reading a text line** from the system console `Console.ReadLine()` and after that **convert the text line into an integer number** using `int.Parse(text)`:

```csharp
var num = int.Parse(Console.ReadLine());
```

The above line of C\# code **reads an integer** from the first line at the console.

## Example: Calculating a Square Area Using Side A

For example, let us look at the following program, which reads an integer from the console, multiplies it by itself \(squares it\) and prints the result from the multiplication. This way we can calculate the square area by the given length of the side:

```csharp
Console.Write("a = ");              
var a = int.Parse(Console.ReadLine());
var area = a * a;
Console.Write("Square area = ");
Console.WriteLine(area);
```

Here is how the program would work when we have a square with a side length equal to 3:

![](/assets/chapter-2-images/00.Square-area-01.jpg)

Try to write a wrong number, for example "**hello**". You will receive an error message during runtime \(exception\). This is normal. Later on, we will find out how we can catch these kinds of errors and make the user enter a number again.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/504\#0](https://judge.softuni.bg/Contests/Practice/Index/504#0).

### How Does the Example Work?

The first row `Console.Write("a = ");` prints an informative message, which invites the user to enter the side of the square  **a**. After the output is printed, the cursor stays on the same row. Staying on the same row is more convenient for the user, visually. We use `Console.Write(…)`, and not `Console.WriteLine(…)` and this way the cursor stays on the same row.

The next row `var a = int.Parse(Console.ReadLine());` reads an integer from the console. Actually, it first reads a text \(string\) using `Console.ReadLine()` and after that it gets converted to an integer \(it is parsed\) using `int.Parse(…)`. The result is kept in a variable with name `a`.

The next command `var area = a * a;` keeps in a new variable `area` the result of the multiplication of `a` by `a`.

The next command `Console.Write("Square area = ");` prints the given text without going to the next line. Again, use  `Console.Write(…)`, and not `Console.WriteLine(…)`, and this way the cursor stays on the same row in order to print the calculated area of the square afterwards.

The last command `Console.WriteLine(area);` prints the calculated value of the variable  `area`.

