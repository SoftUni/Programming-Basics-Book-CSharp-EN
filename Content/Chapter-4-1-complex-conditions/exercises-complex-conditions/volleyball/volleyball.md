# Problem: Volleyball

Vladimir is a student, lives in Sofia and goes to his hometown from time to time. He is very keen on volleyball, but is busy during weekdays and plays **volleyball** only during **weekends** and on **holidays**. Vladimir plays **in Sofia** every **Saturday**, when **he is not working**, and **he is not traveling to his hometown** and also during **2/3 of the holidays**. He travels to his **hometown h times** a year, where he plays volleyball with his old friends on **Sunday**. Vladimir **is not working 3/4 of the weekends**, during which he is in Sofia. Furthermore, during **leap years** Vladimir plays **15% more** volleyball than usual. We accept that the year has exactly **48 weekends**, suitable for volleyball. 
Write a program that calculates **how many times Vladimir has played volleyball** through the year. **Round the result** down to the nearest whole number (e.g. 2.15 -> 2; 9.95 -> 9).

The input data is read from the console:
 * The first line contains the word “**leap**” (leap year) or “**normal**” (a normal year with 365 days).
 * The second line contains the integer **p** – the count of holidays in the year (which are not Saturday or Sunday).
 * The third line contains the integer **h** – the count of weekends, in which Vladimir travels to his hometown.

## Sample Input and Output

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|leap<br>5<br>2|45|normal<br>3<br>2|38|

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|normal<br>11<br>6|44|leap<br>0<br>1|41|

## Hints and Guidelines

As usual, we read the input data from the console and, to avoid making mistakes, we convert the text into small letters with the function **`.ToLower()`**. Consequently, we calculate **the weekends spent in Sofia**, **the time for playing in Sofia** and **the common playtime**. At last, we check whether the year is **leap**, we make additional calculation when necessary and we print the result on the console **rounded down** to the nearest **integer** (look for a **C#** class with such functionality).

A sample code (parts of the code are blurred on purpose to stimulate independent thinking and solving skills):

![](/assets/chapter-4-images/11.Volleyball-01.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/508#11](https://judge.softuni.org/Contests/Practice/Index/508#11).
