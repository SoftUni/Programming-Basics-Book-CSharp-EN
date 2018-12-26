#### Generating Four-Digit Numbers

Let's start analyzing our problem. What we need to do is **analyze all numbers from `1111` to `9999`**, excluding those that contain zeroes (for example **`9011`**, **`3401`**, etc. are invalid). What is the easiest way to **generate** all these **numbers**? We will **use nested loops**. As we have a **4-digit number**, we will have **4 nested loops**, as each of them will generate **an individual digit in our number** for testing.

![](/assets/chapter-9-2-images/03.Bulls-and-cows-06.png)

Thanks to these loops, **we have access to every digit** of all numbers that we need to check. Our next step is to **separate the secret number into digits**. This can be achieved very easily using **a combination of integer division and modular division**.

![](/assets/chapter-9-2-images/03.Bulls-and-cows-07.png)
