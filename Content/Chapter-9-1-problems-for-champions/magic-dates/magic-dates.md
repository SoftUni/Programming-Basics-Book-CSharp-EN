## Problem: Magic Dates

**Date** is given in "**dd-mm-yyyy**" format, e.g. 17-04-2018. We calculate **the weight of that date** by taking all its digits, multiplying each digit with the others after it, and finally adding all the results obtained. In our case, we have 8 digits: **17032007**, so the weight is **`1*7 + 1*0 + 1*3 + 1*2 + 1*0 + 1*0 + 1*7`** **+** **`7*0 + 7*3 + 7*2 + 7*0 + 7*0 + 7*7`** **+** **`0*3 + 0*2 + 0*0 + 0*0 + 0*7`** **+** **`3*2 + 3*0 + 3*0 + 3*7`** **+** **`2*0 + 2*0 + 2*7`** **+** **`0*0 + 0*7`** **+** **`0*7`** = **144**.

Our task is to write a program that finds all **the magical dates - dates between two specific years (inclusive) corresponding to the weight given in the input data**. Dates must be printed in ascending order (by date) in the format "**dd-mm-yyyy**". We will only use the valid dates in the traditional calendar (the leap years have 29 days in February).

### Input Data

Input data should be read from the console. It consist of 3 lines:

   * The first line contains an integer: **start year**.
   * The second line contains an integer: **end year**.
   * The third line contains an integer: **the search weight** for the dates.

Input data will always be valid and will always be in the format described. No need to check.

### Output Data

The result should be printed on the console as consecutive dates in **"dd-mm-yyyy" format**, sorted by date in ascending order. Each string must be in a separate line. If there are no existing magic dates, print "**No**".

### Constraints

   * The start and final year are integer numbers in the range [**1900 - 2100**].
   * Magic weight is an integer in the range [**1 … 1000**].
   * Allowed program time: 0.25 seconds.
   * Allowed memory: 16 MB.

### Sample Input and Output

| Input | Output      | Input | Output      |
|------|------------|------|------------|
|2007<br>2007<br>144|17-03-2007<br>13-07-2007<br>31-07-2007|2003<br>2004<br>1500<br>|No|

| Input | Output      | Input | Output      |
|------|------------|------|------------|
|2012<br>2014<br>80|09-01-2013<br>17-01-2013<br>23-03-2013<br>11-07-2013<br>01-09-2013<br>10-09-2013<br>09-10-2013<br>17-10-2013<br>07-11-2013<br>24-11-2013<br>14-12-2013<br>23-11-2014<br>13-12-2014<br>31-12-2014|2011<br>2012<br>14<br>|01-01-2011<br>10-01-2011<br>01-10-2011<br>10-10-2011|
