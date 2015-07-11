# smart-combin
Get elements and generate all the possible combinations with they

## Usage

```
npm install smart-combin
```  

```javascript
var smartCombin = require('smart-combin');

// From a total of seven elements i want all combinations of groups having 5 elements.
var allElements = [ "44", "16", "49", "53", "04", "52", "39" ];
var outputList = smartCombin.combine(allElements,5);

outputList.forEach( function (item) {
    console.log(item[0] + "," + item[1] + "," + item[2] + "," + item[3] + "," + item[4]);
});
```  

Thanks  