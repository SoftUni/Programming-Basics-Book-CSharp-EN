# Problem: \*\* Date Calculations – 1000 Days on the Earth

Write a program that enters **a birth date** in format `dd-MM-yyyy` and calculates the date on which **1000 days** are turned since this birth date and prints it in the same format.

## Sample Input and Output

| Input | Output |
| --- | --- |
| 25-02-1995 | 20-11-1997 |
| 07-11-2003 | 02-08-2006 |
| 30-12-2002 | 24-09-2005 |
| 01-01-2012 | 26-09-2014 |
| 14-06-1980 | 10-03-1983 |

## Hints and Guidelines

* Look for information about the data type `DateTime` in C\# and in particular look at the methods `ParseExact(str, format)`, `AddDays(count)` and `ToString(format)`. With their help you can solve the problem without the need to calculate days, months and leap years.
* **Don't print** anything additional on the console except for the wanted date!

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/504\#12](https://judge.softuni.org/Contests/Practice/Index/504#12).
