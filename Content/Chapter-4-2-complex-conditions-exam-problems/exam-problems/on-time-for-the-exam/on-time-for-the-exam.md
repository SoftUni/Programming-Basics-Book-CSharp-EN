## Problem: On Time for the Exam

A student has to attend **an exam at a particular time** (for example at 9:30 am). They arrive in the exam room at a particular **time of arrival** (for example 9:40 am). It is considered that the student has arrived **on time**, if they have arrived **at the time when the exam starts or up to half an hour earlier**. If the student has arrived **more than 30 minutes earlier**, the student has come **too early**. If they have arrived **after the time when the exam starts**, they are **late**. 

Write a program that inputs the exam starting time and the time of student's arrival, and prints if the student has arrived **on time**, if they have arrived **early** or if they are **late**, as well as **how many hours or minutes** the student is early or late.

### Input Data

Read the following **four integers** (one on each row) from the console:

- The first row contains **exam starting time (hours)** – an integer from 0 to 23.
- The second row contains **exam starting time (minutes)** – an integer from 0 to 59.
- The third row contains **hour of arrival** – an integer from 0 to 23.
- The fourth row contains **monutes of arrival** – an integer from 0 to 59.

### Output Data

Print the following on the first row:

- "**Late**", if the student arrives **later** compared to the exam starting time.
- "**On time**", if the student arrives **exactly** at the exam starting time or up to 30 minutes earlier.
- "**Early**", if the student arrives more than 30 minutes **befire** the exam starting time.

If the sturent arrives with more than one minute difference compared to the exam starting time, print on the next row:

- "**mm minutes before the start**" for arriving less than an hour earlier.
- "**hh:mm hours before the start**" for arriving 1 hour or more earlier. Always print minutes using 2 digits, for example "1:05".
- "**mm minutes after the start**" for arriving more than an hour late.
- "**hh:mm hours after the start**" for arriving late with 1 hour or more. Always print minutes using 2 digits, for example "1:03".

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|9<br>30<br>9<br>50|Late<br>20 minutes after the start|16<br>00<br>15<br>00|Early<br>1:00 hours before the start|
|9<br>00<br>8<br>30|On time<br>30 minutes before the start|9<br>00<br>10<br>30|Late<br>1:30 hours after the start|
|14<br>00<br>13<br>55|On time<br>5 minutes before the start|11<br>30<br>8<br>12|Early<br>3:18 hours before the start|


| Input | Output | 
| --- | --- |
|10<br>00<br>10<br>00|On time|
|11<br>30<br>10<br>55|Early<br>35 minutes before the start|
|11<br>30<br>12<br>29|Late<br>59 minutes after the start|
