# Problem: Inches to Centimeters

Write a program that **reads a number from the console** \(not necessarily an integer\) and converts the number from **inches to centimeters.** For the purpose **it multiplies the inches by 2.54** \(because one inch = 2.54 centimeters\).

## Hints and Guidelines

First, we create a **new C\# console project** in the solution “**Simple-Calculations**”. We right-click the solution in the **Solution Explorer** and we choose \[**Add**\] -&gt; \[**New Project…**\]:

![](/assets/chapter-2-images/02.Inches-to-centimeters-01.png)

Select \[**Visual C\#**\] -&gt; \[**Windows**\] -&gt; \[**Console Application**\] and name it “Inches-to-Centimeters”:

![](/assets/chapter-2-images/02.Inches-to-centimeters-02.png)

## Writing Program Code and Starting the Program

Next, we have to write the **program code**:

![](/assets/chapter-2-images/02.Inches-to-centimeters-03.png)

**Start the program** with \[**Ctrl+F5**\]:

![](/assets/chapter-2-images/02.Inches-to-centimeters-04.png)

Surprise! What is happening? The program doesn't work correctly… Actually, isn't this the previous program?  
In Visual Studio **the current active project** in a solution is marked in semi-black color and it could be changed:

![](/assets/chapter-2-images/02.Inches-to-centimeters-05.png)

## Setting Up a Startup Project

To switch the mode to **automatically go to current project**, we right-click the main solution and we choose \[**Set StartUp Projects…**\]:

![](/assets/chapter-2-images/02.Inches-to-centimeters-06.png)

A dialog window will open, and you will have to choose \[**Startup Project**\] -&gt; \[**Current Selection**\]:

![](/assets/chapter-2-images/02.Inches-to-centimeters-07.png)

And again, **we run the program**, as usual with \[**Ctrl+F5**\]. This time it will start **the current open program**, which converts inches to centimeters. It looks like it works correctly:

![](/assets/chapter-2-images/02.Inches-to-centimeters-08.png)

## Switching Between Programs

Now **let's switch to the previous program** \(square area\). This happens with a double click on the file `Program.cs` from the previous project **“Square-Area”** in the panel \[**Solution Explorer**\] in Visual Studio:

![](/assets/chapter-2-images/02.Inches-to-centimeters-12.png)

We press again \[**Ctrl+F5**\]. This time the other project should start:

![](/assets/chapter-2-images/02.Inches-to-centimeters-11.png)

We switch back to the **“Inches-to-Centimeters”** project and start it with \[**Ctrl+F5**\]:

![](/assets/chapter-2-images/02.Inches-to-centimeters-09.png)

**Switching between projects** is very easy, isn't it? Just choose the file with the source code of the program, double click it and when it starts, the program from the current file is being executed.

## Testing a Program Locally

Let's test with floating point numbers, for example with **2.5**:

![](/assets/chapter-2-images/02.Inches-to-centimeters-10.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Depending on the regional settings of the operation system, it is possible instead of using a <b>decimal point </b> (US settings), to use a <b>decimal comma</b> (BG settings).</td>
</tr></table>

If the program expects a decimal point and instead a number with a decimal comma you enter the opposite (to enter a decimal point, when a decimal comma is expected), the following error will be produced:

![](/assets/chapter-2-images/02.Inches-to-centimeters-13.png)

It is recommended to **change the settings of your computer** to use a **decimal point**:

![](/assets/chapter-2-images/02.Inches-to-centimeters-14.png)

![](/assets/chapter-2-images/02.Inches-to-centimeters-15.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/504#1](https://judge.softuni.org/Contests/Practice/Index/504#1).

The solution should be accepted as a completely correct one:

![](/assets/chapter-2-images/02.Inches-to-centimeters-16.png)
