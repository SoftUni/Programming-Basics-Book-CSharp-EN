### Problem: еднакви думи

Да се напише програма, която **въвежда две думи** и проверява дали са еднакви. Да не се прави разлика между главни и малки букви. Да се изведе “**yes**” или “**no**”. 

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| Hello<br>Hello | yes |
| SoftUni<br>softuni | yes |
| Soft<br>Uni | no |
| beer<br>vodka | no |
| HeLlO<br>hELLo | yes |

#### Hints and Guidelines

Преди сравняване на думите, ги обърнете в долен регистър, за да не оказва влияние размера на буквите (главни/малки): **`word = word.ToLower()`**.

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/506#10](https://judge.softuni.bg/Contests/Practice/Index/506#10).