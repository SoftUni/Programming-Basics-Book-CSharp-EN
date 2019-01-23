## Installing Turtle Graphics NuGet Package

Install the **NuGet** package **"Nakov.TurtleGraphics"** to your new Windows Forms project. From Visual Studio you can add **external libraries** (packages) to an existing C# project. They add up additional functionality to our applications. The official repository for C# libraries is maintained by Microsoft and is called **NuGet** ([http://www.nuget.org/](http://www.nuget.org)).

Right-click the **Solution Explorer** project and select [**Manage NuGet Packages…**]:
 
![](/assets/chapter-5-images/13.Turtle-graphics-03.png)

A **NuGet** package search and installation window will open. Let's search for packages by keyword **`nakov`**. A few packages will be found. Select **`Nakov.TurtleGraphics`**. Click [**Install**] to install it to your C# project:
 
![](/assets/chapter-5-images/13.Turtle-graphics-04.png)

The external library **`Nakov.TurtleGraphics`** is already included in our C# project. It defines **`Turtle`** class that represents **a drawing turtle**. In order to use it, add (**`Form1.cs`**) in the C# code for our form. Add the following code at the top of the file:
  
![](assets/chapter-5-images/13.Turtle-graphics-05.png)
