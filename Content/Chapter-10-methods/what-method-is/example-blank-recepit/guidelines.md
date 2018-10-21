#### Hints and Guidelines

The first step is to create a **`void`** method to **print the upper part** of the receipt (header). Let's give it a meaningful name, which describes what the method does, e.g. **`PrintReceiptHeader`**. In its body write the code from the example below:

![](/assets/chapter-10-images/04.Print-receipt-01.png)

In the same way we'll create two more methods **to print the middle part** of the receipt (body) **`PrintReceiptBody`** and **to print the lower part** of the receipt (footer) **`PrintReceiptFooter`**.

After this we will create **another method** , which will invoke the three methods we already wrote, one after the other:

![](/assets/chapter-10-images/04.Print-receipt-02.png)

In the end we'll **invoke** the **`PrintReceipt`** method from the body of the **`Main`** method of our program:

![](/assets/chapter-10-images/04.Print-receipt-03.png)

#### Testing in the Judge System

The program with five methods, which invoke each other, is ready and we can **run and test it**, after which we can send it for testing in the judge system: [https://judge.softuni.bg/Contests/Practice/Index/594#0](https://judge.softuni.bg/Contests/Practice/Index/594#0).
