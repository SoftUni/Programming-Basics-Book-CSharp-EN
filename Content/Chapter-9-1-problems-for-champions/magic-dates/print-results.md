### Printing the Output

Once we have the weight calculated of a given date, we need **to check to see if it matches the magical weight we want** to know if it should be printed or not. Checking can be done with a standard **`if`** block, taking care to print the date in the correct format.

![](/assets/chapter-9-images/02.Magic-dates-06.png)

To print the dates, we have two options:

   * The first way is to use the **`.ToString(…)`** method, where we can **submit the date format**, i.e. whether the days to be printed with a leading zero or not, whether the months to be printed with leading zeros or not, with words or digits, with a short or full name, etc.

![](/assets/chapter-9-images/02.Magic-dates-07.png)

   * The second option is to take the individual components of the date **`Day`**, **`Month`** и **`Year`** as we did when calculating and to form the output by **formatting string**.

![](/assets/chapter-9-images/02.Magic-dates-08.png)

***Caution***: as we go through the dates from the start year to the end, they will always be arranged in ascending order as per description.

Finally, if we have not found a date that is eligible, we will have a **`false`** value in the **`found`** variable and we will be able to print **`No`**.

![](/assets/chapter-9-images/02.Magic-dates-09.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/518#1](https://judge.softuni.bg/Contests/Practice/Index/518#1).
