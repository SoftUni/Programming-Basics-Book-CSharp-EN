### Problem: volleyball

Vladi is a student, lives in Sofia and goes to his hometown from time to time. He is very keen on volleyball, but is busy during weekdays and plays **volleyball** only during **weekends** and on **holidays**. Vladi plays **in Sofia** every **Saturday**, when **he is not working** and **he is not travelling to his hometown** and also during **2/3 of the holidays**. He travels to his **hometown h times** a year, where he plays volleyball with his old friends on **Sunday**. Vladi **is not working 3/4 of the weekends**, during which he is in Sofia. Furhter more, during **leap years** Vladi plays **15% more** volleyball than the usual. We accept, that the year has exactly **48 weekends**, suitable for volleyball. 
Write a program, which calculates **how many times Vladi has played volleyball** through the year. **Round the result** down to the nearest whole number (e.g. 2.15 -> 2; 9.95 -> 9).

The input data is read from the console:

* The first row contains the word “**leap**” (leap year) or “**normal**” (a normal year with 365 days).
* The second row contains the whole number **p** – the count of holidays in the year (which are not Saturday or Sunday).
* The third row contains the whole number **h** – the count of weekends, in which Vladi travels to his hometown.

#### Sample Input and Output

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|leap<br>5<br>2|45|normal<br>3<br>2|38|

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|normal<br>11<br>6|44|leap<br>0<br>1|41|