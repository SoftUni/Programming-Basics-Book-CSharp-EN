### Problem: по-малко число

Да се създаде метод **`GetMin(int a, int b)`**, който връща по-малкото от две числа. Да се напише програма, която чете като входни данни от конзолата три числа и печата най-малкото от тях. Да се използва метода **`GetMin(…)`**, който е вече създаден.

#### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|1<br>2<br>3|1|-100<br>-101<br>-102|-102|

#### Hints and Guidelines

Дефинирайте метод **`GetMin(int a, int b)`** и го имплементирайте, след което го извикайте от главната програма както е показано по-долу. За да намерите минимума на три числа, намерете първо минимума на първите две от тях и след това минимума на резултата и третото число:

```csharp
var min = GetMin(GetMin(num1, num2), num3);
```

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/594#8](https://judge.softuni.bg/Contests/Practice/Index/594#8).