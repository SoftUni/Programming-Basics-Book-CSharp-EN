# Problem: Flowers Shop

A flowers shop offers 3 types of flowers: **chrysanthemums**, **roses** and **tulips**. The prices depend on the season.

|Season|Chrysanthemums|Roses|Tulips|
|:---:|:---:|:---:|:---:|
|spring / summer|2.00 USD/pc|4.10 USD/pc|2.50 USD/pc|
|autumn / winter|3.75 USD/pc|4.50 USD/pc|4.15 USD/pc|

On holidays, prices of all flowers are **increased by 15%.** The following **discounts** are offered:
* For purchasing more than 7 tulips in spring – **5% of the price** of the whole bouquet.
* For purchasing 10 or more roses in winter – **10% of the price** of the whole bouquet.
* For purchasing more than 20 flowers in total in any season – **20% of the price** of the whole bouquet.

**Discounts are made in the above described order and can be combined! All discounts are valid after increasing of the price on a holiday!**

The price for arranging a bouquet is always **2 USD**. Write a program that calculates the **price of a bouquet**.

## Input Data

The input is read from the **console** and contains **exactly 5 lines**:
* The first line contains **the number of purchased chrysanthemums** – an integer within the range [**0 … 200**].
* The second line contains **the number of purchased roses** – an integer within the range [**0 … 200**].
* The third line contains **the number of purchased tulips** – an integer within the range [**0 … 200**].
* The fourth line indicates **the season** – [**Spring, Summer, Autumn, Winter**].
* The fifth line specifies **if the day is a holiday** – [**Y = yes / N = no**].

## Output Data

Print on the console 1 number – **the price of flowers**, formatted up to the second digit after the decimal point.

## Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|2<br>4<br>8<br>Spring<br>Y<br>|46.14|**Price**: 2\*2.00 + 4\*4.10 + 8\*2.50 = 40.40 USD<br>
**Holiday**: 40.40 + 15% = 46.46 USD<br>
**5% discount** for more than 7 tulips in spring: 44.14<br>
The flowers are in total 20 or less: **no discount**<br>44.14 + 2 **for arranging the bouquet** = 46.14 USD|

| Input | Output | Comments |
| --- | --- | --- |
|3<br>10<br>9<br>Winter<br>N<br>|69.39|**Price**: 3\*3.75 + 10\*4.50 + 9\*4.15 = 93.60 USD<br>
**Not a holiday**: no increase in price<br>**10% discount** for 10 or more roses in winter: 84.24<br>
The flowers are in total over 20: **20% discount** = 67.392<br>
67.392 + 2 **for arranging the bouquet** = 69.392 USD|

| Input | Output |
| --- | --- |
|10<br>10<br>10<br>Autumn<br>N|101.20|

## Hints and Guidelines

We will divide the problem into smaller sub-problems, as described below.

### Separating the Constant Values in Variables

After carefully reading the requirements, we understand that once again we need to do **simple calculations**, however this time we will need **additional** logical **conditions**. We need to pay more **attention** to the moment of **making changes** in the final price, in order to be able to properly build the logic of our program. Again, the bold text gives us sufficient **guidelines** on how to proceed. For a start, we will separate the already **defined** values in **variables**, like we did in the previous tasks:

![](/assets/chapter-8-2-images/03.Flowers-01.png)

We will also do the same for the rest of the defined values:

![](/assets/chapter-8-2-images/03.Flowers-02.png)

### Reading the Input Data

Our next sub-task is to **read** properly **the input** data from the console. We will do that in the familiar way, but this time we will **combine two** separate functions – one for **reading** a line from the console and another one for its **conversion** into a numeric data type:

![](/assets/chapter-8-2-images/03.Flowers-03.png)

### Preparing the Program Logic

Let's think of the most appropriate way to **structure** our programming logic. By the requirements it becomes clear that the path of the program is divided mainly into two parts: **spring / summer** and **autumn / winter**. We can do the separation by conditional statement, by storing variables in advance for the **prices** of the individual flowers, as well as for the **end result**.

![](/assets/chapter-8-2-images/03.Flowers-04.png)

What remains is to perform **a few checks** regarding **the discounts** of the different types of flowers, depending on the season, and to modify the end result.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/517#2](https://judge.softuni.org/Contests/Practice/Index/517#2).
