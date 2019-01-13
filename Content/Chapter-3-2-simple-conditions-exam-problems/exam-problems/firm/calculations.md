#### Auxiliary Calculations

The next step is to calculate **the number of total working hours** by multiplying the working days by 8 (every working day is 8 hours long) with the number of workers and then sum them with the overtime. **The working days** equal **90% of the days** that the firm has. **The overtime** equals to the result of the multiplication of the number of workers by 2 (the possible hours of overtime) and then it is multiplied by the number of days that the firm has. From the task requirements we see that **the hours** should be **rounded down to the nearest integer**, which we will do with the method **`Math.Floor(…)`**.

![](/assets/chapter-3-2-images/05.Firm-02.png)
