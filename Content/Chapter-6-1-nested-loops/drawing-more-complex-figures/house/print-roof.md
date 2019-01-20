#### Printing the Roof

After we have calculated the length of the roof we make a loop from 0 to **`roofLength`**. On each iteration we will:
* Calculate the number of **dashes** we need to draw. The number will be equal to **`(n - stars) / 2`**. We store it in a variable **`padding`**.

![](/assets/chapter-6-images/09.House-05.png)

* We print in the console: "**dashes**" (**`padding / 2`** times) + "**stars**" (**`stars`** times) + "**dashes**" (**`padding / 2`** times). 

![](/assets/chapter-6-images/09.House-06.png)

* Before the iteration is over we add 2 to **`stars`** (the number of **the stars**).

![](/assets/chapter-6-images/09.House-07.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>It is not a good idea to add many character strings as it is shown above, because this leads to <strong>performance issues</strong>. For more information visit:  <a href="https://bg.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B7#String_Builder">https://bg.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B7#String_Builder</a></td>
</tr></table>
