#### Visualize Fruits

Drawing Fruits in **`Index.cshtml`**:

In order to **draw the playing field** with the fruits, we need to rotate **two nested loops** (for rows and columns). Each row consists of 9 images, each of which contains **`apple`**, **`banana`** or other fruit, or empty **`empty`**, or **`dynamite`**. Images are drawn by printing an HTML tag to insert a picture of the type **`<img src = "/images/apple.png" />`**. Nine pictures are stacked one after the other on each row, followed by a new line with a **`<br>`**. This is repeated three times for the three lines. Finally, the player's points are printed. Here is how **the code** for drawing the playing field and points looks:

![](/assets/chapter-7-images/15.Fruits-09.png) 

Take a look at the yellow characters **`@`** - they serve to switch between the **C#** and **HTML** languages and come from the **Razor** syntax for drawing dynamic web pages.
