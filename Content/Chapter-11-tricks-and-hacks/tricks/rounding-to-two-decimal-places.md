### Formatting With 2 Decimal Places

```csharp
var number = 5.432432;
Console.WriteLine(Math.Round(number, 2));
// This will print on the console "5.43"
```

**`Math.Round(…)`** takes 2 parameters:

* the first one is **the number we want to round**
* the second is the number which determines **to how much decimal places we want to round** (this should always be an integer)

If we want to round the number to **2 decimal places** and the third digit is lower than 5, as in the example above, the rounding is down, but if the third digit is equal or bigger than 5 - the rounding is up as in the example below:

```csharp
var number = 5.439;
Console.WriteLine(Math.Round(number, 2));
// This will print on the console "5.44"
```