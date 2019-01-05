#### Writing the Program Code and Testing the Application


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

All of the caught events call the method **`ConvertCurrency()`**, which converts the given sum from leva to Euro and shows the result in the green box.

We have to write the **code** (program logic) for converting from leva to Euro: 

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

Finally, **we start the project** with [**Ctrl+F5**] and test if it works correctly.

If you have any problems with the example above, **watch the video** in the beginning of this chapter. There, the application is being built live, step by step, with a lot of explanations. Or ask a question in the **SoftUni forum**: https://softuni.bg/forum.
