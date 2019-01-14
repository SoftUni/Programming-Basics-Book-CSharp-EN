# Printing Text and Numbers

In C\#, when printing a text, numbers and other data in the console, **we can join them** by using templates `{0}`, `{1}`, `{2}` etc. In programming, these templates are called **placeholders**.

```csharp
var firstName = Console.ReadLine();
var lastName = Console.ReadLine();
var age = int.Parse(Console.ReadLine());
var town = Console.ReadLine();
Console.WriteLine("You are {0} {1}, a {2}-years old person from {3}.",
  firstName, lastName, age, town);
```

Here is the **result** we are going to obtain after the execution of this example:

![](/assets/chapter-2-images/00.Placeholders-01.jpg)

Notice how every variable should be passed in the **order, in which we want it to be printed**. Practically, the template \(**placeholder**\) **accepts variables of each type**.

It is possible for a template to be used **multiple times** and it is not necessary for the templates to be numbered sequentially. Here is an **example**:

```csharp
Console.WriteLine("{1} + {1} = {0}", 1+1, 1);
```

The result is:

```
1 + 1 = 2
```

## Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/504\#3](https://judge.softuni.bg/Contests/Practice/Index/504#3).

