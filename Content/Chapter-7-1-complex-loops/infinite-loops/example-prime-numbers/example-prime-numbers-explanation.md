### Example: Prime Numbers Explanation

The next problem is to **check for a prime number**. Before proceeding to it, let's recall what the prime numbers are.

**Definition**: An integer is prime if it is divisible only to itself and by 1. By definition, the prime numbers are positive and greater than 1. The smallest prime number is 2.

We can assume that an integer **n** is prime if **n > 1** and **n** is not divisible by a number between **2** and **n-1**.

The first few prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, …

Unlike these, **composite numbers** are such numbers, the composition of which is the result of the multiplication of prime numbers.

Here are some examples of composite numbers:

* **10** = 2 * 5
* **42** = 2 * 3 * 7
* **143** = 13 * 11

**Algorithm to check** if an integer is **prime**: check that **n > 1** and **n** is divisible by **2**, **3**,  …, **n-1** without reminder.

   * If it is divsible by any of the numbers, it is **composite**.
   * If it is not dividible by any of the numbers, then it is **prime**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>We can optimize the algorithm instead of checking it to <code><strong>n-1</strong></code>, to check divisors to <code><strong>√n</strong></code>. Think about why.</td>
</tr></table>
