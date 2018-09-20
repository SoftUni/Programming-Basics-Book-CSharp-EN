#### Hints and Guidelines

Първо въвеждаме числото **n**, след това първите **n** числа (**лявата** половина) и ги сумираме. Продължаваме с въвеждането на още **n** числа (**дясната** половина) и намираме и тяхната сума. Изчисляваме **разликата** между намерените суми по абсолютна стойност: **`Math.Abs(leftSum - rightSum)`**. Ако разликата е **0**, отпечатваме **"Yes" + сумата**, в противен случай - отпечатваме **"No" + разликата**.

![](/assets/chapter-5-images/07.Left-and-right-sum-01.png)

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/510#6](https://judge.softuni.bg/Contests/Practice/Index/510#6).