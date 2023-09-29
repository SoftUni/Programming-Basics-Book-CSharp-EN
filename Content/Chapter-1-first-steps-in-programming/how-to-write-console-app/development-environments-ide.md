# Development Environments \(IDE\) and Visual Studio

As it has already been said, in order to program we need an **Integrated Development Environment** \(IDE\). This is actually an editor for programs, in which we write the program code and we can compile it and run it to see the errors, fix them and start the program again.

* For programming with C\# we use **Visual Studio** IDE for Windows operating system and **MonoDevelop** or **Raider** for Linux or Mac OS X.
* If we program with Java, the environments **IntelliJ IDEA**, **Eclipse** or **NetBeans** are suitable.
* If we write in Python, we can use the **PyCharm** environment.

## Video: Installing and Running Visual Studio

Watch a video lesson about how to install and run the Visual Studio IDE: [https://youtu.be/6AhALTJEagA](https://youtu.be/6AhALTJEagA).

## Installing Visual Studio

We begin with the installation of the integrated environment **Microsoft Visual Studio **\(Community, version 2017, latest as of June 2017\). Installing later versions of Visual Studio (like Visual Studio 2019 and Visual Studio 2021) should be very similar.

The **Community** version of Visual Studio \(VS\) is distributed freely by Microsoft and can be downloaded from: [https://www.visualstudio.com/vs/community](https://www.visualstudio.com/vs/community).

![](/assets/chapter-1-images/00.visual-studio-0.png)

The installation is typical for Windows with \[**Next**\], \[**Next**\] and \[**Finish**\], but it's important to include the components for "**desktop development**" and "**ASP.NET**". It is not necessary to change the rest of the settings for the installation.

The next lines describe in detail **the steps for the installation of Visual Studio** \(version Community 2017\). After we download the installation file and start it, the following screen appears:

![](/assets/chapter-1-images/00.visual-studio-1.png)

Press the \[**Continue**\] button and you will see the screen bellow:

![](/assets/chapter-1-images/00.visual-studio-2.png)

A screen with the installation panel of Visual Studio is being loaded.

![](/assets/chapter-1-images/00.visual-studio-3.png)

Put a check mark on \[**Universal Windows Platform development**\], \[**.NET desktop development**\] and \[**ASP.NET and web development**\], then press the \[**Install**\] button. Basically, this is everything.![](/assets/chapter-1-images/00.visual-studio-4.png)The installation of Visual Studio begins, and a screen like the one bellow will appear:![](/assets/chapter-1-images/00.visual-studio-5.png)After Visual Studio is installed, an informative screen will appear. Press the \[**Launch**\] button to start it.![](/assets/chapter-1-images/00.visual-studio-6.png)Upon **starting VS** a screen appears like the one bellow. On it you can choose whether you will enter Visual Studio using a Microsoft account. For now, we choose to continue without being logged into our Microsoft account, and therefore we choose the option \[**Not now, maybe later.**\]. At a later point, if you have such an account, you may log in, and if you don't have one, and you have difficulties with its creation, you can always ask for help in the SoftUni official **discussion forum** (https://www.reddit.com/r/softuni) or in the SoftUni official **Facebook page** (https://fb.com/softuni.org).

![](/assets/chapter-1-images/00.visual-studio-7.png)

The next step is to choose **the color theme**, in which Visual Studio is visualized. The choice here lays completely on the preferences of the user and it doesn't matter which option will be chosen.

![](/assets/chapter-1-images/00.visual-studio-8.png)

Press the \[**Start Visual Studio**\] button and the main view of Visual Studio Community will be displayed:![](/assets/chapter-1-images/00.visual-studio-9.png)That's all. We are ready to work with Visual Studio.

## Older Versions of Visual Studio

You can use older versions of Visual Studio \(for example version 2015 or 2013 or even 2010 or 2005\), but **it is not recommended**, as they don't contain some of the newer options for development, and not all the examples from the book will run the same way.

## Online Development Environments

There are **alternative environments for development online** directly into your web browser. These environments are not very convenient, but if you don't have other opportunity, you can start your training with them and install Visual Studio later. Here are some useful links:

* For the language C\# the site **.NET Fiddle** allows code writing and its execution online: [https://dotnetfiddle.net](https://dotnetfiddle.net).
* For Java you can use the following online Java IDE: [https://www.compilejava.net](https://www.compilejava.net).
* For JavaScript you can write a JS code directly in the console of a given browser when you press **\[F12\]**.
* The site Repl.it provides online coding environment for multiple languages \(C\#, Java, JS, Python, C++ and many more\): [https://repl.it](https://repl.it).

## Project Solutions and Projects in Visual Studio

Before we start working with Visual Studio, it is necessary to get familiar with the concepts of a **Visual Studio Solution** and a **Visual Studio Project**, which are an inevitable part of it.

![](/assets/chapter-1-images/VS-solutions-and-projects.png)

**Visual Studio Project** represents "the **project**" we are working on. In the beginning, these will be our console applications, which we are going to learn writing with the help of the current book, the resources in it and the course Programming Basics in SoftUni. With deeper learning, time and practice, these projects will move into the direction of desktop applications, web applications and other developments. A project in VS **logically groups multiple files** constructing a given application or a component. A **C\# project** contains one or more  **C\# source files**, configuration files and other resources. In every C# source file, there is one or more **definition of types** \(classes or other definitions\). In **the classes** there are **methods** \(actions\), and they contain **a sequence of commands**. It sounds complicated, but with bigger projects a structure like this one is very convenient and allows good organization of the work files.

**Visual Studio Solution** represents a container \(a work **solution**\), in which **a few projects are logically bound**. The purpose of the binding of these VS Projects is to create an opportunity for the code from any of the projects to collaborate with the code from the rest of the VS projects, to ensure the application or the website to work correctly. When the software product or service that we develop is big, it is built as a **VS Solution**, and this Solution is split into **projects** \(VS Projects\) and inside each project there are **folders with source files**. This hierarchical organization is much more convenient with more serious projects \(let's say over 50 000 lines of code\).

For **smaller projects** VS Solutions and VS Projects are **complicating the work**, rather than helping, but you will get used to it quickly.
