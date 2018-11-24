#### Printing the Result

Finally, what remains is to print the result in the console. According to the requirements, if the student arrived right on time (**not even a minute difference**), we do not need to print a second result. This is why we apply the following **condition**:

![](/assets/chapter-4-2-images/01.On-time-for-the-exam-08.png)

Actually, for the purposes of the task, printing the result **in the console** can be done on a much earlier stage - during the calculations. This, however, is not a very good practice. **Why?**

Let's examine the idea that our code is not 10 rows, but 100 or 1000! One day, printing the result will not be done in the console, but will be written in a **file** or displayed as a **web application**. Then, how many places in the code you will make changes at, due to such a correction? Are you sure you won't miss some places?

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Always consider the code that contains logical calculations as a separate part, different from the part that processes the input and output data. It has to be able to work regardless of how the data is passed to it and where the result will be displayed.</td></tr></table>

### Testing in the Judge System

Test your solution here:  [https://judge.softuni.bg/Contests/Practice/Index/509#0](https://judge.softuni.bg/Contests/Practice/Index/509#0).
