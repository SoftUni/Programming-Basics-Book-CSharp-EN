## Problem: Flowers Shop

A flowers shop offers 3 types of flowers: **chrysanthemums**, **roses** and **tulips**. The prices depend on the season.

|Season|Chrysanthemums|Roses|Tulips|
|:---:|:---:|:---:|:---:|
|spring / summer<br>autumn / winter|2.00 lv/pc<br>3.75 lv/pc|4.10 lv/pc<br>4.50 lv/pc|2.50 lv/pc<br>4.15 lv/pc|

On holidays, prices of all flowers are **increased by 15%.** The following **discounts** are offered:
* For purchasing more than 7 tulips in spring – **5% of the price** of the whole bouquet.
* For purchasing 10 or more roses in winter – **10% of the price** of the whole bouquet.
* For purchasing more than 20 flowers in total in any season – **20% of the price** of the whole bouquet.

**Discounts are made in the above described order and can be combined! All discounts are valid after increasing of the price on a holiday!**

The price for arranging a bouquet is always **2 lv.** Write a program that calculates the **price of a bouquet**.

### Input Data

The input is read from the **console** and contains **exactly 5 rows**:
* The first row contains **the number of purchased chrysanthemums** – an integer within the range [**0 … 200**].
* The second row contains **the number of purchased roses** – an integer within the range [**0 … 200**].
* The third row contains **the number of purchased tulips** – an integer within the range [**0 … 200**].
* The fourth row indicates **the season** – [**Spring, Summer, Autumn, Winter**].
* The fifth row specifies **if the day is a holiday** – [**Y - yes / N - no**].

### Output Data

Print in the console 1 number – **the price of flowers**, formatted up to the second symbol after the decimal point.

### Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|2<br>4<br>8<br>Spring<br>Y<br>|46.14|**Price**: 2\*2.00 + 4\*4.10 + 8\*2.50 = 40.40 lv<br>**Holiday**: 40.40 + 15% = 46.46 lv<br>**5% discount** for more than 7 tulips in spring: 44.14<br>The flowers are in total 20 or less: **no discount**<br>44.14 + 2 **for arranging the bouquet** = 46.14 lv|

| Input | Output | Comments |
| --- | --- | --- |
|3<br>10<br>9<br>Winter<br>N<br>|69.39|**Price**: 3\*3.75 + 10\*4.50 + 9\*4.15 = 93.60 lv<br>**Not a holiday**: no increase in price<br>**10% discount** for 10 or more roses in winter: 84.24<br>The flowers are in total over 20: **20% discount** = 67.392<br>67.392 + 2 **for arranging the bouquet** = 69.392 lv|

| Input | Output |
| --- | --- |
|10<br>10<br>10<br>Autumn<br>N|101.20|
