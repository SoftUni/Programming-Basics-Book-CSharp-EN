#### Tips and Tricks

We can first print **the hundreds** as a text - (the number / 100) % 10, after that **the tens** - (the number / 10) % 10 and at the end **the ones** - (the number % 10).

The first special case is when the number is exactly **rounded to 100** (e.g. 100, 200, 300 etc.). In this case we print "one-hundred", "two-hundred", "three-hundred" etc.

The second special case is when the number formed by the last two digits of the input number is **less than 10** (e.g. 101, 305, 609 etc.). In this case we print "one-hundred and one", "three-hundred and five", "six-hundred and nine" etc.

The third special case is when the number formed by the last two digits of the input number is **larger than 10 and smaller than 20** (e.g. 111, 814, 919 etc.). In this case we print "one-hundred and eleven", "eight-hundred and fourteen", "nine-hundred and nineteen" etc.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/594#13](https://judge.softuni.bg/Contests/Practice/Index/594#13).
