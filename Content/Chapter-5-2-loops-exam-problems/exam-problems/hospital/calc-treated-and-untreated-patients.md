#### Calculating treated and untreated patients

![](/assets/chapter-5-2-images/04.Hospital-02.png)

With the help of **`for` loop** we iterate through all days in the given period (**`period`**). For every day we read from the console the count of the patients (**`currentPatients`**). Increasing doctors by condition can be done **every third day**, **BUT** only if the count of untreated patients is **greater** than the count of treated. For this purpose, we check if the day is third - with the arithmetical operator for division with remainder (**`%`**): **`day % 3 == 0`**.

For Example:
 * If the day is **third**, remainder of the division by **3** will be **0** (**`3 % 3 = 0`**) and the check **`day % 3 == 0`** will return **`true`**.
 * If the day is **second**, remainder of the division by **3** will be **2** (**`2 % 3 = 2`**) and the check will return **`false`**.
 * If the day is **forth**, remainder of the division will be **1** (**`4 % 3 = 1`**) and the check will return again **`false`**.

If **`day % 3 == 0`** return **`true`**, it will be checked whether the count of untreated patients is greater than the count of treated: **`untreatedPatients > treatedPatients`**. If the result is again **`true`**, then the count of doctors will be increased (**`countOfDoctors`**).

Then we check if the count of the patients for the day (**`currentPatients`**) is greater than the count of doctors (**`countOfDoctors`**). If the count of the patiens is **greater**:
 - Increase value of the variable **`treatedPatients`** with the count of doctors (**`countOfDoctors`**).
 - Increase value of the variable **`untreatеdPatients`** with the count of the remaining patients, which we calculate, by subtracting count of  doctors from count of patients (**`currentPatients - countOfDoctors`**).
 
If the count of patients **is not greater**, increase only the variable **`treatedPatients`** with the count of patients for the day (**`currentPatients`**).

Finally we need to print the count of treated and count of untreated patients.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/511#3](https://judge.softuni.bg/Contests/Practice/Index/511#3).
