# Computer Programs – Concepts

Let's start with the **concepts of computer programming**: computer programs, algorithms, programming languages, code compilation and execution.

## What It Means "To Program"?

**To program** means to **give commands** to the computer, for example "_to play a sound_", "_to print something on the screen_" or "_to multiply two numbers_". When the commands are one after another, they are called **a computer program**. The text of computer programs is called **a program code** \(or **a source code**, or even shorter – **code**\).

Example of **command** for the computer:

```csharp
Console.WriteLine("Welcome to coding");
```

Run the above code example: [https://repl.it/@nakov/welcome-to-coding-csharp](https://repl.it/@nakov/welcome-to-coding-csharp).

When **executed**, the above command prints the following text:

```
Welcome to coding
```

## Computer Programs

**Computer programs** represent **a sequence of commands** that are written in certain **programming language**, like C\#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift, Go or another.

Example of **computer program** in C\#:

```csharp
using System;

class SquareArea
{
    public static void Main()
    {
        var size = 5;
        Console.WriteLine("Size = " + size);
        Console.WriteLine("Area = " + size * size);
    }
}
```

Run the above code example: [https://repl.it/@nakov/square-area-csharp](https://repl.it/@nakov/square-area-csharp).

The above program defines a **class `SquareArea`**, holding a **method `Main()`**, which holds a sequence of **3 commands**:

1. Declaring and assigning a **variable**: `var size = 5;`
2. Calculating and **printing** an **expression**: `Console.WriteLine("Size = " + size);`
3. Calculating and **printing** an **expression**: `Console.WriteLine("Area = " + size * size);`

The **result** \(output\) from the above program is as follows:

```
Size = 5
Area = 25
```

In order to write commands, we have to know **the syntax and the semantics of the language** which we are working with, in our case – **C\#**. This is why we are going to get familiar with the syntax and the semantics of the language C\#, and with programming generally, in the current book, by learning step by step code writing from the simpler to the more complex programming constructions.

## Algorithms

Computer programs usually execute some algorithm. **Algorithms** are a **sequence of steps**, necessary for the completion of a certain task and for gaining some expected result, something like a "recipe".

For example, if we fry eggs, we follow some recipe \(an algorithm\): we warm up the oil in a pan, break the eggs inside it, wait for them to fry and move them away from the stove.

Similarly, in programming **the computer programs execute algorithms**: a sequence of commands, necessary for the completion of a certain task. For example, to arrange a sequence of numbers in an ascending order, an algorithm is needed, e.g. find the smallest number and print it, then find the smallest number among the rest of the numbers and print it, and this is repeated until there are no more numbers left.

For convenience when creating programs, for writing programming code, for execution of programs and other operations related to programming, we need a **development environment**, for example Visual Studio.

## Programming Languages, Compilers, Interpreters and Development Environments

**A programming language** is an artificial language \(syntax for expression\), meant for **giving commands** that we want the computer to read, process and execute. Through programming languages we write sequences of commands \(**programs**\), which **define what the computer should do**. The execution of computer programs can be done with **a compiler** or with **an interpreter**.

**The compiler** translates the code from programming language to **machine code**, as for each of the constructions \(commands\) in the code it chooses a proper, previously prepared fragment of machine code and in the meantime it **checks the text of the program for errors**. Together, the compiled fragments comprise the program into a machine code, as the microprocessor of the computer expects it. After the program has been compiled, it can be executed directly from the microprocessor in cooperation with the operating system. With compiler-based programming languages **the compilation of the program** is done obligatory before its execution, and syntax errors \(wrong commands\) are found during compile time. Languages like C++, C\#, Java, Swift and Go work with a compiler.

Some programming languages do not use a compiler and are being **interpreted directly** by a specialized software called an "interpreter". **The interpreter** is "**a program for executing programs**", written in some programming language. It executes the commands in the program one after another, as it understands not only a single command and sequences of commands, but also other language constructions \(evaluations, iterations, functions, etc.\). Languages like PHP, Python and JavaScript work with an interpreter and are being executed without being compiled. Due to the absence of previous compilation, in interpreted languages **the errors are being found during the execution time**, after the program starts running, not previously.

**An environment for development** \(Integrated Development Environment – **IDE**\) is an union of traditional tools for development of software applications. In the development environment we write code, compile and execute the programs. Development environments integrate in them **a text editor** for writing code, **a programming language**, **a compiler or an interpreter** and **a runtime environment** for executing programs, **a debugger** for tracking the program and seeking out errors, **tools for user interface design** and other tools and add-ons.

**Environments for development** are convenient, because they integrate everything necessary for the development of the program, without the need to exit the environment. If we don't use an environment for development, we will have to write the code in a text editor, to compile it with a command on the console, to run it with another command on the console and to write more additional commands when needed, which is very time consuming. That is why most of the programmers use an IDE in their everyday work.

For programming with **the C\# language** the most commonly used IDE is **Visual Studio**, which is developed and distributed freely by Microsoft and can be downloaded from: [https://www.visualstudio.com/downloads/](https://www.visualstudio.com/downloads/). Alternatives of Visual Studio are **Rider** \([https://www.jetbrains.com/rider/](https://www.jetbrains.com/rider/)\) and **MonoDevelop** / **Xamarin Studio** \([http://www.monodevelop.com](http://www.monodevelop.com)\) and **SharpDevelop** \([http://www.icsharpcode.net/OpenSource/SD/](http://www.icsharpcode.net/OpenSource/SD/)\). In the current book, we are going to use the development environment Visual Studio.

## Low and High Level Languages, Runtime Environments

A program, in its essence, is a **sequence of instructions** that make the computer do a certain task. They are being entered by the programmer and **are being executed unconditionally by the machine**.

There are different kinds of **programming languages**. Via languages of the lowest level you can write **the instructions** that **manage the processor**, for example, using the "**assembler**" language. With a bit higher level languages, like **C** and **C++**, you can create an operating system, drivers for hardware management \(for example a video card driver\), web browsers, compilers, engines for graphics and games \(game engines\) and other system components and programs. With languages of even higher level, like **C\#**, **Python** and **JavaScript** you can create application programs, for example a program for reading emails or a chat program.

**Low level languages** manage the hardware directly and require a lot of effort and a large count of commands to do a single task. **Languages of higher level** require less code for a single task, but do not have a direct access to hardware. Application software is developed using such languages, for example web applications and mobile applications.

The majority of software that we use daily, like a music player, a video player, a GPS program, etc., is written with **languages for application programming** that are high level, like C\#, Java, Python, C++, JavaScript, PHP and others.

**C\# is a compiled language**, which means that we write commands that are being compiled before they're being executed. Exactly these commands, through a help program \(a compiler\), are being transformed into a file, which can be executed \(executable\). To write a language like **C\#** we need a text editor or a development environment and **.NET Runtime Environment**.

**.NET Runtime Environment** represents a virtual machine, something like a computer in the computer, which can run a compiled C\# code. With the risk of going too deep into details, we have to explain that the language C\# is compiled into an intermediary .NET code and is executed from the .NET environment, which compiles this intermediary code additionally into machine instructions \(machine code\) in order to be executed by the microprocessor. .NET environment contains libraries with classes, **CSC** compiler, **CLR** \(Common Language Runtime – CLR\) and other components, which are required for working with the language C\# and run C\# programs.

**The .NET environment** is available as a free software with open source code for every modern operating system \(like Windows, Linux and Mac OS X\). It has two variations, **.NET Framework** \(the older one\) and **.NET Core** \(the newer one\), but none of that is essential when it comes to getting into programming. Let us focus on writing programs with the C\# language.

## Computer Programs – Compiling and Execution

As we have already mentioned, a program is **a sequence of commands**, otherwise said, it describes a sequence of calculations, evaluations, iterations and all kinds of similar operations, which aim to accomplish some kind of result.

A program is written in a text format, and the text of the program is called **a source code**. It gets compiled into an **executable file** \(for example `Program.cs` gets compiled to `Program.exe`\) or it is **executed directly** from the .NET environment.

The process of **compilation** of the code before its execution is used only in compiled languages like C\#, Java and C++. With **scripts and interpreted languages**, like JavaScript, Python and PHP, the source code gets executed step by step by an interpreter.

