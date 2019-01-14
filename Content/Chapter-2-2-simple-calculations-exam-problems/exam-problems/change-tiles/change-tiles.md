# Problem: Change Tiles

**The tiles** on the ground in front of an apartment building **need changing**. The ground has a **square shape with side of N metres**. The tiles are **"W" metres wide** and **"L" metres long**. There is one bench on the ground with **width of M metres and length of O metres**. The tiles under it do not need to be replaced. Each tile is replaced for **0.2 minutes**.

Write a program that **reads the size of the ground, the tiles and the bench from the console**, and calculates how many tiles are needed to cover the ground and what is **the total time for replacing the tiles**. 

**Example: ground with size 20 m.** has **area of 400 sq.m.**. **A bench** that is **1 m.** wide and **2 m.** long, has area of **2 sq.m.**. **One tile** is **5 m. wide, 4 m. long** and has **area of 20 sq.m.**. The space that needs to be covered is **400 – 2 = 398 sq.m.**. **398 / 20 = 19.90 tiles** are necessary. The **time** needed is **19.90 * 0.2 = 3.98 minutes.******

## Input Data

**5 numbers** are read from the console: 

* **N – length** of **a side** of **the ground** within the range of [**1 … 100**].
* **W – width** per **tile** within the range of [**0.1 … 10.00**].
* **L – length** per **tile** within the range of [**0.1 … 10.00**].
* **М – width** of **the bench** within the range of [**0 … 10**].
* **О – length** of **the bench** within the range of [**0 … 10**].

## Output Data

Print on the console **two numbers**: **number of tiles needed** for the repair and the **total time for changing them**, each on a new line.

## Sample Input and Output

| Input        | Output    |
|---------------|------------|
|20<br>5<br>4<br>1<br>2|19.9<br>3.98| 

**Explanation of the example:**

* **Total area** = 20 \* 20 = 400.
* **Area of the bench** = 1 \* 2 = 2.
* **Area for covering** = 400 – 2 = 398.
* **Area of tiles** = 5 \* 4 = 20.
* **Needed tiles** = 398 \/ 20 = 19.9.
* **Needed time** = 19.9 \* 0.2 = 3.98.

| Input    | Output            |
|-----------|--------------------|
|40<br>0.8<br>0.6<br>3<br>5|3302.08333333333<br>660.416666666667| 
