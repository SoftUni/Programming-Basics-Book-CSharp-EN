#### Conditional execution and Processing the Output Data

After having done the necessary calculations, **the next step** is to **check** whether the **litres of wine** that have been produced, **are enough**. For that we will use **a simple conditional statement** of **`if-else`** type and we will **check** whether **the litres of wine** from the harvest are **more than** or **equal to** the **needed litres**. 

If the condition returns **`true`**, from the task requirement we see that **on the first line** we have to print **the wine that has been produced from the harvest**. **That value** has to be **rounded down to the nearest integer**, which we will do by using both the method **`Math.Floor(…)`** and a **placeholder** when printing it. 

On the second line we have to print the results by **rounding them up to the higher integer**, which we will do by using the method **`Math.Ceiling(…)`**. The values, that we have to print, are of **the quantity of left wine** and **the quantity that each worker gets**. The wine left is equal to **the difference** between **the produced litres of wine** and **the needed litres of wine**. We calculate the value of that quantity in a new variable, which we declare and initialize in the **`if` condition body**, before printing the first line. We calculate the quantity of wine that **each worker gets** by subtracting **the wine left** by **the number** of workers.

![](/assets/chapter-3-2-images/04.Harvest-03.png)

If the condition returns **`false`**, we have to **print the difference** between **the needed litres** and the **produced from the harvest litres of wine**. There is a specification that the result has to be **rounded down to the nearest integer**, which we will do by using the method **`Math.Floor(…)`**.

![](/assets/chapter-3-2-images/04.Harvest-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/507#3](https://judge.softuni.bg/Contests/Practice/Index/507#3).