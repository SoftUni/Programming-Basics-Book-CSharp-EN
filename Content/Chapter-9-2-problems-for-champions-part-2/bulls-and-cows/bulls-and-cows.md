## Problem: Bulls and Cows

We all know the game called "Bulls and Cows" ([http://en.wikipedia.org/wiki/Bulls_and_cows](http://en.wikipedia.org/wiki/Bulls_and_cows)). Upon having a particular 4-digit **secret number** and a 4-digit **suggested number**, the following rules are applied:
* If a digit in the suggested number matches a digit in the secret number and is located at the **same position**, we have a ***bull***.
* If a digit in the suggested number matches a digit in the secret number, but is located at a **different position**, we have a ***cow***.

| Secret number         | 1 | 4 | 8 | 1 |Comment|
|:-------------------:|:---:|:---:|:---:|:---:|:--------------------------:|
| Suggested number | 8 | 8 | 1 | 1 | Bulls = 1<br>Cows = 2  |

| Secret number         | 2 | 2 | 4 | 1 |Comment|
|:-------------------:|:---:|:---:|:---:|:---:|:-------------------------:|
| Suggested number | 9 | 9 | 2 | 4 | Bulls = 0<br>Cows = 2 |

Upon having a particular secret number and the bulls and cows pertaining to it, our task is **to find all possible suggested numbers** in ascending order.

If there are **no suggested numbers** that match the criteria provided from the console, we must print "**No**".

### Input Data

The input data is read from the console. The input consists of 3 rows:
* The first row contains **the secret number**.
* The second row contains **the number of bulls**.
* The third row contains **the number of cows**.

The input data will always be valid. There is no need to verify them.

### Output Data

The output data must be printed on the console.
The output must consist of **a single row** – **all suggested numbers**, space separated.
If there are **no suggested numbers** that match the criteria provided from the console, we must **print “No”**.

### Constraints

- The secret number will always consist of **4 digits in the range** [**1..9**].
- The number of **cows and bulls** will always be in the range [**0..9**].
- Allowed execution time: **0.15 seconds**.
- Allowed memory: **16 MB**.

### Sample Input and Output

| Input           | Output        |
|--------------|------------|
| 2228<br>2<br>1 | 1222 2122 2212 2232 2242 2252 2262 2272 2281 2283 2284 2285 2286 2287 2289 2292 2322 2422 2522 2622 2722 2821 2823 2824 2825 2826 2827 2829 2922 3222 4222 5222 6222 7222 8221 8223 8224 8225 8226 8227 8229 9222 |

| Input           | Output        |
|--------------|------------|
| 1234<br>3<br>0 | 1134 1214 1224 1231 1232 1233 1235 1236 1237 1238 1239 1244 1254 1264 1274 1284 1294 1334 1434 1534 1634 1734 1834 1934 2234 3234 4234 5234 6234 7234 8234 9234 |

| Input           | Output        |
|--------------|------------|
| 1234<br>3<br>1 | No           |
