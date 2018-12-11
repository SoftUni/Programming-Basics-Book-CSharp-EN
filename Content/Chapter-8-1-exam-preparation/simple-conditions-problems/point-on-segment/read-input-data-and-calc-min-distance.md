#### Reading the Input Data and Calculate the Minimal Distance to the Closest End of the Segment

We read the input from the console.

![](/assets/chapter-8-1-images/03.Point-on-segment-04.png)

Since we do not know which **point** is on the left and which is on the right, we will make two variables to note this. Since the **left point** is always the one with the smaller **x coordinate**, we will use **`Math.Min(…)`** to find it. Accordingly, **the right one** is always the one with a larger **x coordinate** and we will use **`Math.Max(…)`**. We will also find the distance from **point x** to **the two points**. Because we do not know their position relative to each other, we will use **`Math.Abs(…)`** to get a positive result.

![](/assets/chapter-8-1-images/03.Point-on-segment-05.png)

The shorter of the two **distances** we can found using **`Math.Min(…)`**.

![](/assets/chapter-8-1-images/03.Point-on-segment-06.png)
