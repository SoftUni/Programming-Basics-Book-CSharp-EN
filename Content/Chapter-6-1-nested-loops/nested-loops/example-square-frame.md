# Example: Square Frame

Write a program that takes a positive integer **n** and draws on the console **a square frame** with a size of **n \* n**.

|Input|Output|Input|Output|
|---|---|---|---|
|3|<code>+ - +</code><br><code>&#124; - &#124;</code><br><code>+ - +</code>|4|<code>+ - - +</code><br><code>&#124; - - &#124;</code><br><code>&#124; - - &#124;</code><br><code>+ - - +</code>|

|Input|Output|Input|Output|
|---|---|---|---|
|5|<code>+ - - - +</code><br><code>&#124; - - - &#124;</code><br><code>&#124; - - - &#124;</code><br><code>&#124; - - - &#124;</code><br><code>+ - - - +</code>|6|<code>+ - - - - +</code><br><code>&#124; - - - - &#124;</code><br><code>&#124; - - - - &#124;</code><br><code>&#124; - - - - &#124;</code><br><code>&#124; - - - - &#124;</code><br><code>+ - - - - +</code>|

## Video: Square Frame

Watch this video lesson to learn how to print a square frame on the console using nested loops: https://youtu.be/LS2uqvggfSA.

## Hints and Guidelines

We can solve the problem in the following way:
* We read from the console the number **`n`**.
* We print **the upper part**: first a **`+`** sign, then **n-2** times **`-`** and in the end a  **`+`** sign.
* We print **the middle part**: we print **n-2** rows, as we first print a **`|`** sign, then **n-2** times **`-`** and in the end again a **`|`** sign. We can do this with nested loops.
* We print **the lower part**: first a **`+`** sign, then **n-2** times **`-`** and in the end a  **`+`** sign.

Here is an example implementation of the above idea with nested loops:

![](/assets/chapter-6-images/05.Square-frame-01.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/512#4](https://judge.softuni.org/Contests/Practice/Index/512#4).
