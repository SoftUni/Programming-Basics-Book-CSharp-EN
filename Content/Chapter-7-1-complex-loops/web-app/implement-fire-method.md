#### Implement Fire Method

We implement the "firing" method **`Fire (position, startRow, step)`**:

![](/assets/chapter-7-images/15.Fruits-13.png)

Shooting works like this: first calculate the column number **`col`** to which the player has targeted. The input number from the scroll bar (between 0 and 100) is reduced to a number between 0 and 8 (for each of the 9 columns). Line number **`row`** is either 0 (if the shot is on top) or the number of lines minus one (if the shot is below). Accordingly, the shooting direction (step) is **1** (down) or **- 1** (upwards).

In order to find where the shot hits fruit or dynamite, go through a loop through all the cells in the playing field in the target column and from the first to the last attack row. If a fruit is hit, it disappears (replaced by **`empty`**) and points are given to the player. If the **`dynamite`** is hit, the game is marked as finished.

We left to the more enthusiastic to implement more complex behavior, for example, to give different points in the pursuit of a different fruit, to carry out animation with an explosion (this is not too easy), to take points in unnecessary firing in an empty column and so on.
