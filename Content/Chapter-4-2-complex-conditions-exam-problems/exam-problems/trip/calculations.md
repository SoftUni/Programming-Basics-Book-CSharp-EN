#### Calculations

Let's create and initialize the variables needed for applying the logic and calculations.

![](/assets/chapter-4-2-images/02.Trip-02.png)

Similarly to the example in the previous task, we can initialize variables with some of the output results, in order to spare additional initialization.

When examining once again the problem requirements, we notice that the main distribution of where the vacation will take place is determined by the **value of the budget**, i.e. our main logic is divided into two cases: 
* If the budget is **less than** a particular value.
* If it is **less than** another value, or is **more than** the specified border value. 

Based on the way we arrange the logical scheme (the order in which we will check the border values), we will have more or less conditions in the solution. **Why?**

After that, we need to apply a condition to check the value of the **season**. Based on it, we will determine what percentage of the budget will be spent, as well as where the programmer will stay - in a **hotel** or a **camp**.
