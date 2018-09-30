#### Printing the Upper Part of the Sign

In order to draw the rows in which the sign is getting **"wider"**, we need to create **a loop**, which recurs **`n`** times. The structure of a row contains a beginning **`.`**, **`//`** + middle **`_`** + **`\\`** and an end **`.`**. In order to reuse the already created **variables**, we need to decrease **`dots`** by 1 and **`underscopes`** with 2, because we have already **printed** the first row, and the dots and underscopes in the upper part of the figure are **decreasing**. 

![](/assets/chapter-6-2-images/03.Stop-05.png)
		
In each following iteration **the beginning** and **the end** decrease by 1, and the **middle** increases by 2.

![](/assets/chapter-6-2-images/03.Stop-06.png)