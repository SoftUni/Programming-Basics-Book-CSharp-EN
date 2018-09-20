### Example: ден от седмицата

Нека напишем програма, която принтира **деня от седмицата** (на английски) според **въведеното число** (1 … 7) или "**Error!**", ако е подаден невалиден ден.

#### Sample Input and Output

| Input | Output |
|-----|-----|
|1<br>7<br>-1|Monday<br>Sunday<br>Error!|

#### Solution

![](/assets/chapter-4-images/09.Day-of-week-01.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><b>Добра практика</b> е на <b>първо</b> място да поставяме онези <b><code>case</code> случаи</b>, които обработват <b>най-често случилите се ситуации</b>, а <b><code>case</code> конструкциите</b>, обработващи <b>по-рядко възникващи ситуации</b>, да оставим в <b>края преди <code>default</code> конструкцията</b>. Друга <b>добра практика</b> е да <b>подреждаме <code>case</code> етикетите</b> в <b>нарастващ ред</b>, без значение дали са целочислени или символни.</td>
</tr></table>

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/508#8](https://judge.softuni.bg/Contests/Practice/Index/508#8).