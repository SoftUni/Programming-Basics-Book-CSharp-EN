# Chapter 8.2. Practical Exam Preparations – Part II

In the current chapter we will review a **practical exam in Programming Basics** conducted at SoftUni on December 18, 2016. The problems will give you a good overview of what we can expect on an admission exam in Programming at SoftUni. The exam covers the material studied in the current book and the Programming Basics course at SoftUni.

## Exam Problems

Traditionally, the admission exam at SoftUni consists of **6 practical problems in programming**:
 - Simple problems (no conditions).
 - A problem with a single condition.
 - A problem with more complex conditions.
 - A problem with a single loop.
 - A problem with nested loops (drawing a figure in the console).
 - A problem with nested loops and more complex logic.
 
Let's examine a **real exam topic**, the problems it contains and their solutions.

### Reading the Input Data

We use the following **function** to **read** the data from the **console**:

![](/assets/chapter-8-2-images/01.Distance-01.png)

By definition, **the input data** is introduced as **four** separate rows. This is why we need to execute **the previous** code **four** times in total.

![](/assets/chapter-8-2-images/01.Distance-02.png)

This way we solved successfully the **first sub-problem**.

### Converting the Input Data into Appropriate Types

**The next** steps is to **convert the input data** into appropriate **types**, in order to be able to perform the needed calculations. We select **`Int32`** or **`int`** as an appropriate type, because the condition of the problem says that the input data must be within a **particular range**, for which this data type is completely sufficient. We will do the **conversion** in the following way:

![](/assets/chapter-8-2-images/01.Distance-03.png)

