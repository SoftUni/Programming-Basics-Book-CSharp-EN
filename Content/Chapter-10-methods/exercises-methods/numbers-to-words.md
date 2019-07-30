# Problem: Numbers to Words

Write a method **`Letterize(number)`**, which reads an integer and prints it in words in English according to the conditions below:
* Print in words the hundreds, the tens and the ones (and the eventual minus) according to the rules of the English language.
* If the number is larger than **999**, you must print "**too large**".
* If the number is smaller than **-999**, you must print "**too small**".
* If the number is **negative**, you must print "**minus**" before it.
* If the number is not built up of three digits, you shouldn't print it.

## Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3<br>999<br>-420<br>1020|nine-hundred and ninety nine<br>minus four-hundred and twenty<br>too large|2<br>15<br>350|fifteen<br>three-hundred and fifty|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|4<br>311<br>418<br>509<br>-9945|three-hundred and eleven<br>four-hundred and eighteen<br>five-hundred and nine<br>too small|3<br>500<br>123<br>9|five-hundred<br>one-hundred and twenty three<br>nine|

## Hints and Guidelines

We can first print **the hundreds** as a text – \(the number / 100\) % 10, after that **the tens** – \(the number / 10\) % 10 and at the end **the ones** – \(the number % 10\).

The first special case is when the number is exactly **rounded to 100** \(e.g. 100, 200, 300 etc.\). In this case we print "one-hundred", "two-hundred", "three-hundred" etc.

The second special case is when the number formed by the last two digits of the input number is **less than 10** \(e.g. 101, 305, 609 etc.\). In this case we print "one-hundred and one", "three-hundred and five", "six-hundred and nine" etc.

The third special case is when the number formed by the last two digits of the input number is **larger than 10 and smaller than 20** \(e.g. 111, 814, 919 etc.\). In this case we print "one-hundred and eleven", "eight-hundred and fourteen", "nine-hundred and nineteen" etc.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/594\#13](https://judge.softuni.org/Contests/Practice/Index/594#13).
