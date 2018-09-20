#### Писане на програмния код

Следва да напишем действието **`ConvertCurrency()`** за конвертиране на въведената сума от лева в избраната валута:
 
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

Горният код взима **сумата** за конвертиране от полето **`numericUpDownAmount`** и **избраната валута** за резултата от полето **`comboBoxCurrency`**. След това с **условна конструкция**, според избраната валута, сумата се дели на **валутния курс** (който е фиксиран твърдо в сорс кода). Накрая се генерира текстово **съобщение с резултата** (закръглен до 2 цифри след десетичния знак) и се записва в зелената кутийка **`labelResult`**. Опитайте!

Ако имате проблеми с примера по-горе, **гледайте видеото** в началото на тази глава или питайте във **форума на SoftUni**: https://softuni.bg/forum.
