# Runtime Environments, Low-Level and High-Level Languages

A program, in its essence, is a **sequence of instructions** that make the computer do a certain task. They are being entered by the programmer and **are being executed unconditionally by the machine**.

## Video: Runtime Environments and Programming Languages

Watch a video lesson about runtime environments and programming languages here: https://youtu.be/ziG5v36lSVk.

## Runtime Environments

**Runtime environments** are needed by some languages to execute the compiled programs. For example, the compiled **C\#** programs are executed by the **.NET Core** runtime environment and the compiled **Java** programs are executed by **Java JRE** runtime environment. Other languages do not need compilation, but still require a runtime environment. For example, the **Python** programs are executed by the **Python interpreter** and runtime environment and the **JavaScript** programs are executed by the **Node.js** runtime environment or by a **Web browser** \(which provides another JS runtime environment\).

## Programming Languages: Low-Level and High-Level

There are different kinds of **programming languages**. Via languages of the lowest level you can write **the instructions** that **manage the processor**, for example, using the "**assembler**" language. With a bit higher level languages, like **C** and **C++**, you can create an operating system, drivers for hardware management \(for example a video card driver\), web browsers, compilers, engines for graphics and games \(game engines\) and other system components and programs. With languages of even higher level, like **C\#**, **Python** and **JavaScript** you can create application programs, for example a program for reading emails or a chat program.

**Low level languages** manage the hardware directly and require a lot of effort and a large count of commands to do a single task. **Languages of higher level** require less code for a single task, but do not have a direct access to hardware. Application software is developed using such languages, for example web applications and mobile applications.

Most of the software that we use daily, like a music players, video players, GPS trackers, etc., are written with **languages for application programming** that are high-level, like C#, Java, Python, C++, JavaScript, PHP and others.

**C# is a compiled language**, which means that we write commands that are being compiled before they're being executed. Exactly these commands, through a help program \(a compiler\), are being transformed into a file, which can be executed \(executable\). To write a language like **C\#** we need a text editor or a development environment and **.NET Runtime Environment** \(like .NET Core\).

## **.NET Runtime Environment**

**.NET Runtime Environment** represents a virtual machine, something like a computer in the computer, which can run a compiled C\# code. With the risk of going too deep into details, we have to explain that the language C\# is compiled into an intermediary .NET code and is executed from the .NET environment, which compiles this intermediary code additionally into machine instructions \(machine code\) in order to be executed by the microprocessor. .NET environment contains libraries with classes, **CSC** compiler, **CLR** \(Common Language Runtime – CLR\) and other components, which are required for working with the language C\# and run C\# programs.

**The .NET environment** is available as a free software with open source code for every modern operating system \(like Windows, Linux and Mac OS X\). It has two variations, **.NET Framework** \(the older one\) and **.NET Core** \(the newer one\), but none of that is essential when it comes to getting into programming. Let us focus on writing programs with the C\# language.

## Compilation and Execution of C\# Programs

As we have already mentioned, a program is **a sequence of commands**, otherwise said, it describes a sequence of calculations, evaluations, iterations and all kinds of similar operations, which aim to obtain certain result.

A C\# program is written in a text format, and the text of the program is called a **source code**. It gets compiled into an **executable file** \(for example `Program.cs` gets compiled to `Program.exe`\) or it is **executed directly** from the .NET environment.![](/assets/chapter-1-images/csharp-compilation-and-execution-diagram.png)The process of **compilation** of the code before its execution is used only in compiled languages like C\#, Java and C++. With **scripts and interpreted languages**, like JavaScript, Python and PHP, the source code gets executed step by step by an interpreter.
