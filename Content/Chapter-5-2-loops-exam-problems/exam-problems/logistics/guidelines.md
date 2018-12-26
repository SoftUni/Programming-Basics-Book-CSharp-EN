### Tips and Tricks

First **we will read the weigth of every cargo** and **sum** how much tonnes are being transported by **minibus**, **truck** and **train** and we will calculate **total tonnes** of the transported cargos. We will calculate **prices for every type of transport** according to the  transported tonnes and the **total price**. Finally we will calculate and print **the total average price per tonne** and **how much of the cargo is being transported by different types of transport in percents**.

We declare the needed variables, For Example: **`countOfLoads`** – count of  the cargos for transportation (we read them from the console), **`sumOfTons`** – sum of the tonnage of all cargos, **`microbusTons`**, **`truckTons`**, **`trainTons`** – variables that keeps the sum of the cargo tonnage , transported by minibus, truck and train.

We sill need **`for` loop** from **`0`** to **`countOfLoads-1`**, to iterate through all the cargos. For every cargo **we read its weight** (in tonnes) from the console and save it in а variable, for example **`tons`**. We add to the tonnage sum of all cargos (**`sumOfTons`**) weight of the current cargo (**`tons`**). Once we have read the weight of the current cargo **we need to determine which vehicle type will be used** (minibus, truck or train). For this we will need **`if-else`** checks:

 * If the value of the variable **`tons`** is **less than 3**, increase the value of **`microbusTons`** with the value of **`tons`**:
 
   ```csharp
   microbusTons += tons;
   ```
   
 * Otherwise, if the value **`tons`** is **less than 11**, increase **`truckTons`** with **`tons`**.
 * If **`tons`** is **more than 11**, increase **`trainTons`** with **`tons`**.

Before we print the output  we need to  **calculate percentages of the tonnes, transported by each vehicle** and **average price per tonne**. For the average price per tonne we will declare one more helper variable **`totalPrice`**, in which we will **sum total price of all transported cargos** (by minibus, truck and train). We will receive average price, by dividing **`totalPrice`** of **`sumOfTons`**. You need **to calculate by yourself** percentages of tonnes, transported by each vehicle, and print the results, keeping the specified format in the description.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/511#5](https://judge.softuni.bg/Contests/Practice/Index/511#5).
