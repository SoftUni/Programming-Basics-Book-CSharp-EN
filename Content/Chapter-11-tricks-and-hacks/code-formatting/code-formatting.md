# Code Formatting

The right formatting of our code will make it **easier to read and understand** in case someone else needs to work with it. This is important, because in practice we will need to work in a team with other people and it is highly important to write our code in a way that our colleagues can **quickly understand** it.

There are some defined rules for correct formatting of the code, which are collected in one place and are called **conventions**. The conventions are a group of rules, generally accepted by the programmers using a given language, which are massively used. These conventions help building norms in given languages – what is the best way to write and what are good practices. It is accepted that if a programmer follows them then his code is easy to read and understand.

The C# language is made by **Microsoft** and they are the people who define the best practices for writing. You should know that even if you don't follow the conventions given by **Microsoft**, your code will work (as long as it is properly written), but it will not be easy to understand. This, of course, is not fatal at base level, but the faster you get used to writing quality code the better.

## The Official C# Code Conventions

The official **C# code conventions** by Microsoft are published in the "**C# Coding Conventions**" article in the .NET documentation and in this book we shall follow them: https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions.

For code formatting Microsoft recommends **curly brackets `{}`** to be on a separate line and just below the construction to which they apply, as in the example below:

```csharp
if (someCondition)
{
    Console.WriteLine("Inside the if statement");
}
```

You can see that the command **`Console.WriteLine(…)`** in the example is **offset by 4 white spaces (one tab)**, which is also recommended by **Microsoft**. If given construction with curly brackets is offset by one tab, then **the curly brackets `{}`** must be in **the beginning of the construction**, as in the example below:

```csharp
if (someCondition)
{
   if (anotherCondition)
   {
       Console.WriteLine("Inside the if statement");
   }
}
```

Below you can see an example for **badly formatted code** according to the accepted conventions for writing code in C#:
   
```csharp
if(someCondition){
Console.WriteLine("Inside the if statement");}
```

The first thing that we see is **the curly brackets `{}`**. The first (opening) bracket should be **just below the `if` condition**, and the second (closing) bracket – **below the command `Console.WriteLine(…)`, at a new and empty line**. In addition, the command inside the **`if`** construction should be **offset by 4 white spaces (one tab)**. Just after the keyword **`if`** and before the condition you should put **a space**.

The same rule applies for **the `for` loops and all other constructions with curly brackets `{}`**. Here are some more examples:

**Correct** formatting:
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```

**Wrong** formatting:
```csharp
for(int i=0;i<5;i++){
Console.WriteLine(i);
}
```

## Code Formatting Shortcuts in Visual Studio

For your comfort there are **keyboard shortcuts in Visual Studio**, which we will explain later in this chapter, but for now we are interested in 2 specific combinations. One of the combinations is for formatting **the code in the whole document**, and the other one – for formatting **a part of the code**. If we want to format **the whole code**we need to press [**CTRL + K + D**]. In case we need to format only **a part of the code**, we need to **mark this part with the mouse** and press [**CTRL + K + F**].

The screenshot below illustrates how to **format C# code in Visual Studio**, using the menu commands or keyboard schortcuts:

![](/assets/chapter-11-images/00.Code-formatting.png)

Let's use **the wrongly formatted example** from earlier:

```csharp
for(int i=0;i<5;i++){
Console.WriteLine(i);
}
```

If we press [**CTRL + K + D**], which is the combination to **format the whole document**, we will have a code, formatted according to **the accepted conventions for C#**, which will look as follows:

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```

This key combination in Visual Studio can help us if we work with a badly formatted code.
