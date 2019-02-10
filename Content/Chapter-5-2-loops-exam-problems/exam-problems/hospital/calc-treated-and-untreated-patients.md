#### Calculating the Number of Treated and Untreated Patients

![](/assets/chapter-5-2-images/04.Hospital-02.png)

With the help of a **`for` loop** we iterate through all days in the given period (**`period`**). For each day, we read from the console the number of the patients (**`currentPatients`**). Increasing doctors by requirements can be done **every third day**, **BUT** only if the count of untreated patients is **greater** than the count of treated ones. For this purpose, we check if the day is third one – with the arithmetical operator for division with remainder (**`%`**): **`day % 3 == 0`**.

For example:
 * If the day is **third one**, the remainder of the division by **3** will be **0** (**`3 % 3 = 0`**) and the check **`day % 3 == 0`** will return **`true`**.
 * If the day is **second one**, the remainder of the division by **3** will be **2** (**`2 % 3 = 2`**) and the check will return **`false`**.
 * If the day is **forth one**, the remainder of the division will be **1** (**`4 % 3 = 1`**) and the check will return again **`false`**.

If **`day % 3 == 0`** returns **`true`**, the system will check whether the count of untreated patients is greater than the count of treated ones: **`untreatedPatients > treatedPatients`**. If the result is again **`true`**, then the count of doctors will be increased (**`countOfDoctors`**).

Then we check if the count of the patients for the day (**`currentPatients`**) is greater than the count of doctors (**`countOfDoctors`**). If the count of the patients is **greater**:
- Increase the value of the variable **`treatedPatients`** by the count of doctors (**`countOfDoctors`**).
- Increase the value of the variable **`untreatеdPatients`** by the count of the remaining patients, which we calculate by subtracting the count of doctors from the count of patients (**`currentPatients - countOfDoctors`**).
 
If the count of patients **is not greater**, increase only the variable **`treatedPatients`** with the count of patients for the day (**`currentPatients`**).

Finally we need to print the count of treated and count of untreated patients.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/511#3](https://judge.softuni.org/Contests/Practice/Index/511#3).
