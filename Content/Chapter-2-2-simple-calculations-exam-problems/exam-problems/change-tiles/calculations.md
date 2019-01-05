#### Doing the Calculations

After we have initialized the variables and have stored the corresponding values in them, we move to the **calculations**. As the values of the variables **`n`**, **`a`** and **`b`** are stored in variables of type **`int`**, we can also declare **variables of the same type** for the results. 

![](/assets/chapter-2-2-images/03.Change-tiles-03.png)

The variables **`w`** and  **`h`** are of type **`double`**, therefore, for **the area of a single tile**, we create a variable of the same type. Finally, **we calculate the values that we have to print** on the console. **The number** of necessary **tiles** is received by **dividing the area that needs to be covered by the area of a tile**. When dividing the two numbers, one of which is **a floating-point number**, the result will also be **a floating-point number**. Therefore, in order for the calculations to be correct, we store the result in a variable of type **`double`**. The task does not specify special formatting or rounding of the output, so we just print the values with **`Console.WriteLine(…)`**. 

![](/assets/chapter-2-2-images/03.Change-tiles-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/505#2](https://judge.softuni.bg/Contests/Practice/Index/505#2).
