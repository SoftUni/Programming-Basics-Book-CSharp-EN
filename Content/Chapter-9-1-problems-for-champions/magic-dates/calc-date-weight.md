#### Calculate Date Weight

Each date consists of exactly **8 characters (digits)** - **2 for the day** (**`d1`**, **`d2`**), **2 for the month** (**`d3`**, **`d4`**) and **4 for the year** (**`d5`** до **`d8`**). This means that we will always have the same calculation every time, and we can take advantage of this **to define the formula statically** (i.e. not to use loops, referring to different numbers from the date, but write the whole formula). To be able to write it, we will need **all digits from the date** in individual variables to make all the necessary multiplications. By using the division and partition operations on the individual components of the date, using the **`Day`**, **`Month`** and **`Year`** properties, we can retrieve each digit.

![](/assets/chapter-9-images/02.Magic-dates-04.png)

Let's also explain one of the more interesting lines here. Let's take the second digit of the year for example (**`d6`**). We divide the year by 100, and we take a remainder of 10. What do we do? First we divide the last 2 digits of the year by dividing by 100 (Example: **`2018/100 = 20`**). With the remainder of 10, we take the last digit of the result number (**`20 % 10 = 0`**) and so we get 0, which is the second digit of 2018.

It remains to make the calculation that will give us the magical weight of a given date. In order to **not write all multiplications** as shown in the example, we will simply apply a grouping. What we need to do is multiply every digit with those which follow it. Instead of typing **`d1 * d2 + d1 * d3 + … + d1 * d8`**, we can shorten this expression to **`d1 * (d2 + d3 + … + d8)`** for grouping when we have multiplication and summation. Applying the same simplification for the other multiplications, we get the following formula:

![](/assets/chapter-9-images/02.Magic-dates-05.png)
