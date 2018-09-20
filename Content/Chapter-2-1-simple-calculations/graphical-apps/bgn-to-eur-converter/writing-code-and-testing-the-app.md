#### Писане на програмния код и тестване на приложението


Ще използваме следния **C# код** за обработка на събитията:

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

Всички прихванати събития извикват метода **`ConvertCurrency()`**, който конвертира зададената сума от лева в евро и показва резултата в зелената кутийка.

Трябва да напишем **кода** (програмната логика) за конвертиране от лева към евро: 

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

Накрая **стартираме проекта** с [**Ctrl+F5**] и тестваме дали работи коректно.

Ако имате проблеми с примера по-горе, **гледайте видеото** в началото на тази глава. Там приложението е направено на живо стъпка по стъпка с много обяснения. Или питайте във **форума на SoftUni**: https://softuni.bg/forum.