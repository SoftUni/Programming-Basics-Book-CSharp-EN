# Problem: Letters Combination

Write a program that prints on the console **all combinations of 3 letters** within a specified range, by skipping the combinations **containing a certain letter**. Finally, print the number of printed combinations.

## Input Data

The input is read from the **console** and contains **exactly 3 lines**:
 * A small letter from the English alphabet for a **beginning of the range** – between **'a'** and **'z'**.
 * A small letter from the English alphabet for the **end of the range** – between the **first letter** and **'z'**.
 * A small letter from the English alphabet – from **'a'** to **'z'** – as the combinations containing this letter are **skipped**.

## Output Data

Print on a single line **all combinations** corresponding to the requirements, followed by **their number**, separated by a space.

## Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|a<br>c<br>b|aaa aac aca acc caa cac cca ccc 8|All possible combinations with letters '**а**', '**b**' and '**c**' are:<br>aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc<br>The combinations **containing 'b' are not valid**.<br>**8** valid combinations remain.|

| Input | Output |
| --- | --- |
|f<br>k<br>h|fff ffg ffi ffj ffk fgf fgg fgi fgj fgk fif fig fii fij fik fjf fjg fji fjj fjk fkf fkg fki fkj fkk gff gfg gfi gfj gfk ggf ggg ggi ggj ggk gif gig gii gij gik gjf gjg gji gjj gjk gkf gkg gki gkj gkk iff ifg ifi ifj ifk igf igg igi igj igk iif iig iii iij iik ijf ijg iji ijj ijk ikf ikg iki ikj ikk jff jfg jfi jfj jfk jgf jgg jgi jgj jgk jif jig jii jij jik jjf jjg jji jjj jjk jkf jkg jki jkj jkk kff kfg kfi kfj kfk kgf kgg kgi kgj kgk kif kig kii kij kik kjf kjg kji kjj kjk kkf kkg kki kkj kkk 125|

| Input | Output |
| --- | --- |
|a<br>c<br>z|aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc 27|

### Reading the Input Data

By requirements, we have input data on **3 lines**, each of which is represented by one character of the **ASCII table** ([https://www.asciitable.com](https://www.asciitable.com)). We could use an already **defined function** in C#, by converting the input data into **`char`** data type, as follows:

![](/assets/chapter-8-2-images/06.Letters-01.png)

### Printing All Characters from Start to End

Let's think of how we can achieve the **end result**. In case the task requirement is to print all characters, from the starting to the end one (by skipping a particular letter), what should we do? 

The easiest and most efficient way is to use a **loop**, by passing through **all characters** and printing those that are **different** from the **letter** that we need to skip. One of the advantages of C# is that we have the opportunity to use a different data type for a loop variable:

![](/assets/chapter-8-2-images/06.Letters-02.png)

The result of running the code is all letters from **a** to **z** included, printed on a single line and separated by spaces. Does this look like the end result of our task? We must find a **way** to print **3 characters**, as required, instead of **1**. Running such a program very much looks like a slot machine. We often win in slots, if we arrange a few identical characters on a row. Let's say that the machine has space for three characters. When we **stop** on a particular **character** on the first place, the other two places will **continue** rolling characters among all possible ones. In our case, **all possible characters** are the letters from the starting to the end one, entered by the user, and the solution of our program is identical to the way a slot machine works.

### Printing Combination of 3 Characters

We use a **loop** that runs through **all characters** from the starting to the end letter (included). On **each iteration** of the **first** loop, we run a **second** one with the same parameters (but **only if** the letter of the first loop is valid, i.e. does not match the one that we must exclude, by requirements). In each iteration of the **second** loop, we run **one** more with the **same parameters** and the same **condition**. This way we have three nested loops, as we will print the characters in the body of the **latter**.

![](/assets/chapter-8-2-images/06.Letters-03.png)

Let's not forget that we also need to print the **total number of valid combinations** that we have found, and they must be printed on the **same line**, separated by a space.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/517#5](https://judge.softuni.org/Contests/Practice/Index/517#5).
