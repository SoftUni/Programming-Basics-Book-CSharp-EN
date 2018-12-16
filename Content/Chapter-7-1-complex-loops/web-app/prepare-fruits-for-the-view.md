#### Prepare Fruits for the View

Now we have to prepare the fruits for drawing in the view. Add the following code to the controller: **`Controllers/HomeController.cs`**:

![](/assets/chapter-7-images/15.Fruits-06.png) 

The above code defines the fields for **number of rows, number of columns**, **fruit table** (playing field), **points** accumulated by the player and information whether the game is active or **ended** (field **`gameOver`**). The playing field has 9 columns in 3 rows and contains for each field text what is in it: **`apple`, `banana`, `orange`, `kiwi`, `empty` or `dynamite`**.
The main action **`Index ()`** prepares the game field by recording in the **`ViewBag`** the structure of the game elements and invoking the view that draws them into the game page of the web browser as HTML.
