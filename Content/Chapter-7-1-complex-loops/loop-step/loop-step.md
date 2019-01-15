# For Loop with Step

In the **"Repetitions (Loops)"** chapter, we learned how the **`for`** loop works and we already know when and for what purpose to use it. In this chapter we will pay **attention** to a definite and very important part of its construction, namely the **step**.

## Loop Step Explanation

**The step** is that **part** of the **`for`** loop construct that tells **how** much to **increase** or **decrease** the value of its **leading** variable. It is declared the last in the skeleton of the **`for`** loop.

Most often, we have **a size of `1`**, and in this case, instead of writing **`i += 1`** or **`i -= 1`**, we can use the **`i++`** or **`i--`** operators. If we want our step to be **different than 1**, when increasing, we use the **`i +=` + `step size`**, and when decreasing, the **`i -=` + `step size`**. With step 10, the loop would look like this: 

![](/assets/chapter-7-images/00.Step-explanation-01.png)

Here is a series of sample problems, the solution of which will help us better understand the use of **the step** in **`for`** loop.

## Example: Numbers 1...N with Step 3 

Write a program that prints the numbers **from 1 to n** with **step 3**. For example, **if n = 100**, the result will be: **1, 4, 7, 10, …, 94, 97, 100**.

We can solve the problem through the following sequence of actions (algorithm):
  * We read the number **`n`** from the console input.
  * We run a **`for` loop** from **1** to **`n`** with step size **3**.
  * In **the body of the loop**, we print the value of the current step.
  
![](/assets/chapter-7-images/01.Numbers-1-to-n-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#0](https://judge.softuni.bg/Contests/Practice/Index/514#0).

## Example: Numbers N...1 

Write a program that prints the numbers from **n to 1 in reverse order** (step -1). For example, **if n = 100**, the result will be: **100, 99, 98, …, 3, 2, 1**.

We can solve the problem in the following way:

  * We read the number **`n`** from the console input.
  * We create a **`for` loop** by assigning **`int i = n`**.
  * We reverse the condition of the loop: **`i >= 1`**.
  * We define the size of the step: **-1**.
  * In **the body of the loop**, we print the value of the current step.

![](/assets/chapter-7-images/02.Numbers-n-to-1-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#1](https://judge.softuni.bg/Contests/Practice/Index/514#1).

## Example: Powers of 2

In the following example, we'll look at using the usual step with size of 1, combined with a calculation at each loop iteration.

Write a program that prints the numbers from **1 to 2^n** (two in power of n). For example, **if n = 10**, the result will be: **1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024**.

![](/assets/chapter-7-images/03.Numbers-1-tо-2^n-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#2](https://judge.softuni.bg/Contests/Practice/Index/514#2).

## Example: Even Powers of 2

Print **the even** powers of **2** to **2^n**: **2^0, 2^2, 2^4, 2^8, …, 2^n**. For example, if **n = 10**, the result will be: **1, 4, 16, 64, 256, 1024**.

Here is how we can solve the problem:

  * We create a **`num`** variable for the current number to which we assign an initial **value of 1**.
  * For **a step** of the loop, we set a value of **2**.
  * In **the body of the loop**: we print the value of the current number and **increase the current number `num` 4 times** (according to the problem's description).

![](/assets/chapter-7-images/04.Even^2-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#3](https://judge.softuni.bg/Contests/Practice/Index/514#3).
