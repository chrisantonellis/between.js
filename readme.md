## between.js
between.js is a script that determines if a ```Number``` ( or a type that evaluates to a ```Number``` ) is between two other numbers.

## Usage
```javascript
mynum = 4

mynum.between(2, 6) // True
mynum.between(6, 8) // False
mynum.between(4, 8, True) // True
```

## Function Reference
```javascript
 between(input, low_value, high_value, or_equal_to = false)
```
```javascript
(input).between(low_value, high_value, or_equal_to = false)
```

## Arguments

* ### ```input```   

    <code><b>type:</b> Number, Date</code>  

    The input value.

* ### ```low_value```   

    <code><b>type:</b> Number, Date</code>  

    The lower end of the range to compare against.

* ### ```high_value```   

    <code><b>type:</b> Number, Date</code>  

    The higher end of the range to compare against.

* ### ```or_equal_to```   

    <code><b>type:</b> Boolean</code>  

    If ```True```, the range compared against includes the ```low_value``` and
    the ```high_value```.