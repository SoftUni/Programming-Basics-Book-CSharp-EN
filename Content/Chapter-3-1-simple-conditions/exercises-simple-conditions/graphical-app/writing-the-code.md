#### Writing the code

We have to write the event **`ConvertCurrency()`** to convert the amount of levs in the selected currency:

```csharp
private void ConvertCurrency()
{
  var originalAmount = this.numericUpDownAmount.Value;
  var convertedAmount = originalAmount;
  if (this.comboBoxCurrency.SelectedItem.ToString() == "EUR")
      {
        convertedAmount = originalAmount / 1.95583m;
      }
  else if (this.comboBoxCurrency.SelectedItem.ToString() == "USD")
      {
        convertedAmount = originalAmount / 1.80810m;
      }
  else if (this.comboBoxCurrency.SelectedItem.ToString() == "GBP")
      {
        convertedAmount = originalAmount / 2.54990m;
      }
  this.labelResult.Text = originalAmount + " лв. = " +
  Math.Round(convertedAmount, 2) + " " + this.comboBoxCurrency.SelectedItem;
}
```

The above code takes **the amount** for convert from the field **`numericUpDownAmount`** and **the selected currency** for the result from the field **`comboBoxCurrency`**. Then with a **conditional statement**, according to the selected currency, the amount is divided by **the exchange rate** (which is fixed in the source code). Finally, a text **message with the result** (rounded to second digit after the decimal point) is generated and recorded in the green box **`labelResult`**. Try it!

If you have problems with the example above, **watch the video** at the beginning of this chapter or ask in the **forum of SoftUni**: https://softuni.bg/forum.
