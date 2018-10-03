# Chapter 3.2. Simple Conditions - Exam Problems

In the previous chapter, we went through the simple conditions in C#, which we can use to execute different actions depending on a given condition. We mentioned what **the scope ** of a variable is and how to track the execution of our program step by step (the so-called **debugging**) as well. In this chapter, we will practice working with simple conditions by going through some exam tasks. To do this, let' s first revise their construction:

```csharp
if (boolean expression)
{
    // condition body;
}
else
{
    // еlse-construction body;
}
```

**`if` conditions** consist of:
 * **`if` clause**
 * boolean expression - a variable of boolean type (**`bool`**) or boolean logical expression (an expression that results in **`true/false`**)
 * condition body - contains random block of source code
 * **`else` clause** and its block of source code (**optional**)