### Example: периметър и лице на кръг 

Нека напишем програма, която при въвеждане **радиуса r** на кръг **изчислява лицето и периметъра** на кръга / окръжността.

Формули:
- Лице = π \* r \* r
- Периметър = 2 \* π \* r
- π ≈ 3.14159265358979323846…

```csharp
Console.Write("Enter circle radius. r = ");
var r = double.Parse(Console.ReadLine());
Console.WriteLine("Area = " + Math.PI * r * r); 
  // Math.PI - вградена в C# константа за π
Console.WriteLine("Perimeter = " + 2 * Math.PI * r);
```

Нека изпробваме програмата с **радиус `r = 10`**:

![](/assets/chapter-2-images/00.Circle-area-01.jpg)

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/504#5](https://judge.softuni.bg/Contests/Practice/Index/504#5).