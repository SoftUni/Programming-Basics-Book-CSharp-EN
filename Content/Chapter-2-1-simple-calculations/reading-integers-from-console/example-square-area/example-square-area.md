### Example: calculating a square area with side **а**

For example, let us look at the following program, which reads an integer from the console, multiplies it by itself (squares it) and prints the result from the multiplication. This way we can calculate the square area by the given length of the side:

```csharp
Console.Write("a = ");              
var a = int.Parse(Console.ReadLine());
var area = a * a;
Console.Write("Square area = ");
Console.WriteLine(area);
```

Here is how the program would work when we have a square with a side length equal to 3:

![](/assets/chapter-2-images/00.Square-area-01.jpg)

Try to write a wrong number, for example "**hello**". You will receive an error message during runtime (exception). This is normal. Later on, we will find out how we can catch this kinds of errors and make the user enter a number again. 

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/504#0](https://judge.softuni.bg/Contests/Practice/Index/504#0).