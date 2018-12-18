#### Calculate Weight

Calculating the weight is simply **going through the unique word** (**`word`**) obtained in the last step, and for each letter we need to take its weight and multiply it by the position. For each letter, we need to calculate how much we will multiply its position, for example by using the **`switch`** construction.

![](/assets/chapter-9-images/03.Five-special-letters-07.png)

Once we have the value of that letter, we should **multiply it by its position**. Because the indexes in the string differ by 1 from the actual positions, i.e. index 0 is position 1, index 1 is position 2, etc., we will add 1 to the indexes.

![](/assets/chapter-9-images/03.Five-special-letters-08.png)

All intermediate results obtained must be added to the **total amount for each letter of the 5-letter combination**.
