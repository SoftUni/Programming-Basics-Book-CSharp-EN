# Problem: Cinema

In a cinema hall the chairs are ordered in a **rectangle** shape in **r** rows and **c** columns. There are three types of screenings with tickets of **different** prices:

* **Premiere** – a premiere screening, with price **12.00** EUR.
* **Normal** – a standard screening, with price **7.50** EUR.
* **Discount** – a screening for children and students on a reduced price – **5.00** EUR.

Write a program that enters a **type of screening** (string), number of **rows** and number of **columns** in the hall (integer numbers) and calculates **the total income** from tickets from a **full hall**. The result has to be printed in the same format as in the examples below – rounded up to 2 digits after the decimal point.

## Sample Input and Output

| Input | Output | Input | Output |
|----|-----|----|-----|
|Premiere<br>10<br>12|1440.00|Normal<br>21<br>13|2047.50|

## Hints and Guidelines

While reading the input, we could convert the screening type into small letters (with the function **`.ToLower()`**). We create and initialize a variable that will store the calculated income. In another variable we calculate the full capacity of the hall. We use a **`switch-case`** conditional statement to calculate the income according to the type of the projection and print the result on the console in the given format (look for the needed **C#** functionality on the internet). 

Sample code (parts of the code are blurred with the purpose to stimulate your thinking and solving skills):

![](/assets/chapter-4-images/11.Cinema-01.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/508#10](https://judge.softuni.org/Contests/Practice/Index/508#10).
