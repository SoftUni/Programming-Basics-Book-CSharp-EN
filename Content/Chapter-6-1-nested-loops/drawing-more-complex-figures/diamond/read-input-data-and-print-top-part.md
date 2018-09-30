#### Reading the Input Data and Drawing the Upper Part of the Diamond

We read **n** from the console and we write it down in a variable of type **`int`**.  

![](/assets/chapter-6-images/10.Diamond-01.png)

We start to draw the upper part of the diamond. The first thing we need to do is to calculate the number of the outer **dashes `leftRight`** (the dashes on the outer side of **the stars**). It is equal to **`(n - 1) / 2`**, rounded down.

![](/assets/chapter-6-images/10.Diamond-02.png)

After we have calculated **`leftRight`**, we start to draw **the upper part** of the diamond. We can start by making a **loop** from **`0`** to **`n / 2 + 1`** (rounded down).  

At each iteration of the loop the following steps must be taken:
* We draw on the console the left **dashes** (with length **`leftRight`**) and right after them the first **star**.

![](/assets/chapter-6-images/10.Diamond-03.png)

* We will calculate the distance between the two **stars**. We can do this by subtracting from **n** the number of the outer **dashes**, and the number 2 (the number of **the stars**, i.e. the diamonds outline). The result of the subtraction we write down in a variable **`mid`**. 

![](/assets/chapter-6-images/10.Diamond-04.png)

* If **`mid`** is lower than 0, we know that on the row there should be only 1 star. If it is higher or equal to 0 then we have to print **dashes** with length **`mid`** and one **star** after them.
* We draw on the console the right outer **dashes** with length **`leftRight`**. 

![](/assets/chapter-6-images/10.Diamond-05.png)

* In the end of the loop we decrease **`leftRight`** by 1 (**the stars** are moving away from each other).

We are ready with the upper part.