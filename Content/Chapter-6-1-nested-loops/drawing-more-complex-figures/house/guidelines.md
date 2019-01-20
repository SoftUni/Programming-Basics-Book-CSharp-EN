#### Hints and Guidelines

We understand from the problem explanation that the house is with size of **`n` x `n`**. What we see from the example input and output is that:

* The house is divided into two parts: **roof and base**. 

![](/assets/chapter-6-images/09.House-01.png)

* When **`n`** is an even number, the point of the house is "dull".
* When **`n`** is odd, **the roof** is one row larger than the **base**.

##### Roof
* It comprises of **stars** and **dashes**.
* In the top part there are one or two stars, depending on if **n** is even or odd (also related to the dashes).
* In the lowest part there are many stars and no dashes.
* With each lower row, **the stars** increase by 2 and **the dashes** decrease by 2.

##### Base
* The height is **`n`** rows.
* It is made out of **stars** and **pipes**.
* Each row comprises of 2 **pipes** - one in the beginning and one in the end of the row, and also **stars** between the pipes with string length of **`n - 2`**.  
