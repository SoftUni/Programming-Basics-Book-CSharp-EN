### How the && Operator Works?

The **`&&`** operator accepts **a couple of boolean** (conditional) statements, which have a **`true`** or **`false`** value, and returns **one** boolean statement as a **result**. Using it **instead** of a couple of nested **`if`** blocks, makes the code **more readable**, **ordered** and **easy** to maintain. But how does it **work**, when we put a **few** conditions one after another? As we saw above, the logical **"AND"** returns **`true`**, **only** when it accepts as **arguments statements** with value **`true`**. Respectively, when we have a **sequence** of arguments, the logical "AND" **checks** either until one of the arguments is **over**, or until it **meets** an argument with value **`false`**. 

**Example**:

```csharp
bool a = true;
bool b = true;
bool c = false;
bool d = true;
bool result = a && b && c && d;
// false (as d is not being checked)
```

The program will run in the **folowing** way: **It starts** the check form **`а`**, **reads** it and accepts that it has a **`true`** value, after which it **checks** **`b`**. After it has **accepted** that **`a`** and **`b`** return **`true`**, **it checks the next** arguement. It gets to **`c`** and sees that the variable has a **`false`** value. After the program accepts that the agrument **`c`** has a **`false`** value, it calculates the expression **before `c`**, **independent** of what the value of **`d`** is. That is why the evaluation of **`d`** is being **skipped** and the whole expression is calculated as **`false`**.

![](/assets/chapter-4-images/00.Logical-and-01.png)
