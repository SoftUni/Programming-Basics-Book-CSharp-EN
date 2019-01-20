#### Calculating Percentages

After we have determined how many numbers there are in each group, we can move on to calculating the percentages, which is the main purpose of the problem. For this we will use the following formula:

<p align="center"><strong>(group percentage) = (count of numbers in group) * 100 / (count of all numbers)</strong></p>

This formula in the program code looks like this:

![](/assets/chapter-5-2-images/01.Histogram-04.png)

If we divide by **100** (**`int`** number type) instead of **100.0** (**`double`** number type), we will perform the so-called **integer division** and the variable will save only the whole part of the division, and this is not the result we want. For example: **5 / 2 = 2**, but **5 / 2.0 = 2.5**. Considering this, the formula for the first variable will look like this: 

![](/assets/chapter-5-2-images/01.Histogram-05.png)

To make it even clearer, let's take a look at the following example: 

| Input | Output |
|--------|---------|
|**3**<br>1<br>2<br>999|66.67%<br>0.00%<br>0.00%<br>0.00%<br>33.33%|

In this case **`n = 3`**.
For the loop we have:
   -   	**`i = 0`** - we read the number 1, which is less than 200 and falls into the first group (**`p1`**), and increase the group count (**`cntP1`**) by 1.
   -   	**`i = 1`** – we read the number 2, which again falls into the first group (**`p1`**) and increase its count (**`cntP1`**) again by 1.
   -   	**`i = 2`** – we read the number 999, which falls into the last group (**`p5`**), because its bigger than 800, and increase the count of the group (**`cntP5`**) with 1.
   
After reading the numbers in group **`p1`** we have 2 numbers, and in **`p5`** we have 1 number. We have **no numbers** in the other groups. By applying the above formula, we calculate the percentages of each group. If we multiply in the formula by **100**, instead of **100.0** we will receive for group **`p1`** 66%, and for group **`p5`** – 33% (without fractional part).
