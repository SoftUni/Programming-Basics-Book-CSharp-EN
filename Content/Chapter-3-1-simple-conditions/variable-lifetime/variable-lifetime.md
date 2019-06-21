# Variable Scope

Each variable has a range in which it exists, called **variable scope**. This range specifies where a variable can be used and how long is its **lifetime**. In the C\# language, the scope in which a variable exists, starts from the line in which we **defined it** and ends with the first closing curly bracket `}` \(of the method, the **if statement**, etc.\).

Thus, it is important to know that **any variable defined inside the body of certain `if` statement will not be available outside of it, **unless we have defined it higher in the code.

## Video: Variable Scope

Watch the video lesson about the variable scope: [https://youtu.be/J54TJBnY5vQ](https://youtu.be/J54TJBnY5vQ).

## Variable Scope – Example

In the example below, on the last line we are trying to print the variable **salary** that is defined in the **if statement**, we will get an **error** because we don't have access to it.

![](/assets/chapter-3-images/00.Variable-scope-01.png)

The above code **will not compile**, because we are trying to access a variable **out of its scope**.

