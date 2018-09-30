#### Drawing the Lower Part of the Diamond

Drawing the lower part is very similar to that of the upper part. The difference is that instead of decreasing **`leftRight`** with 1 in the end of the loop, we will increase **`leftRight`** with 1 in the beginning of the loop. Also, **the loop will be from 0 to `(n - 1) / 2`**.   

![](/assets/chapter-6-images/10.Diamond-01.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><b>Repeating a code is considered bad practice</b>, because the code becomes very hard to maintain. Let's imagine that we have a piece of code (e.g. the logic for drawing a row from the diamond) at a few more places and we decide to change it. For this we will have to go through all the places and change it everywhere. Now let's imagine that you need to reuse a piece of code not 1, 2 or 3 times but tens of times. A way to overcome this problem is to use <b>methods</b>. You can look for additional information for methods in the Internet or to look at <a href="chapter-10-methods.md">Chapter “10” (Methods)</a>.</td>
</tr></table>

If we have written all correctly, then the problem is solved.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/512#9](https://judge.softuni.bg/Contests/Practice/Index/512#9).
