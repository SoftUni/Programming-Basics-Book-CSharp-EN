#### Generate Random Fruits

We need to generate random fruits. To do this, we need to write a **`GenerateRandomFruits()`** method with the code from the image below. This code records in the matrix **`fruits`** names of different images and thus builds the playing field. Each cell of the table records one of the following values: **`apple`,`banana`, `orange`,` kiwi`, `empty` or  `dynamite`**. Next, to draw the corresponding image in the view, the text of the table will be merged with **`.png`** and this will give the name of the picture file that has to be inserted into the HTML page as part of the playing field. Filling in the playing field (9 columns with 3 rows) happens in the view **`Index.cshtml`** with two nested **`for`** loops (for row and column).

In order to generate random fruit for each cell, a **random number** is generated between 0 and 8 (see the class **`Random`** in .NET). If the number is 0 or 1, we place **`apple`**, if it is between 2 and 3, we place **`banana`** and so on. If the number is 8, we place **`dynamite`**. So the fruits appear twice as often as the dynamite. Here's the code:

![](/assets/chapter-7-images/15.Fruits-07.png) 
