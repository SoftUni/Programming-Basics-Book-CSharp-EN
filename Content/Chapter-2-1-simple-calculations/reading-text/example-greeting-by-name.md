### Example: Greeting by Name

Let's write a program that asks the user for their name and salutes them with the text "**Hello, *name***".

```csharp           
var name = Console.ReadLine();
Console.WriteLine("Hello, {0}!", name);
```

In this case the **`{0}`** expression is replaced with the **first** passed argument, which holds the variable **`name`**:

![](/assets/chapter-2-images/00.Greeting-by-name-01.jpg)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/504#2](https://judge.softuni.bg/Contests/Practice/Index/504#2).

