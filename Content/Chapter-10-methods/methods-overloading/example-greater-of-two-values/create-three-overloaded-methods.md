#### Creating the Methods

We need to create three methods with the same name and different signatures. First we create a method, which will compare integers.

![](/assets/chapter-10-images/18.Greater-of-two-values-01.png)

Following the logic of the previous method we create another one with the same name, but this one will compare characters.

![](/assets/chapter-10-images/18.Greater-of-two-values-02.png)

The next method we need to create will compare strings. The logic here is a bit different from the previous two methods because variables of type **`string`** can not be compared with the operators **`<`** and **`>`**. We will use the method **`CompareTo(…)`**, which returns a numerical value: larger than 0 (the compared object is larger), smaller than 0 (the compared object is smaller) and 0 (the two objects are the same).

![](/assets/chapter-10-images/18.Greater-of-two-values-03.png)
