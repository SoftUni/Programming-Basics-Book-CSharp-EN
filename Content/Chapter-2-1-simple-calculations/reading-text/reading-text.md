# Reading a Text from the Console

To read a **text** \(string\) from the console, again, we have to **declare a new variable** and use the standard **command for reading a text from the console**:

```csharp
var str = Console.ReadLine();
```

By default, the `Console.ReadLine(…)` method returns a **text result** – a text line, read from the console.

* After you read a text from the console, additionally, you can **parse the text** to an integer by `int.Parse(…)` or a floating-point number by `double.Parse(…)`.
* If parsing to a number is not done, **each number** will simply be **text**, and we **cannot do** arithmetic operations with it.

## Video: Reading Text from the Console

Watch a video lesson about how to read text from the console: [https://youtu.be/0tzvEdWxZ1k](https://youtu.be/0tzvEdWxZ1k).

## Example: Greeting by Name

Let's write a program that asks the user for their **name** and salutes them with the text "**Hello, &lt;**_**name&gt;**_**!**".

```csharp
var name = Console.ReadLine();
Console.WriteLine("Hello, {0}!", name);
```

In this case the `{0}` expression is replaced with the **first** passed argument, which holds the variable `name`. If we enter "_John_", the output will be as follows:

![](/assets/chapter-2-images/00.Greeting-by-name-01.jpg)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/504\#2](https://judge.softuni.org/Contests/Practice/Index/504#2).

