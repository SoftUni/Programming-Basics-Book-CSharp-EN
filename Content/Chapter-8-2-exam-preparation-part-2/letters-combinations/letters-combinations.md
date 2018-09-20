## Problem: комбинации от букви

Напишете програма, която да принтира на конзолата **всички комбинации от 3 букви** в зададен интервал, като се пропускат комбинациите, **съдържащи зададена от конзолата буква**. Накрая трябва да се принтира броят отпечатани комбинации.

### Input Data

Входът се чете от **конзолата** и съдържа **точно 3 реда**:
* Малка буква от английската азбука за начало на интервала – от **'a'** до **'z'**.
* Малка буква от английската азбука за край на интервала – от **първата буква** до **'z'**.
* Малка буква от английската азбука – от **'a'** до **'z'** – като комбинациите, съдържащи тази буква се пропускат.

### Output Data

Да се отпечатат на един ред **всички комбинации**, отговарящи на условието, следвани от **броя им**, разделени с интервал.

### Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|a<br>c<br>b|aaa aac aca acc caa cac cca ccc 8|Всички възможни комбинации с буквите '**а**', '**b**' и '**c**' са:<br>aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc<br>Комбинациите, **съдържащи 'b', не са валидни**.<br>Остават **8** валидни комбинации.|

| Input | Output |
| --- | --- |
|f<br>k<br>h|fff ffg ffi ffj ffk fgf fgg fgi fgj fgk fif fig fii fij fik fjf fjg fji fjj fjk fkf fkg fki fkj fkk gff gfg gfi gfj gfk ggf ggg ggi ggj ggk gif gig gii gij gik gjf gjg gji gjj gjk gkf gkg gki gkj gkk iff ifg ifi ifj ifk igf igg igi igj igk iif iig iii iij iik ijf ijg iji ijj ijk ikf ikg iki ikj ikk jff jfg jfi jfj jfk jgf jgg jgi jgj jgk jif jig jii jij jik jjf jjg jji jjj jjk jkf jkg jki jkj jkk kff kfg kfi kfj kfk kgf kgg kgi kgj kgk kif kig kii kij kik kjf kjg kji kjj kjk kkf kkg kki kkj kkk 125|

| Input | Output |
| --- | --- |
|a<br>c<br>z|aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc 27|
