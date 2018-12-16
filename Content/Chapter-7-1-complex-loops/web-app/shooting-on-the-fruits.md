#### Shooting on the Fruits

For the fruit shooting, we need to add the actions [**Reset**] and [**Fire Top**] / [**Fire Bottom**] to the controller **`HomeController.cs`**:

![](/assets/chapter-7-images/15.Fruits-12.png) 

The above code defines three actions:
   * **`Reset()`** - starts a new game by generating a new random playing field with fruits and explosives, resetting the player's points and making the game valid **(`gameOver = false`)**. This action is pretty simple and can be immediately tested with [**Ctrl + F5**] before writing the other ones.
   * **`FireTop (position)`** - shoots on row **0** at position **`position`** (number 0 to 100). The shooting is in direction **down** (+1) from row **`0`** (top). Shooting itself is more complicated as a logic and will be considered after a while.
   * **`FireBottom (position)`** - shoots on row **2** at position **`position`** (number 0 to 100). The shooting is in direction **up** (-1) from row **2** (bottom).
