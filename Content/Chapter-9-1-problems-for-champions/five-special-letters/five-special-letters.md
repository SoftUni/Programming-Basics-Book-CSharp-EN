## Problem: Five Special Letters

Two numbers are given: **start** and **end**. Write a program that **generates all combinations of 5 letters**, each of the sets **`{'a', 'b', 'c', 'd', 'e'}`** so that the weight of these 5 letters is a number in the range **`[start … end]`**, inclusive. Print them in alphabetical order, in a row, separated by a space.

**The weight of one letter** is calculated as follows:

```csharp 
weight('а') = 5;
weight('b') = -12;
weight('c') = 47;
weight('d') = 7;
weight('e') = -32;
```

**The weight of the sequence** from the letters **`c1, c2, …, cn`** is calculated by removing all the letters that are repeated (from right to left) and then calculating the formula:

```csharp 
weight(c1c2…cn) = 1 * weight(c1) + 2 * weight(c2) + … + n * weight(cn)
```

**For example**, the weight of **`bcddc`** is calculated as follows:

First **we remove the repeating letters** and get **`bcd`**. Then we apply the formula: **`1 * weight('b') + 2 * weight('c') + 3 * weight('d') = 1 * (-12) + 2 * 47 + 3 * 7 = 103`**.

**Another example**: ** **`weight("cadae") = weight("cade") = 1 * 47 + 2 * 5 + 3 * 7 + 4 * (-32) = -50`**.

### Input Data

The input data is read from the console. They consist of two numbers:
   * The number for **start**.
   * The number for **end**.

Input data will always be valid and will always be in the format described. No need to check.

### Output Data

The result should be printed on the console as a sequence of strings, **arranged in alphabetical order**. Each string must be separated from the next by a single space. If the weight of any of the 5 letter strings does not exist within the specified interval, print "**No**".

### Constraints

   * Numbers for **start** and **end** are integers in the range [**-10000 … 10000**].
   * Allowed program time: 0.25 seconds.
   * Allowed memory: 16 MB.

### Sample Input and Output

| Input | Output       | Comments             |
| ------ | ------------- | ---------------------- |
|40<br>42|bcead bdcea |weight("bcead") = 41<br>weight("bdcea") = 40|

| Input | Output         |
| ------ |---------------|
|-1<br>1| bcdea cebda eaaad eaada eaadd eaade eaaed eadaa eadad eadae eadda eaddd eadde eadea eaded eadee eaead eaeda eaedd eaede eaeed eeaad eeada eeadd eeade eeaed eeead|

| Input | Output      |
| ------ |------------|
|200<br>300|baadc babdc badac badbc badca badcb badcc badcd baddc bbadc bbdac bdaac bdabc bdaca bdacb bdacc bdacd bdadc bdbac bddac beadc bedac eabdc ebadc ebdac edbac|

| Input | Output  |
| ------ | -------- |
|300<br>400| No|
