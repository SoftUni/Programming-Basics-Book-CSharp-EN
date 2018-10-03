### Example: greeting by name

Let us write a program that asks the user for his name and salutes him with the text "**Hello, *name***".

```csharp           
var name = Console.ReadLine();
Console.WriteLine("Hello, {0}!", name);
```

In this case **`{0}`** is replaced with the **first** given argument, which holds the variable **`name`**:

![](/assets/chapter-2-images/00.Greeting-by-name-01.jpg)

#### Testing in the Judge System

Tets your solution here: [https://judge.softuni.bg/Contests/Practice/Index/504#2](https://judge.softuni.bg/Contests/Practice/Index/504#2).

