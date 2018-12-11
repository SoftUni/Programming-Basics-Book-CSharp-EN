### Problem: Bricks

Construction workers have to transfer a total of **x bricks**. **Workers** are **w** and work simultaneously. They transport the bricks in trolleys, each with a **capacity of m** bricks. Write a program that reads the integers **x**, **w**, and **m**, and calculates **how much less courses** the workers need to do to transport the bricks.

#### Input

The console reads **3 integers** (one per line):
- **The number of bricks x** is read from the first row.
- **The number of workers w** is read from the second row
- **The capacity of the trolley m** is read from the third row.

All input numbers are integers in the range [**1 … 1000**].

#### Output

Print on the console **the minimum number of courses** needed to transport the bricks.

#### Sample Input and Output

| Input | Output | Comments |
|----|----|----|
|120<br>2<br>30|2|We have **2** workers, each riding on **30** bricks per course. In total, workers are riding **60** bricks per course. To transport **120** bricks, exactly **2** courses are needed.|

| Input | Output | Comments |
|----|----|----|
|355<br>3<br>10|12|We have **3** workers, each riding on **10** bricks per course. In total, workers are riding **30** bricks per course. To transport **355** bricks, exactly **12** courses are needed: **11** complete courses carry **330** bricks and the last **12th** course carries the last **25** bricks.|

| Input | Output | Comments |
|----|----|----|
|5<br>12<br>30|1|We have **5** workers, each riding on **30** bricks per course. In total, workers are riding **150** bricks per course. In order to transport **5** bricks, only **1** course is sufficient (although incomplete, with only 5 bricks).|
