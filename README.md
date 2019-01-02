# Geronimus Utilities (JavaScript)
### gero-utils-js

## Purpose
Geronimus Utilities for JavaScript (gero-utils.js) are functions I find myself rewriting for every JavaScript / ECMAScript project.

The collection is expected to grow over time.

It is organized into modules, each containing functions:

- Error (module)
    - IllegalArgument
    - IllegalOperation

- Logic (module)
    - when

- Value (module)
    - isNull

You can import each module on its own, or else import the default object from the gero-utils file, which will contain all of the modules and functions.

### Example:

```javascript
import { Error } from "@geronimus/utils";
```
  
```javascript
Error.IllegalArgument( "myParam", "A valid value", myParam );
```

Or:

```javascript
import Utils from "@geronimus/utils";
  
Utils.Error.IllegalArgument( "myParam", "A valid value", myParam );
```
  

To list the available functions in each category, call help this way:

```javascript
Utils.help( "Error" );
```
  
To show help for a specific function, call help like this:

```javascript
Utils.help( "IllegalArgument" );
```
  
Or like this:

```javascript
Utils.help( "Error.IllegalArgument" );
```

