# Problem: Harvest

In a **vineyard with area X square meters**, **40% of the harvest goes for wine production**. **Y kilograms of grapes** are extracted from **1 sq.m. vineyard**. **2,5 kg of grapes** are needed for **1 litre of wine**. **The wanted quantity of wine** for sale is **Z litres**. 

Write **a program** that **calculates how much wine can be produced** and **whether** that quantity **is enough**. **If it is enough, the rest is divided between the vineyard workers equally**. 

## Input Data

The input data is read from the console and consists of **exactly 4 lines**: 
* First line: **X sq.m is the vineyard – an integer in the range of** [**10 … 5000**].
* Second line: **Y grapes for one sq.m. – an integer in the range of** [**0.00 … 10.00**].
* Third line: **Z needed litres of wine – an integer in the range of** [**10 … 600**].
* Fourth line: **number of workers – an integer in the range of** [**1 … 20**].

## Output Data

The following has to be printed on the console:
* If the **produced** wine is **less than the needed quantity**:
  * **“It will be a tough winter! More {insufficient wine} liters wine needed.**”  
   \* **The result** has to be **rounded down to the nearest integer**.
* If **the produced** wine is **more than the needed quantity**:
  * **“Good harvest this year! Total wine: {total wine} liters.”**  
   \* **The result** has to be **rounded down to the nearest integer**.
  * **“{Wine left} liters left -> {wine for one worker} liters per person.”**  
   \* **Both of the results** have to be **rounded up to the higher integer**.

## Sample Input and Output

| Input | Output | Input | Output |
|----|-----|----|-----|
|650<br>2<br>175<br>3|Good harvest this year! Total wine: 208 liters.<br>33 liters left -> 11 liters per person.|1020<br>1.5<br>425<br>4|It will be a tough winter! More 180 liters wine needed.|

## Tips and Tricks

In order to solve the problem, we will read the input data. Then, we will write a few conditional statements and do some calculations. Finally, we will print the result.

### Processing the Input Data and Doing the Calculations

First we have to **check** what **the input data** will be, so that we can choose what **variables** we will use. 

![](/assets/chapter-3-2-images/04.Harvest-01.png)

To solve the problem, based on **the input data**, we have to **calculate** how many **litres of wine** will be produced. From the task requirements, we see that in order to **calculate** the quantity of **wine in litres**, we firstly have to find **the quantity of grapes in kilograms**, which will be received from the harvest. For that, we will **declare** a **variable** that stores a **value**, equal to **40%** of the result from the **multiplication** of the vineyard area by the quantity of grapes, which is extracted from 1 sq. m.

After having done these calculations, we are ready to **calculate the quantity of wine in litres** that will be produced from the harvest as well. For that, we **declare** one more **variable** that stores that **quantity**, which in order to calculate, we have to **divide the quantity of grapes in kg by 2.5**.

![](/assets/chapter-3-2-images/04.Harvest-02.png)

### Checking the Conditions and Processing Output Data

After having done the necessary calculations, **the next step** is to **check** whether the **litres of wine** that have been produced, **are enough**. For that we will use **a simple conditional statement** of the **`if-else`** type and we will **check** whether **the litres of wine** from the harvest are **more than** or **equal to** the **needed litres**. 

If the condition returns **`true`**, from the task requirement we see that **on the first line** we have to print **the wine that has been produced from the harvest**. **That value** has to be **rounded down to the nearest integer**, which we will do by using both the method **`Math.Floor(…)`** and a **placeholder** when printing it. 

On the second line we have to print the results by **rounding them up to the higher integer**, which we will do by using the method **`Math.Ceiling(…)`**. The values that we have to print are **the quantity of wine left** and **the quantity that each worker gets**. The wine left is equal to **the difference** between **the produced litres of wine** and **the needed litres of wine**. We calculate the value of that quantity in a new variable, which we declare and initialize in the **`if` condition body**, before printing the first line. We calculate the quantity of wine that **each worker gets** by dividing **the wine left** by **the number** of workers.

![](/assets/chapter-3-2-images/04.Harvest-03.png)

If the condition returns **`false`**, we have to **print the difference** between **the needed litres** and the **litres of wine produced from the harvest**. There is a specification that the result has to be **rounded down to the nearest integer**, which we will do by using the method **`Math.Floor(…)`**.

![](/assets/chapter-3-2-images/04.Harvest-04.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/507#3](https://judge.softuni.bg/Contests/Practice/Index/507#3).
