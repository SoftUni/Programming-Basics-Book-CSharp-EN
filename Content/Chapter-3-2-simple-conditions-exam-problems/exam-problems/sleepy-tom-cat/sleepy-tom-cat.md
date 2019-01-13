## Problem: Sleepy Tom Cat

**Tom Cat** likes to sleep all day but, unfortunately, his owner is always playing with him whenever he has free time. In order to sleep well, **the norm of games** that Tom has is **30 000 minutes per year**. The time for games he has **depends on the holidays that his owner has**:
* During **work days**, his owner plays with him **63 minutes per day**. 
* During **holidays**, his owner plays with him **127 minutes per day**. 

Write a program that receives **the number of holidays** and prints whether **Tom can sleep well** and how much **the difference from the norm** for the current year is. It is accepted that **there are 365 days in one year**. 
   
 
**Example**: 20 holidays -> the working days are 345 (365 - 20 = 345). The time for games is 24 275 minutes (345 \* 63 + 20 \* 127). The difference from the norm is 5 725 minutes (30 000 – 24 275 = 5 725) or 95 hours and 25 minutes.

### Input Data

The input is read from the console and consists of an integer - **the number of holidays** in the range of [**0 … 365**].

### Output Data

**Two lines** have to be printed on the console: 
* If Tom's time for games **is above the norm** for the current year: 
  * **On the first line** print: **“Tom will run away”**
  * **On the second line** print the difference from the norm in the format:  
   **“{H} hours and {M} minutes more for play”**
* If the time for games of Tom **is below the norm** for the current year:
  * **On the first line** print: **“Tom sleeps well”**
  * **On the second line** print the difference from the norm in the format:  
   **“{H} hours and {M} minutes less for play”**

### Sample Input and Output

| Input | Output | Input | Output |
|----|-----|----|-----|
|20|Tom sleeps well<br>95 hours and 25 minutes less for play|113|Tom will run away<br>3 hours and 47 minutes for play|
