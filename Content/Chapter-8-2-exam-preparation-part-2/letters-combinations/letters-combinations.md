## Problem: Letters Combination

Write a program that prints in the console **all combinations of 3 letters** within a specified range, by skipping the combinations **containing a letter set from the console**. Finally, print the number of printed combinations.

### Input Data

The input is read from the **console** and contains **exactly 3 rows**:
* A small letter from the English alphabet for a beginning of the range – between **'a'** and **'z'**.
* A small letter from the English alphabet for the end of the range – between the **first letter** and **'z'**.
* A small letter from the English alphabet – from **'a'** to **'z'** – as the combinations containing this letter are skipped.

### Output Data

Print on one row **all combinations** corresponding to the requirements, followed by **their number**, separated by an interval.

### Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|a<br>c<br>b|aaa aac aca acc caa cac cca ccc 8|All possible combinations with letters '**а**', '**b**' and '**c**' are:<br>aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc<br>The combinations **containing 'b' are not valid**.<br>**8** valid combinations remain.|

| Input | Output |
| --- | --- |
|f<br>k<br>h|fff ffg ffi ffj ffk fgf fgg fgi fgj fgk fif fig fii fij fik fjf fjg fji fjj fjk fkf fkg fki fkj fkk gff gfg gfi gfj gfk ggf ggg ggi ggj ggk gif gig gii gij gik gjf gjg gji gjj gjk gkf gkg gki gkj gkk iff ifg ifi ifj ifk igf igg igi igj igk iif iig iii iij iik ijf ijg iji ijj ijk ikf ikg iki ikj ikk jff jfg jfi jfj jfk jgf jgg jgi jgj jgk jif jig jii jij jik jjf jjg jji jjj jjk jkf jkg jki jkj jkk kff kfg kfi kfj kfk kgf kgg kgi kgj kgk kif kig kii kij kik kjf kjg kji kjj kjk kkf kkg kki kkj kkk 125|

| Input | Output |
| --- | --- |
|a<br>c<br>z|aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc 27|
