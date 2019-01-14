## Problem: Hotel Room

A hotel offers **two types of rooms**: **studio and apartment**.

Write a program that calculates **the price of the whole stay for a studio and apartment**. **Prices** depend on the **month** of the stay:

| **May and October** | **June and September** | **July and August** |
| --- | --- | --- |
|Studio – **50** BGN/per night|Studio – **75.20** BGN/per night|Studio – **76** BGN/per night|
|Apartment – **65** BGN/per night|Apartment – **68.70** BGN/per night|Apartment – **77** BGN/per night|

The following **discounts** are also offered:

- For a **studio**, in case of **more than 7** stays in **May and October**: **5% discount**.
- For a **studio**, in case of **more than 14** stays in **May and October**: **30% discount**.
- For a **studio**, in case of **more than 14** stays in **June and September**: **20% discount**.
- For an **apartment**, in case of **more than 14** stays, **no limitation regarding the month: 10% discount**.

### Input Data

The input data is read from the **console** and contains **exactly two rows**:

- The **first** row contains the **month** – **May**, **June**, **July**, **August**, **September** or **October**.
- The **second** row is the **number of stays** – **integer within the range** [**0 … 200**].

### Output Data

**Print** the following **two rows** in the console:

- On the **first row**: "**Apartment: { price for the whole stay } lv**".
- On the **second row**: "**Studio: { price for the whole stay } lv**".

**The price for the whole stay must be formatted up to two symbols after the decimal point**.

### Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|May<br>15|Apartment: 877.50 lv.<br>Studio: 525.00 lv.| In **May**, in case of more than **14 stays**, the discount for a **studio is 30%** (50 – 15 = 35), and the **apartment – 10%** (65 – 6.5 =58.5).<br>The whole stay in the **apartment – 877.50** lv.<br>The whole stay **in the studio  – 525.00** lv.|

| Input | Output |
| --- | --- |
|June<br>14|Apartment: 961.80 lv.<br>Studio: 1052.80 lv|
|August<br>20|Apartment: 1386.00 lv.<br>Studio: 1520.00 lv.|
