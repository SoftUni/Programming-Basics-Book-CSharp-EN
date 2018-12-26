### Tips and Tricks

The problem can be divided by **four** logical parts:
* **Reading** the input.
* **Check** of all numbers in the given range, and then **loop**.
* **Check** the conditions of problem according to every number in the given range.
* **Printing** the numbers.

**First** part is ordinary - we read **three** integer numbers from the console, so we will use **`int`**.

We have already came together with the**second** part - initialize the **`for`** loop. It is a bit **tricky** - in the explanation is mentioned that the numbers have to be printed in ** reversed order**. This means that **initial** value of variable **`i`** will be  **bigger**, and from the examples we can see that it is **M**. So the **final** value of  **`i`** should be **N**. The fact that we will print the results in reversed order and the values of **`i`**, suggests that the step would be **decreased by 1**.

![](/assets/chapter-7-exam-preparation-images/04.stop-number-1.png)

After we have initialized the **`for`** loop, it comes the **third** part of the problem  - **check** in problem description if the given **number is divisible both to 2 and 3 without reminder**. We will do this with one simple **`if`** check , that we will leave to the reader to do it by themselves.

Another **tricky** part of this problem is that apart of the above check we need to do **another** one - if **number is equal to the "stop" number**, entered from the console on the third line. To reach this test,number we check, should pass the above one. For this reason we will build another  **`if`** construction,  that we will  **nest in the previous one**. If the condition is **true**, we need to stop program from printing, we can do this using operator **`break`**, and it will lead us **out** of the  **`for`** loop.
 
If **condition** of the check whether the number is equal with "stop" number returns result **`false`**,  our program should **continue to print**. This covers **fourth and last** part of our program.

### Testing in the Judge System

Test your solution here:  [https://judge.softuni.bg/Contests/Practice/Index/515#2](https://judge.softuni.bg/Contests/Practice/Index/515#2).
