#### Creating Helper Variables

For the goals of our task we need two variables:
* One variable where we will store the **current output**.
* One variable where we will store the **current operator** of our expression.

![](/assets/chapter-9-2-images/02.X-expression-04.png)

We will clarify two details regarding the aforementioned code. The first one is the use of **`decimal`** type for **storing the output of our expression** in order to avoid any problems with the accuracy pertaining to the **`float`** and **`double`** type. The second one is the default value of the operator - it is **`+`**, so that the very first number can be added to our output.
