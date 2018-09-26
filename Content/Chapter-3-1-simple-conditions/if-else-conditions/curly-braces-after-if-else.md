### For curly braces {} after if / other

When we have **only one command** in the body of the ** if construction**, we can **skip the curly brackets**, indicating the conditional operator body. When we want to execute **block of code** (group of commands), curly brackets are **required**. In case we drop them, **only the first line**  after **if clause** will be executed.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>It's a good practice to <strong>always put curly braces,</strong> because it makes our code more readable and clean.</td>
</tr></table>

Here is an example where dropping curly braces leads to confusion:

![](/assets/chapter-3-images/00.Brackets-tip-01.png)

Execute the above code will output the following console result:

![](/assets/chapter-3-images/00.Brackets-tip-03.png)

With curly braces:

![](/assets/chapter-3-images/00.Brackets-tip-02.png)

The following output will be printed on the console:

![](/assets/chapter-3-images/00.Brackets-tip-04.png)