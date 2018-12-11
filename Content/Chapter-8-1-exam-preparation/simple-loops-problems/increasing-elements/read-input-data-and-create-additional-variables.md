#### Reading the Input Data and Create Additional Variables

To solve this problem, we need to think a bit **more algorithmically**. A **sequence of numbers** is given to us, and we need to check whether each **subsequent** will be **larger than the previous one**, and if so we count how long is the sequence in which this condition is fulfilled. Then we have to find **which one subsequence** of these is **the longest**. To do this, let's make some variables that we will use during the problem.

![](/assets/chapter-8-1-images/08.Increasing-numbers-01.png)

The variable **`n`** is **the count of numbers** we get from the console. In **`countCurrentLongest`**, we will keep **the number of elements** in the increasing sequence we are **currently counting**. For example, in the sequence: 5, 6, 1, 2, 3 **`countCurrentLongest`** will be 2 when we reach **the second element** of the counting (5, **6**, 1, 2, 3) and will become 3 when we reach the **last element** (5, 6, 1, 2, **3**), because the increasing row 1, 2, 3 has 3 elements. We will use **`countLongest`** to keep the **longest** increasing sequence. The other variables are **`a`** - the number we are **currently in**, and **`aPrev`** - **the previous number** which we will compare with **`a`** to see if the row is **growing**.
