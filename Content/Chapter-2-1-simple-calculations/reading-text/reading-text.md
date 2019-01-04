## Reading a Text

To read a text (string) from the console, again, we have to **declare a new variable** and use the standard  **command for reading information from the console**:

```csharp
var str = Console.ReadLine();
```

Let's pay attention to the fact that when **reading text, no declaring** of a "**`string`**" (text) type is done. The reason is that by default the **`Console.ReadLine(…)`** method returns a **text result**. Additionally, you can parse the text to an integer by **`int.Parse(…)`** or a floating point number by **`double.Parse(…)`**. If this is not done, for the program **each number** will simply be **text**, and we **cannot do** arithmetic operations with it.
