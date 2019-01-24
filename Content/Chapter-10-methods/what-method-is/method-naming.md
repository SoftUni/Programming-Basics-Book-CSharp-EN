# Naming Methods

When you name a method it is good to use **meaningful names**. Because every method **answers** for a part of our problem, when naming it we should keep in mind **the action it does**, i.e. it is a good practice for **the name to describe what the method does**.

The name must start with **uppercase** and should be made of a verb or a couple: verb + noun. The name is formatted by following the **Upper Case Camel** convention, i.e. **each word, including the first, starts with uppercase**. The brackets **`( `** and **`)`** always follow the name. 

Each method must do one task and its name should describe what its function is. 

A few examples for **correctly** naming our methods:
* **`FindStudent`**
*	**`LoadReport`**
*	**`Sine`**

A few examples for **incorrectly** naming our methods:
*	**`Method1`**
*	**`DoSomething`**
*	**`HandleStuff`**
*	**`SampleMethod`**
*	**`DirtyHack`**

If you can not think of a good name then the method most probably solves more than one task or doesn't have a clearly defined purpose and in this case you have to think how to divide it in several simpler methods.

## Naming Method Parameters 

When naming **the parameters** of a method you can apply almost the same rules as with the methods themselves. The difference here is that it is good for the names of the parameters to use a noun or a couple of an adjective and a noun, and when naming the parameters we use the **`lowerCamelCase`** convention, i.e. **each word except for the first one starts with uppercase**. We should note that it is good practice that the name of the parameter **shows** what **unit**is used when working with it.

A few examples for **correctly** named parameters:
* **`firstName`**
*	**`report`**
*	**`speedKmH`**
*	**`usersList`**
*	**`fontSizeInPixels`**
*	**`font`**

A few examples for **incorrectly** named parameters:
*	**`p`**
*	**`p1`**
*	**`p2`**
* **`populate`**
* **`LastName`**
* **`last_name`**
