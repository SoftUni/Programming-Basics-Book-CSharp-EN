#### The Code After Return is Inaccessible

After the **`return`** operator, there **should not** be any more lines of code in the current block, because if there are Visual Studio will warn you that it has found a piece of code **which is inaccessible**:

![](/assets/chapter-10-images/11.Return-operator-03.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" />
</td><td>In programming you can't have the <code><b>return</b></code> operator twice, one after the other, because executing the first one won't allow the execution of the second one. From time to time programmers joke by saying “<b><i>write</i> <code>return; return;</code> <i>and let's go</i></b>”, in order to explain that the program logic is lost.</td></tr>
</table>