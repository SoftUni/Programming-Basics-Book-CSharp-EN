### Signature and Return Value Type

It is important to say that **the return type as a result** of the method **is not a part of its signature**. If the return type was a part of the signature, then the compiler doesn't know which method exactly to invoke.

Let's look at the following example - we have two methods with different return types. Despite that Visual Studio shows that there is a mistake, because both of their signatures are the same. Therefore when trying to invoke a method named **`Print(…)`**, the compiler can't know which of the two methods to run.

![](/assets/chapter-10-images/17.Method-overloading-02.png)