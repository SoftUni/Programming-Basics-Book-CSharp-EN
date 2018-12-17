#### Problem Analysis

In tasks requiring **drawing** in the console, most often the user inputs **an integer** that is related to the **total size of the figure** that we need to draw. As the task requirements mention how the total length and width of the figure are calculated, we can use them as **starting points**. In the examples it is clear that regardless of the input data, we always have **first two rows** that are almost identical.

<code>......./\|\\.......</code><br><code>.......\\\|/.......</code>

We also notice that the **last three rows** are always present, as **two** of them are completely **the same**.

<code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br><code>\*.\*.\*.\*.\*.\*.\*.\*.\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code>

By these observations we can come up with the **formula** for the **height of the variable part** of the Christmas hat. We use the formula specified in the task to calculate the total height, by subtracting the size of the unchangeable part. We receive **`(2 * n + 5) – 5`** or **`2 * n`**.
