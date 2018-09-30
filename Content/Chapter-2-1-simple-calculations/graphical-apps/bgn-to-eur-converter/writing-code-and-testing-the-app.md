#### Writing the program code and testing the application


We will use the following **C# code** for handling events:

```csharp
private void FormConverter_Load(object sender, EventArgs e)
{
  ConvertCurrency();
}

private void numericUpDownAmount_ValueChanged(object sender, EventArgs e)
{
  ConvertCurrency();
}

private void numericUpDownAmount_KeyUp(object sender, KeyEventArgs e)
{
  ConvertCurrency();
}
```

All of the caught events call out the method **`ConvertCurrency()`**, which converts the given sum from levs to euro and shows the result int the green box.

We have to wrtite the **code** (program logic) for converting from levs to euro: 

```csharp
private void ConvertCurrency()
{
  var amountBGN = this.numericUpDownAmount.Value;
  var amountEUR = amountBGN * 1.95583m;
  this.labelResult.Text = 
    amountBGN + " BGN = " + 
    Math.Round(amountEUR, 2) + " EUR";
}
```

In the end **we start the project** with [**Ctrl+F5**] and test if it works correctly.

If you have any problems with the example above, **watch the video** in the begging of this chapter. There, the application is being built live, step by step, with a lot of explanations. Or ask a question in the **forum of SoftUni**: https://softuni.bg/forum.