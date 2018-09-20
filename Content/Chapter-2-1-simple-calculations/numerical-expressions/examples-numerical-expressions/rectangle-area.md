### Example: лице на правоъгълник в равнината

Правоъгълник е зададен с **координатите на два от своите два срещуположни ъгъла**. Да се пресметнат **площта и периметъра** му:

<img alt="rectangleArea" src="/assets/chapter-2-images/00.Rectangle-area-01.png" width="250" height="200" />

В тази задача трябва да съобразим, че ако от по-големия `x` извадим по-малкия `x`, ще получим дължината на правоъгълника. Аналогично, ако от по-големия `y` извадим по-малкия `y`, ще получим височината на правоъгълника. Остава да умножим двете страни. Ето примерна имплементация на описаната логика:

```csharp
var x1 = double.Parse(Console.ReadLine());
var y1 = double.Parse(Console.ReadLine());
var x2 = double.Parse(Console.ReadLine());
var y2 = double.Parse(Console.ReadLine());

// Изчисляване страните на правоъгълника:
var width = Math.Max(x1, x2) - Math.Min(x1, x2);
var height = Math.Max(y1, y2) - Math.Min(y1, y2);

Console.WriteLine("Area = " + width * height);
Console.WriteLine("Perimeter = " + 2 * (width + height));
```

Използваме **`Math.Max(a, b)`**, за да намерим по-голямата измежду стойностите **`a`** и **`b`** и аналогично **`Math.Min(a, b)`** за намиране на по-малката от двете стойности.

При стартиране на програмата със стойностите от координатната система в условието, получаваме следния резултат:

![](/assets/chapter-2-images/00.Rectangle-area-02.jpg)

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/504#6](https://judge.softuni.bg/Contests/Practice/Index/504#6).