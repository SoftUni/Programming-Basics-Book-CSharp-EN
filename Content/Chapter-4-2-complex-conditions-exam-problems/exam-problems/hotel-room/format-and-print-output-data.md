#### Formatting the Output Data

After calculating the relevant prices and the total amount for the stay, now let's prepare the formatted result. Before that, we should store it in our output **parameters** - **`studioInfo`** and **`apartmentInfo`**.

![](/assets/chapter-4-2-images/05.Hotel-room-06.png)

In order to calculate the output parameters, we will use the **`decimal.Round(Decimal, Int32)`** **method** .
This method **rounds the decimal** number up to a **specified number of characters** after the decimal point. To do that, we pass to the method **`decimal`** (**`studioRent`**, **`apartamentPrice`**) and integer (**`int`**) data types. In our case, we will round the decimal number up to **two digits** after the decimal point.

#### Printing the Result

Finally, what remains is to print the calculated results in the console.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/509#4](https://judge.softuni.bg/Contests/Practice/Index/509#4).
