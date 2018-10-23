### Writing the program code

The source code of the C# program is written in the section **`Main(string[] args)`**, between the opening and the closing parentheses **`{ }`**. This is the main method (action), that is being executed with the start of a C# program. This **`Main()`** method can be written two ways:

 - **`static void Main(string[] args)`** - with parameters from the command line (we are not going into details)
 - **`static void Main()`** - without parameters from the command line.

Both ways are valid, as **the second one is recomended**, because it is shorter and clearer. By default, though, when creating a console application, Visual Studio uses the first way, which we can edit manually if we want and delete the part with the parameters **`string[] args`**.

We press [**Enter**] after **the opening parentheses** **`{`** and **we start writing**. The code of the program is written **inward**, as this is a part of the convention for the text, for convenience during a review and/or debugging.

![](/assets/chapter-1-images/01.Hello-csharp-03.png)

We write the following command:

```csharp
Console.WriteLine("Hello C#");
```

Here is how our program should look in Visual Studio:

![](/assets/chapter-1-images/01.Hello-csharp-04.png)

The command **`Console.WriteLine("Hello C#")`** in the language C# means to execute a print (**`WriteLine(…)`**) on the console (**`Console`**) and to print the text message **`Hello C#`**, which we have to surround by quotation marks, in order to clear out, that this is a text. In the end of each command in the language C# the symbol **`;`** is being put and it says that the command ends in that place (it doesn't continue on the next row).

This command is very typical in programming: we say a given **object** should be found (in this case the console) and some **action** should be executed upon it (in this case it is printing something that is given inside the brackets). More technically explained, we call the method **`WriteLine(…)`** from the class **`Console`** and give as a parameter to it a text literal **`"Hello C#"`**.
