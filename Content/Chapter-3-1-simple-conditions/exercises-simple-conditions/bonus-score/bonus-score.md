### Problem: Bonus Score

We have an **integer** - the number of points. **Bonus score** are charged on it, according to the rules described below. Write a program that calculates **bonus score** for this figure and **total points** with bonuses.

- If the number is **up to 100** including, bonus score is 5.
- If the number is **larger than 100**, bonus score is **20%** of the number.
- If the number is **larger than 1000**, bonus score is **10%** of the number.
- Additional bonus score (accrued separately from the previous ones):
- for **even** number -> + 1 p.
- for number, that **ends with 5** -> + 2 p.
 
#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 20 | 6<br>26 |
| 175 | 37<br>212 |
| 2703 | 270.3<br>2973.3 |
| 15875 | 1589.5<br>17464.5 |
