#### Calculating Playing Time

Once we have **the number of days for playing**, we can calculate **the time for games** of Tom in minutes. Its **value is equal** to the **result of the multiplication of the working days by 63** minutes (the task specifies that during working days, the time for play is 63 minutes per day), **summed with the result of the multiplication of the holidays by 127** minutes (the task specifies that during holidays, the time for play is 127 minutes per day).

![](/assets/chapter-3-2-images/03.Sleepy-tom-cat-03.png)

In the task condition we see that we have to **print the difference** between the two values in **hours** and **minutes** as output data. That is why we **subtract** the **total** time for play from the norm of **30 000** minutes and **store** the result in a **new** variable. After that, we **divide** that variable by 60 to get the **hours**, and then, to find out how many the **minutes** are, we use **modular division with the operator `%`**, as again we divide the variable of the difference by 60.

Here we have to note that if the total **time for play** of Tom is **less** than **30 000**, when **subtracting** the norm from it, we will receive **a negative number**. In order to **neutralize** the number in the division, we use **the method `Math.Abs(…)`** when finding the difference.

![](/assets/chapter-3-2-images/03.Sleepy-tom-cat-04.png)
