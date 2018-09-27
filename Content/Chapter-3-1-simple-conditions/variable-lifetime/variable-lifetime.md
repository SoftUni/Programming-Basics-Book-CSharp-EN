## Life of a variable

Each variable has a range in which it exists, called **variable scope**. This range specifies where a variable can be used. In the C # language, the area in which a variable exists, starts from the order in which we **defined it** and ends with the first closing curly bracket **}** (of the method, the **if construction** and etc.). For this, it is important to know that **any variable defined inside the body of `if` will not be available outside** of it unless we have defined it higher in the code.

In the example below, on the last line we are trying to print the variable **salary** that is defined in the **if construction**, we will get an **error** because we don't have access to her.

![](/assets/chapter-3-images/00.Variable-scope-01.png)
