## Problem: Numerical Expression

Bonny is an exceptionally powerful witch. As her natural power is not sufficient to successfully fight vampires and wеrewolves, she has started to master the power of Expressions. An expression is very hard to master, because the spell relies on the ability to **quickly solve mathematical expressions**.

In order to use an "Expression spell", the witch must know the result of a mathematical expression in advance. An **Expression spell** consists of a few simple mathematical expressions. Each mathematical expression can contain operators for **summing up**, **subtraction**, **multiplying** and/or **division**.

The expression is solved without considering the mathematical rules for calculating numerical expressions. This means that the priority is applied according to the sequence of the operators, and not the type of calculation that they do. The expression **can contain brackets**, as **everything inside the brackets is calculated first**. Every expression can contain multiple brackets, but no nested brackets:
- An expression containing **(…(…)…) is an invalid one**.
- An expression containing **(…)…(…) is a valid one**.

### Input Data

The input data contains one row that is passed from the console. It contains a **mathematical expression for calculation**. The row **always ends with the "=" symbol**. The **"="** symbol means **end of the mathematical expression**.

The input data is always valid and always in the described format. No need to validate it.

### Output Data

The output data must be printed on the console. The output consists of one row – the output of the **calculated mathematical expression**.

The output must be **rounded up to the second digit after the decimal point**.

### Constraints

- The expressions will consist of **maximum 2500 symbols**.
- The numbers of each mathematical expression will be within the range [**1 … 9**].
- The operators in the mathematical expressions will always be among **`+`** (summing up), **`-`** (subraction), **`/`** (division) or **`*`** (multiplying).
- The result of the mathematical expression will be within the range [**-100000.00 … 100000.00**].
- Allowed execution time: **0.1 seconds**.
- Allowed memory: **16 MB**.

### Sample Input and Output

| Input                           | Output  | Input                           | Output  |
|--------------------------------|--------|-------------------------------|--------|
| 4+6/5+(4\*9–8)/7\*2=           | 8.57   |3+(6/5)+(2\*3/7)\*7/2\*(9/4+4\*1)= | 110.63 |
