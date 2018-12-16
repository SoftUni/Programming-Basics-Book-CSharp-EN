#### Implement Game Over

For now, at **"End of the game"** nothing happens. If a player reaches dynamite, the controller says that the game is over **(`gameOver = true`)**, but this fact is not visualized in any way. In order for the game to finish, we need to add several checks in the view:

![](/assets/chapter-7-images/15.Fruits-14.png)

![](/assets/chapter-7-images/15.Fruits-15.png)

The code above checks whether the game has finished and indicates accordingly the shooting controls and the playing field (active game) or exploding fruit picture at the end of the game.
