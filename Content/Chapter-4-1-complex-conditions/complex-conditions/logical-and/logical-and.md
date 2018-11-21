### Logical "AND"

As we saw, in some tasks we have to make **many evaluations at once**. But waht happens, whenever in order to execute some code, **more** conditions have to be executed and we **don't want to** make a **negation** (**`else`**) for every one of them? The option with nested **`if` blocks** is valid, but the code would look very **unordered** and for sure - **hard** to read and maintain.  

The logical "**AND**" (opreator **`&&`**) means a few conditions have to be **fulfiled simultaneously**. The following table of thruthfulness is applicable:

|a|b|a && b|
|-----|-----|-----|
|true<br>true<br>false<br>false|true<br>false<br>true<br>false|true<br>false<br>false<br>false|