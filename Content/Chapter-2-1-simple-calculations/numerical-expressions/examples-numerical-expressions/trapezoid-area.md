### Example: изчисляване на лице на трапец

Да напишем програма, която въвежда дължините на двете основи на трапец и неговата височина (по едно дробно число на ред) и пресмята **лицето на трапеца** по стандартната математическа формула:

```csharp
var b1 = double.Parse(Console.ReadLine());
var b2 = double.Parse(Console.ReadLine());
var h = double.Parse(Console.ReadLine());
var area = (b1 + b2) * h / 2.0;
Console.WriteLine("Trapezoid area = " + area);
```

Ако стартираме програмата и въведем за страните съответно `3`, `4` и `5`, ще получим следния резултат:
```
3
4
5
Trapezoid area = 17.5
```

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/504#4](https://judge.softuni.bg/Contests/Practice/Index/504#4).