### Tips and Tricks

The following task requires our problem to accept more input data and to perform a larger number of calculations, despite the fact that the solution is **identical**. Accepting the input data is done in the **familiar way**. Pay attention that the **Input** part of the condition states that all input data must be in **real numbers**, and for that reason we would use **`decimal`** type.

Now that we already have everything we need in order to execute the programming logic, we can move to the following part. How can we **calculate** what is the **needed** number of tiles that will be sufficient to cover the entire floor? The requirement is that tiles have **triangular** shape, which can cause confusion, but practically, the task needs just **simple calculations**. We can calculate the **common part of the floor** by the formula for finding rectangle area, as well as the **area of a single tile** using the relevant formula for triangle area.

In order to calculate the **number of tiles** that are needed, **we divide the floor area by the area of a single tile** (we should not forget to add the 5 additional tiles, that were mentioned in the requirements).

<table>
<tr>
<td width="10%"><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Pay attention that the requirements state that we should round up the number of tiles, received upon the division, up to the higher number, and then we should add 5. Find more information about the system functionality that does that: <code><strong>Math.Ceiling(…)</strong></code>.
</td>
</tr>
</table>

We can find the end result by **calculating the total amount** that is needed to cover the entire floor, by **summing up the tile price and the price that will be paid to the workman**, that we have from the input data. We can figure out that **the total costs** for tiles can be calculated by **multiplying the number of tiles by the price per tile**. We fill find out whether the amount that we have will be sufficient by comparing the savings (based on the input data) and the total costs.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/517#1](https://judge.softuni.bg/Contests/Practice/Index/517#1).
