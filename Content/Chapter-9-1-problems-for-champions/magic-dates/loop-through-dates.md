#### Loop through Dates

For loop through the dates, we will take advantage of the functionality that gives us the **`DateTime`** class in **C#**. We will define a **start date variable** that we can do using the constructor that accepts a year, month, and day. We know the year is the starting year we read from the console and the month and the day must be January and 1st respectively. In C#, the "constructor" of **`DateTime`** accepts as first argument the year, as second argument the month and as third argument the day of the month:

![](/assets/chapter-9-images/02.Magic-dates-01.png)

Once we have the start date, we want to do a **loop that runs until we exceed the final year** (or until we pass 31 December in the final year if we compare the full dates), increasing each day by 1 day.

To increase by one day in each rotation, we will use a method of **`DateTime` - `.AddDays(…)`**, which will add one day to the current date. The method will take care of us when to skip the next month, how many days there is a month and everything around the leap years.

![](/assets/chapter-9-images/02.Magic-dates-02.png)

***Caution***: Since the **`.AddDays(…)`** method returns the "new" date, it is important to assign the result, not just to call the method!

In the end, our loop may look like this:

![](/assets/chapter-9-images/02.Magic-dates-03.png)

***Note***: we can achieve the same result with a **`for` loop**, the initialization of the date goes to the first part of **`for`**, the condition is preserved and the step is the increase by 1 day.
