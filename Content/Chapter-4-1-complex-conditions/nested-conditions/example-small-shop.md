# Example: Small Shop

A Bulgarian entrepreneur opens **small shops** in **a few cities** with different **prices** for the following **products**:

|product / city|Sofia|Plovdiv|Varna|
|:-------:|:-------:|:-------:|:-------:|
|coffee<br>water<br>beer<br>sweets<br>peanuts|0.50<br>0.80<br>1.20<br>1.45<br>1.60<br>|0.40<br>0.70<br>1.15<br>1.30<br>1.50<br>|0.45<br>0.70<br>1.10<br>1.35<br>1.55|

Calculate the price by the given **city** (string), **product** (string) and **quantity** (decimal number).

## Sample Input and Output

| Input | Output | Input | Output |
|-------|-------|-------|-------|
|coffee<br>Varna<br>2|0.9|peanuts<br>Plovdiv<br>1|1.5|

| Input | Output | Input | Output |
|-------|-------|-------|-------|
|beer<br>Sofia<br>6|7.2|water<br>Plovdiv<br>3|2.1|

## Video: Small Shop

Watch this video to learn how to solve this problem: https://youtu.be/kU_ru7GK-Mg.

## Solution

We **convert** all of the letters into **lower register** using the function **`.ToLower()`**, in order to compare products and cities **no matter** what the letters are – small or capital ones.

![](/assets/chapter-4-images/02.Small-shop-01.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/508#1](https://judge.softuni.org/Contests/Practice/Index/508#1).
