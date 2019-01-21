#### Adding the DrawRatings Method

Add a method **`DrawRatings`** in the controller **`HomeController`**. Open the file **`Controllers/HomeController.cs`** and add the following code:

![](/assets/chapter-6-images/11.Ratings-05.png)

The above code takes the number **`rating`**, makes some calculations to find the number of **full stars**, the number of **empty stars** and the number of **half-full stars**, after which it generates an HTML code, which orders a few pictures of stars one after the other so that it can make the rating picture from them. The ready HTML code is stored in **`ViewBag.Stars`** to visualize the view **`Index.cshtml`**. Additionally the sent rating is kept (as a number) in **`ViewBag.Rating`**, so that it can be put in the field for rating in the view. In order to ease your work, you can help yourself with the picture of Visual Studio below:

![](/assets/chapter-6-images/11.Ratings-06.png)
