#### Hints and Guidelines

First we sum the three numbers to get the total result in seconds. Since **1 minute = 60** seconds, we will have to calculate the number of minutes and seconds in the range 0 to 59:- Ако резултатът е между 0 и 59, отпечатваме 0 минути + изчислените секунди.
- If the result is between 0 and 59, we print 0 minutes + calculated seconds.
- If the result is between 60 and 119, we print 1 minute + calculated seconds minus 60.
- If the result is between 120 and 179, we print 2 minutes + calculated seconds minus 120.
- If the seconds are less than 10, we print the number with zero in front.

![](/assets/chapter-3-images/07.Sum-seconds-01.png)

#### Testing in the Judge System

Test your solution from the example here: [https://judge.softuni.bg/Contests/Practice/Index/506#6](https://judge.softuni.bg/Contests/Practice/Index/506#6).
