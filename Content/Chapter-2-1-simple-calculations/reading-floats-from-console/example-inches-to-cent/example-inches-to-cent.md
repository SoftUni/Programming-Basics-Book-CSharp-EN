### Example: прехвърляне от инчове в сантиметри

Да напишем програма, която чете дробно число в инчове и го обръща в сантиметри:

```csharp
Console.Write("Inches = ");              
var inches = double.Parse(Console.ReadLine());
var centimeters = inches * 2.54;
Console.Write("Centimeters = ");
Console.WriteLine(centimeters);
```

Да стартираме програмата и да се уверим, че при подаване на стойност в инчове, получаваме коректен резултат в сантиметри:

![](/assets/chapter-2-images/00.Inches-to-centimeters-01.jpg)

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/504#1](https://judge.softuni.bg/Contests/Practice/Index/504#1).
