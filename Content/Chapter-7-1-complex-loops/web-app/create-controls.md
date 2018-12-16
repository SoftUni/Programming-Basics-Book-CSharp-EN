#### Create Controls

Now we will create the controls for the game. The goal is to add **scrolling bars** with which the player is targeting, and a button for starting a **new game**. So we need to edit the file **`Views/Home/Index.cshtml`**. We delete everything in it and write the code from the picture:
  
![](/assets/chapter-7-images/15.Fruits-05.png) 

This code creates a webform **`<form>`** with a scroller **`position`** for setting a number in the range [**0 … 100**] and a button [**Fire Top**] for sending the form data to the server. The action that will process the data is called **`Home/FireTop`**, which means method **`FireTop`** in the **`Home`** controller, which is located in the file **`HomeController.cs`**. There are two similar forms with the [**Fire Bottom**] and [**New Game**] buttons.
