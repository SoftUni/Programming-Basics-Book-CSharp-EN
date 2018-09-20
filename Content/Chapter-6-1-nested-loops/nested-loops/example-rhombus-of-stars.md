### Example: ромбче от звездички

Да се напише програма, която въвежда цяло положително число **n** и печата **ромбче от звездички** с размер **n**.

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|1|<code>\*</code>|2|<code>&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;</code><br>|


| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3|<code>&nbsp;&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;\*&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;\*&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;&nbsp;</code>|4|<code>&nbsp;&nbsp;&nbsp;\*&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;\*&nbsp;\*&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*&nbsp;\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;\*&nbsp;\*&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;\*&nbsp;&nbsp;&nbsp;</code>|

#### Hints and Guidelines

За решението на тази задача е нужно да **разделим** мислено **ромба** на **две части** - **горна**, която включва **и** средния ред, и **долна**. За **разпечатването** на всяка една част ще използваме **два** отделни цикъла, като оставяме на читателя сам да намери зависимостта между **`n`** и променливите на циклите. За първия цикъл може да използваме следните насоки:

* Отпечатваме **`n-row`** интервала.
* Отпечатваме **`*`**.
* Отпечатваме **`row-1`** пъти **`*`**.

**Втората** (долна) част ще разпечатаме по **аналогичен** начин, което отново оставяме на читателя да се опита да направи сам.

![](/assets/chapter-6-images/06.Rhombus-of-stars-01.png)

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/512#5](https://judge.softuni.bg/Contests/Practice/Index/512#5).