#### Solution

When reading the input, we could convert the city into small letters (with the function **`.ToLower()`**). At first we set the commission to **`-1`**. It will be changed, if the city and the price range are found in the table of commissions.
To calculate the commission according to the city and volume of sales, we need a few nested **`if` statements**, as it is in the sample code below:

![](/assets/chapter-4-images/08.Trade-comissions-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/508#7](https://judge.softuni.bg/Contests/Practice/Index/508#7).


<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><b>It is a good practice</b> to use <b>blocks</b>, which we <b>enclose</b> with curly braces <b><code>{ }</code></b> after <b><code>if</code></b> and <b><code>else</code></b>. Also, it is recommended during writing to <b>move aside</b> the code <b>after <code>if</code> and <code>else</code></b> with a single tabulation <b>inward</b>, in order to make the code more easily readable.</td>
</tr></table>