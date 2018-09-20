### Example: число от 1 до 9 на английски

Да се изпише число в интервала от 1 до 9 с текст на английски език (числото се чете от конзолата). Можем да прочетем числото и след това чрез **серия от проверки** отпечатваме съответстващата му английска дума:

```csharp
int num = int.Parse(Console.ReadLine());

if (num == 1)
{
    Console.WriteLine("one");
}
else if (num == 2)
{
    Console.WriteLine("two");
}
else if (…) 
{
    …
} 
else if (num == 9)
{
    Console.WriteLine("nine");
} 
else 
{
    Console.WriteLine("number too big");
}
```

Програмната логика от примера по-горе **последователно сравнява** входното число от конзолата с цифрите от 1 до 9, като **всяко следващо сравнение се извършва, само в случай че предходното сравнение не е било истина**. В крайна сметка, ако никое от **`if`**  условията не е изпълнено, се изпълнява последната **`else` клаузa**.

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/506#4](https://judge.softuni.bg/Contests/Practice/Index/506#4).