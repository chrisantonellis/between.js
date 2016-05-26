## between.js
between.js is a script that determines if a ```Number``` ( or a type that evaluates to ```Number``` ) is between two other numbers.

## Usage
```javascript
mynum = 4

mynum.between(2, 6) // True
mynum.between(6, 8) // False
mynum.between(4, 8, True) // True
```

## Function Reference
Direct function call:
```javascript
between(i, l, h, e = false)
```
Prototype method:
```javascript
(input).between(i, l, h, e = false)
```

## Arguments

* ### ```i```

    <code><b>type:</b> Number, Date</code>  

    **Input** value.

* ### ```l```   

    <code><b>type:</b> Number, Date</code>  

    **Low** value.  
    The lower end of the range to compare against.

* ### ```h```   

    <code><b>type:</b> Number, Date</code>  

    **High** value.  
    The higher end of the range to compare against.

* ### ```e```   

    <code><b>type:</b> Boolean</code>  

    Or **equal** to.  
    If ```True```, the range compared against includes ```l``` and ```h```.