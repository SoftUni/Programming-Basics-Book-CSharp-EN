# Simple Loops – Problems

**The fourth** problem of the "Programming Basics" Practical Exam includes a **single loop with simple logic** in it. Let's see a few examples.


## Problem: Sums with Step of 3

There are **n** integers **a1, a2, …, an** given. Calculate the sums:
-	**sum1 = a1 + a4 + a7** + … (the numbers are summed, starting from the first one with step of 3).
-	**sum2 = a2 + a5 + a8** + … (the numbers are summed, starting from the second one with step of 3).
-	**sum3 = a3 + a6 + a9** + … (the numbers are summed, starting from the third one with step of 3).

### Input

The input data is read from the console. The first line holds an integer **n (0 ≤ n ≤ 1000)**. On the next **n** lines we read **n** integers in the range [**-1000 … 1000**]: **a1, a2, …, an**.

### Output

On the console we should print 3 lines containing the 3 sums in a format such as in the example.

### Sample Input and Output

| Input | Output | Input | Output | Input | Output |
| --- | --- | --- | --- | --- | --- |
|2<br>3<br>5<br>|sum1 = 3<br>sum2 = 5<br>sum3 = 0|4<br>7<br>-2<br>6<br>12|sum1 = 19<br>sum2 = -2<br>sum3 = 6|5<br>3<br>5<br>2<br>7<br>8|sum1 = 10<br>sum2 = 13<br>sum3 = 2| 

### Video: Sums with Step of 3

Watch the video lesson about solving the "Sums with Step of 3" problem: https://youtu.be/bRHFuNNBmZc.

### Reading the Input Data

We will take **the count of numbers** from the console and declare **starting values** of the three sums.

![](/assets/chapter-8-1-images/07.Sums-Step-3-01.png)

Since we do not know in advance how many numbers we will process, we will take them one at a time in **a loop** which will be repeated **n times** and we will process them in the body of the loop.

![](/assets/chapter-8-1-images/07.Sums-Step-3-02.png)

### Allocating Numbers and Printing Results

To find out in which of **the three sums** we need to add the number, we will divide its **sequence number into three** and we will use the remainder. We will use the variable **`i`**, which tracks **the number of runs** of the loop, in order to find out which sequence number we are at. When the remainder of **`i/3`** is **zero**, it means we will add this number to **the first** sum, when it is **1** to the **second** one, and when it is **2** to **the third** one.

![](/assets/chapter-8-1-images/07.Sums-Step-3-03.png)

Finally, we will print the result on the console in the required **format**.

![](/assets/chapter-8-1-images/07.Sums-Step-3-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#6](https://judge.softuni.bg/Contests/Practice/Index/516#6).


## Problem: Sequence of Increasing Elements 

A series of **n** numbers is given: **a1**, **a2**, **…**, **an**. Calculate **the length of the longest increasing sequence** of consecutive elements in the series of numbers.

### Input

The input data is read from the console. The first line holds an integer **n** (**0 ≤ n ≤ 1000**). On the following **n** lines we read **n** integers in the range [**-1000 … 1000**]: **a1**, **a2**, **…**, **an**.

#### Output

On the console we must print one number – **the length** of the longest increasing sequence.

### Sample Input and Output

| Input | Output | Input | Output | Input | Output | Input | Output |
| --- | --- | --- | --- | --- | --- | --- | --- |
|3<br>5<br>2<br>4|2|4<br>2<br>8<br>7<br>6|2|4<br>1<br>2<br>4<br>4|3|4<br>5<br>6<br>7<br>8|4|

### Reading the Input Data and Creating Additional Variables

To solve this problem, we need to think in a bit **more algorithmic way**. A **sequence of numbers** is given to us, and we need to check whether each **subsequent** one will be **larger than the previous one**, and if so, we count how long is the sequence in which this condition is fulfilled. Then we have to find **which sequence** of these is **the longest** one. To do this, let's create some variables that we will use during solving the problem.

![](/assets/chapter-8-1-images/08.Increasing-numbers-01.png)

The variable **`n`** is **the count of numbers** we get from the console. In **`countCurrentLongest`** we will keep **the number of elements** in the increasing sequence we are **currently counting**. For example, in the sequence: 5, 6, 1, 2, 3 **`countCurrentLongest`** will be 2 when we reach **the second element** of the counting (5, **6**, 1, 2, 3) and will become 3 when we reach the **last element** (5, 6, 1, 2, **3**), because the increasing row 1, 2, 3 has 3 elements. We will use **`countLongest`** to keep the **longest** increasing sequence. The other variables are **`a`** – the number we are **currently in**, and **`aPrev`** – **the previous number** which we will compare with **`a`** to see if the row is **growing**.

### Determining Increasing Sequence

We begin to run the numbers and check if the present number **`a`** is larger than the previous **`aPrev`** one. If this is true, then the row **is growing** and we need to increase its number by **1**. This is stored in the variable that tracks the length of the sequence we are currently in – **`countCurrentLongest`**. If the number **`a`** is **not greater** than the previous one, it means that **a new sequence** starts and we have to start the count from **1**. Finally, after all the checks are done, **`aPrev`** becomes **the number** we are **currently** using and we start the loop from the beginning with **the next** entered **`a`**.

Here is a sample implementation of the algorithm described:

![](/assets/chapter-8-1-images/08.Increasing-numbers-02.png)

### Finding and Printing the Longest Sequence

What remains is to see which of all sequences is **the longest** one. We will do this by checking in the loop if **the sequence** we are **currently** in has become longer than the **longest one by now**. The whole loop will look like this:

![](/assets/chapter-8-1-images/08.Increasing-numbers-03.png)

Finally, we print the length of **the longest** sequence found.

![](/assets/chapter-8-1-images/08.Increasing-numbers-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#7](https://judge.softuni.bg/Contests/Practice/Index/516#7).
