# Lab: GUI \(Desktop\) Application – Currency Converter

After we've done some exercises on **conditional statements \(checks\)**, now let's do something more interesting: an application with a graphical user interface \(**GUI**\) for converting currencies. We will use the knowledge from this chapter to choose from several available currencies and make calculations at different rate to the selected currency.

Now let's see how to create a graphical \(**GUI**\) app for **currency conversion**. The app will look like the picture below:

![](/assets/chapter-3-images/14.Converter-01.png)

It converts Bulgarian levs (**BGN**) to Euro (**EUR**), US Dollars (**USD**) or Great Britain Pounds (**GBP**).

## Video: Building a GUI App "Currency Converter"

Watch the video lesson about building a Windows Forms based GUI app "Currency Converter": https://youtu.be/IIkPmoXmjdg.

## Creating a New C\# Project and Adding Controls

This time we create a new **Windows Forms Application** with name “Currency-Converter”:

![](/assets/chapter-3-images/14.Converter-02.png)

**We order the following controls** in the form:

* One box for entering a number \(`NumericUpDown`\)
* One drop-down list with currencies \(`ComboBox`\)
* Text block for the result \(`Label`\) 
* Several inscriptions \(`Label`\)

We set the **sizes** and their properties to look like the picture below:

![](/assets/chapter-3-images/14.Converter-03.png)

## Configuring the UI Controls

We apply the following **settings for the UI controls**:

* **For the main form** \(`Form`\) that contains all the controls:

  * `(name)` = `FormConverter`
  * `Text` = "`Currency Converter`"
  * `Font.Size` = `12`
  * `MaximizeBox` = `False`
  * `MinimizeBox` = `False`
  * `FormBorderStyle` = `FixedSingle`

* For the **field for entering a number** \(`NumericUpDown`\):

  * `(name)` = `numericUpDownAmount`
  * `Value` = `1`
  * `Minimum` = `0`
  * `Maximum` = `1000000`
  * `TextAlign` = `Right`
  * `DecimalPlaces` = `2`

* For the **drop-down list of currencies** \(`ComboBox`\):

  * `(name)` = `comboBoxCurrency`
  * `DropDownStyle` = `DropDownList`
  * `Items` =
    * **EUR**
    * **USD**
    * **GBP**

* For the **result text block** \(`Label`\):

  * `(name)` = `labelResult`
  * `AutoSize` = `False`
  * `BackColor` = `PaleGreen`
  * `TextAlign` = `MiddleCenter`
  * `Font.Size` = `14`
  * `Font.Bold` = `True`

## Events and Event Handlers

We need to take the following **events** to write the C\# code that will be executed upon their occurrence:

* The event `ValueChanged` of numeric entry control `numericUpDownAmount`:

![](/assets/chapter-3-images/14.Converter-04.png)

* The event `Load` of the form `FormConverter`
* The event `SelectedIndexChanged` of the drop-down list for choosing the currency `comboBoxCurrency`

We will use the following **C\# code** for event handling:

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

Our task is to select the currency "**EUR**" when we start the program and change the values in the sum or currency field then calculating the result by calling the `ConvertCurrency()` method.

## Writing the Program Code

We have to write the event `ConvertCurrency()` to convert the BGN amount into the selected currency:

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
  this.labelResult.Text = originalAmount + " BGN = " +
    Math.Round(convertedAmount, 2) + " " + this.comboBoxCurrency.SelectedItem;
}
```

The above code takes **the amount** for converting the field `numericUpDownAmount` and **the selected currency** for the result from the field `comboBoxCurrency`. Then with a **conditional statement**, according to the selected currency, the amount is divided by **the exchange rate** (which is fixed in the source code). Finally, a text **message with the result** (rounded to the second digit after the decimal point) is generated and recorded in the green box `labelResult`. Try it!

If you have problems with the example above, ask for help in the SoftUni official **discussion forum** (https://www.reddit.com/r/softuni) or in the SoftUni official **Facebook page** (https://fb.com/softuni.org).
