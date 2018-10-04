### Debugging in Visual Studio

Visual Studio gives us **a built in debugger**, thanks to which we can place **breakpoints** at places we have chosen. When it reaches a **breakpoint**, the program **stops running** and allows **step-by-step running** of the remaining rows. Debugging allows us to **get in the details of the program** and see where exactly do the errors occur and what is the reason for this.

In order to demonstrate the debugger, we will use the following program:

```csharp
static void Main(string[] args)
{
    for (int i = 0; i < 100; i++)
    {
        Console.WriteLine(i);
    }
}
```

We will place a **breakpoint** at the function **`Console.WriteLine(…)`**. For this we will need to move our cursor to the row, which prints on the console, and press [**F9**]. A **breakpoint** appears, showing where the program will **stop** running:

![](/assets/chapter-11-images/02.Debugger-01.jpg) 