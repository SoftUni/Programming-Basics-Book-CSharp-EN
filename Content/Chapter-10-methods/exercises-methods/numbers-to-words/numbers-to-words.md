### Problem: числа към думи

Да се напише метод **`Letterize(number)`**, който прочита цяло число и го разпечатва с думи на английски език според условията по-долу:
* Да се отпечатат с думи стотиците, десетиците и единиците (и евентуални минус) според правилата на английския език.
* Ако числото е по-голямо от **999**, трябва да се принтира "**too large**".
* Ако числото е по-малко от **-999**, трябва да се принтира "**too small**".
* Ако числото е **отрицателно**, трябва да се принтира "**minus**" преди него.
* Ако числото не е съставено от три цифри, не трябва да се принтира.

#### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3<br>999<br>-420<br>1020|nine-hundred and ninety nine<br>minus four-hundred and twenty<br>too large|2<br>15<br>350|three-hundred and fifty|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|4<br>311<br>418<br>509<br>-9945|three-hundred and eleven<br>four-hundred and eighteen<br>five-hundred and nine<br>too small|2<br>500<br>123|five-hundred<br>one-hundred and twenty three|

