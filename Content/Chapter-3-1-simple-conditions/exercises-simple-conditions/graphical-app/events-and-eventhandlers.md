#### Events and Event Handlers

We need to take the following **events** to write the C# code that will be executed upon their occurrence:

* The Event **`ValueChanged`** of numeric entry control **`numericUpDownAmount`**:

![](/assets/chapter-3-images/14.Converter-04.png)

* The event **`Load`** of the form **`FormConverter`**
* The event **`SelectedIndexChanged`** of the drop-down list for choosing the currency **`comboBoxCurrency`**
  
We will use the following **C# code** for event handling:

```csharp
private void FormConverter_Load(object sender, EventArgs e)
{
  this.comboBoxCurrency.SelectedItem = "EUR";
}
        
private void numericUpDownAmount_ValueChanged(object sender, EventArgs e)
{
  ConvertCurrency();
}
        
private void comboBoxCurrency_SelectedIndexChanged(object sender, EventArgs e)
{
  ConvertCurrency();
}
```

Our task is to select the currency "**EUR**" when we start the program and change the values in the sum or currency field then calculating the result by calling the **`ConvertCurrency()`** method.
