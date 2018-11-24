#### Checking If the Student Arrived on Time or They Were Late

Our next step is to do the required **checks and calculations**, and finally we will print the output. Let's separate the code into **two** parts: 

- First, let's show when the student arrived - were they **early**, **late** or **on time**. In order to do that, we will use an **`if-else`** statement. 
- After that, we will show the **time difference**, if the student arrives in a **different time** compared to the **exam starting time**.

In order to spare one additional check (**`else`**), we can, by default, assume that the student was late. 

After that, according to the condition, we will check whether the difference in times is **more than 30 minutes**. If this is true, we assume that the student is **early**. If we do not match the first condition, we need to check if **the difference is less than or equal to zero (**`<= 0`**)**, by which we are checking the condition whether the student arrived within the range of **0 to 30 minutes** before the exam. 

In all other cases we assume that the student **was late**, which we set as **default**, and no additional check is needed.

![](/assets/chapter-4-2-images/01.On-time-for-the-exam-06.png)
