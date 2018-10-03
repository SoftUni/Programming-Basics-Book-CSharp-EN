#### Conditional execution and Processing the Output Data

After we have **the value of the quantity** of water that has flown through the **pipes**, the next step is to **compare** that quantity with the volume of the pool itself.

We do that with a simple **`if-else`** statement, where the condition will be whether **the quantity of water is less than the volume of the pool**. If the statement returns **`true`**, we have to print **one** line that contains **the ratio** between the quantity of **water that has flown through the pipes** and **the volume of the pool**, as well as the **ratio of the quiantity of the water** from **each pipe** to the **volume of the pool**. 

The ratio has to be in **percent**, that is why all the calculations so far will be **multiplied by 100**. The values will be inserted with **placeholders** and as there is a condition **the result in percent** to be formatted to **two digits** after **the decimal** point **without rounding**, we will use the method **`Math.Truncate(…)`**.

![](/assets/chapter-3-2-images/02.Pipes-in-pool-03.png)

However, if **the condition** returns **`false`**, that means that **the quantity of water** is **more** than the **volume** of the pool, therefore, it has **overflown**. Again, the output data has to be on **one line**, but this time it should contain only **two values** - the one of the **hours** when the worker was absent, and the **quantity of water**, which is the **difference** between **the incoming water** and** the volume of the pool**.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/507#1](https://judge.softuni.bg/Contests/Practice/Index/507#1).
