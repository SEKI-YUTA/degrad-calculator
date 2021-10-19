# degrad-calcurator

this pacage is convert deg to rad and rad to deg

## formula

degTorad  
Math.PI / 180 \* deg

radTodeg  
180 / Math.PI \* rad

## example

```javascript
const calculator = require("degrad-calculator");

console.log(calculator.degTorad(57.3));
// result 1.0000736613927508

console.log(calculator.radTodeg(1));
// result 57.29577951308232
```
