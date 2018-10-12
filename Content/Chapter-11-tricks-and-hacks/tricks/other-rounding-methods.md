### Other Rounding Methods

In case we always want to round down instead of **`Math.Round(…)`** we can use another method - **`Math.Floor(…)`**, which always rounds down, but also always rounds to an integer. For example if we have the number 5.99 and we use **`Math.Floor(5.99)`**, we will get the number **5**.

We can also do the exact opposite - to always round up using the method **`Math.Ceiling(…)`**. Again if we have for example 5.11 and we use **`Math.Ceiling(5.11)`**, we will get 6. Here are some examples:

```csharp
var numberToFloor = 5.99;
Console.WriteLine(Math.Floor(numberToFloor));
// This will print on the console 5

var numberToCeiling = 5.11;
Console.WriteLine(Math.Ceiling(numberToCiling));
// This will print on the console 6
```