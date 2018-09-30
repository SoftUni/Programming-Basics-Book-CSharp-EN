## Reading a Text

To read a text (string) from the console, again, we have to **declare a new variable** and use the standart  **command for reading information from the console**:

```csharp
var str = Console.ReadLine();
```

Let us pay attention to the fact that the **reading of  text is not declared** in any way as a type "**`string`**" (text). The reason is because by default the  **`Console.ReadLine(…)`** method returns a **text result**. Additionally, you can parse the text to an integer by **`int.Parse(…)`** or a real number by **`double.Parse(…)`**. If this is not done, for the program **every number** will be just **text**, and we **cannot do** arithmetic operations with it.