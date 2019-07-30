# Problem: Notifications

Write a program, which takes an integer **`n`** and **`n` input messages** and prints **`n` output messages**, based on the input. For each message read a few lines. Each message starts with **`messageType`**: “**`success`**”, “**`warning`**” or “**`error`**”:
- When **`messageType`** is “**`success`**” read **`operation`** + **`message`** (each from a new line).
- When **`messageType`** is “**`warning`**” read only **`message`** (from a new line).
- When **`messageType`** is “**`error`**” read **`operation`** + **`message`** + **`errorCode`** (each from a new line).

Print on the console **each read message**, formatted depending on its **`messageType`**. After the headline of the message print as much **`=`**, **as the length** of the said **headline** and print **an empty line** after each message (to understand in detail look at the examples). 

The problem should be solved by defining four methods: **`ShowSuccessMessage()`**, **`ShowWarningMessage()`**, **`ShowErrorMessage()`** and **`ReadAndProcessMessage()`**, so that only the last method is invoked by the **`Main()`** method:

![](/assets/chapter-10-images/23.Notifications-01.png)

## Sample Input and Output

| Input | Output |
| --- | --- |
|4<br>error<br>credit card purchase<br>Invalid customer address<br>500<br>warning<br>Email not confirmed<br>success<br>user registration<br>User registered successfully<br>warning<br>Customer has not email assigned|<code>Error: Failed to execute credit card purchase.</code><br><code>==============================================</code><br><code>Reason: Invalid customer address.</code><br><code>Error code: 500.</code><br><br><code>Warning: Email not confirmed.</code><br><code>=============================</code><br><br><code>Successfully executed user registration.</code><br><code>========================================</code><br><code>User registered successfully.</code><br><br><code>Warning: Customer has not email assigned.</code><br><code>=========================================</code>|

## Hints and Guidelines

Define and implement the four shown methods.

In **`ReadAndProcessMessage()`** read the type of message from the console and according the read type read the rest of the data (one, two or three more lines). After that invoke the method for printing the given type of message.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/594#12](https://judge.softuni.org/Contests/Practice/Index/594#12).