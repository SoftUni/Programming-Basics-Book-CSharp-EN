### Hints and Guidelines

First **we will read the weight of each cargo** and **sum** how much tonnes are being transported by **minibus**, **truck** and **train**, and we will calculate the **total tonnes** of the transported cargo. We will calculate **prices for each type of transportation** according to the transported tonnes and the **total price**. Finally, we will calculate and print **the total average price per tonne** and **how much of the cargo is being transported by different types of transport in percents**.

We declare the needed variables, for example: **`countOfLoads`** – count of  the cargos for transportation (we read them from the console), **`sumOfTons`** – sum of the tonnage of all cargos, **`microbusTons`**, **`truckTons`**, **`trainTons`** – variables that keeps the sum of the cargo tonnage, transported by minibus, truck and train.

We sill need a **`for` loop** from **`0`** to **`countOfLoads-1`**, to iterate through all cargo types. For each cargo **we read its weight** (in tonnes) from the console and save it in а variable, for example **`tons`**. We add to the tonnage the sum of all cargo (**`sumOfTons`**) the weight of the current cargo (**`tons`**). Once we have read the weight of the current cargo **we need to determine which vehicle type will be used** (minibus, truck or train). For this we will need **`if-else`** statements:

 * If the value of the variable **`tons`** is **less than 3**, increase the value of **`microbusTons`** by the value of **`tons`**:
 
   ```csharp
   microbusTons += tons;
   ```
   
 * Otherwise, if the value **`tons`** is **less than 11**, increase **`truckTons`** by **`tons`**.
 * If **`tons`** is **more than 11**, increase **`trainTons`** by **`tons`**.

Before we print the output, we need to **calculate the percentage of tonnes, transported by each vehicle** and the **average price per tonne**. For the average price per tonne we will declare one more helper variable **`totalPrice`**, in which we will **sum the total price of all transported cargo** (by minibus, truck and train). We will receive an average price, by dividing **`totalPrice`** of **`sumOfTons`**. You need **to calculate by yourself** the percentages of tonnes, transported by each vehicle, and print the results, keeping the format specified in the description.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/511#5](https://judge.softuni.bg/Contests/Practice/Index/511#5).
