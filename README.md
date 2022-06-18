First 
======
Renders every time a click is updated

Second
======
We only want the list being rendered once but its rendered every time "click me" is updated.

Third
=====
Add the memo hook
Wrap function that generates the list in the memo hook.
this caches the result. if it does not change when other elements of the 
component are changed it will not re-render the list.

Fourth
======
