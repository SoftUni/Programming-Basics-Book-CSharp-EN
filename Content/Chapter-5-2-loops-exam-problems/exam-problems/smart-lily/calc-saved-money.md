#### Calculating Savings

![](/assets/chapter-5-2-images/02.Smart-lilly-03.png)

With a **`for` loop** we iterate through every Lilly's birthday. When the leading variable is an **even number**, that means that Lilly **has received money** and we add this money to her total savings. At the same time, we **subtract 1 lev** - the money that her brother took. Then we **increase** the value of the variable **`moneyForBirthday`**, i.e. we increase by 10 the sum that she will receive on her next birthday. On the contrary, when the leading variable is an **odd number**, we increase the count of **toys**. We do the parity check by **division with remainder** (**`%`**) **by 2** - when the remainder is 0, the figure is even, and in case of remainder 1 - it is odd.

We also add the money from the sold toys to Lilly's savings.

![](/assets/chapter-5-2-images/02.Smart-lilly-04.png)
