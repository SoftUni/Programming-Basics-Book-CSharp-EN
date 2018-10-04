### Official C# Code Conventions

The official **C# code convention** by Microsoft is published in the "C# Coding Conventions" article in MSDN (https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions) and in this book we will guide ourselves by it.

For formatting code Microsoft recommends **curly brackets `{}`** to be on a separate row and just below the construction to which they apply, as in the example below.

```csharp
if (someCondition)
{
    Console.WriteLine("Inside the if statement");
}
```

You can see that the command **`Console.WriteLine(…)`** in the example is **offset by 4 white spaces (one tab)**, which is also reccomended by **Microsoft**. Also if a given construction with curly brackets is offset by one tab, then **the curly brackets `{}`** must be in **the begining of the construction**, as in the example below:

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

The first thing that we see is **the curly brackets `{}`**. The first (opening) bracket should be **just below the `if` condition**, and the second (closing) bracket - **below the command `Console.WriteLine(…)`, at a new and empty row**. In addition, the command inside the **`if`** construction should be **offset by 4 white spaces (one tab)**. Just after the keyword **`if`** and before the condition you should put **an interval**.

The same rule applies for **the `for` loops and all other constructinos with curly brackets `{}`**. Here are some more examples:

Right:
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```
Wrong:
```csharp
for(int i=0;i<5;i++){
Console.WriteLine(i);
}
```