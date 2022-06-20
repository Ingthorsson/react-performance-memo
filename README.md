Performance with memo hook
==========================
use the react profiler in devtools to view changes in render performance of each commit.

first commit
======
Renders every time a click is updated

Second
======
We only want the list being rendered once but its rendered every time "click me" is updated.

Add memo render only change
===========================
Add the memo hook
Wrap function that generates the list in the memo hook.
this caches the result. if it does not change when other elements of the 
component are changed it will not re-render the list.

Add list filter
======
When the list filter is added the list will render again when the "click me" is incrimented.

This is because the filter shares a refrence to list 

Add useMemo
===========
Wraping the filter function in useMemo stores the output of the function.

We are back to the only thing rendering on the "click me" is the counter.

Seperate components
===================
Seperate into seperate components and only the relevent component will render.

example from: https://www.youtube.com/watch?v=sc5EsyjOLj8
