## Reading Numbers from the Console

Before going to the tasks, we are going to revise the most important aspects of what we have studied in the previous chapter. We will start with reading numbers from the console.

### Reading an integer

We need to create a variable to store the integer (for example, **`num`**) and use a standard command for reading input from the console, combined with the function **`int.Parse(…)`** which converts string to an integer:

```csharp
var num = int.Parse(Console.ReadLine());
```

### Reading a decimal number

We read a decimal number, the same way we read an integer one, but this time we use the function **`double.Parse(…)`**:

```csharp
var num = double.Parse(Console.ReadLine());
```