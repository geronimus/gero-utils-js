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
    - isNonEmptyString
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

## API

### Error.IllegalArgument( param, expected, actual )

Throws a runtime exception with a message explaining that an illegal argument was provided to ___param___.

The first words of the error message will always be: "Illegal argument" (For the purposes of pattern matching in tests.)

- __param : string__ The name of the parameter where the illegal value was encountered.
- __expected : string__ A description of the allowed values.
- __actual : string__ A description or representation of the value encountered.

### Error.IllegalOperation( methodCalled, rule, whatYouDidWrong )

Throws a runtime exception with a message explaining that the user or process attempted an illegal operation.

The first words of the error message will always be: "Illegal operation" (For the purposes of pattern matching in tests.)

- __methodCalled : string__ The name of the illegal method, as fully-scoped as possible.
- __rule : string__ A description of when this method is allowed or not allowed.
- __whatYouDidWrong : string__ A drescription of how the current state of the system violated the rule.


### Logic.when( condition, operation )

Executes a function passed into ___operation___, and returns its value, if (and only if) the ___condition___
evaluates to true.

- __condition : boolean__ Any expression that evaluates to a boolean (true or false) value.
- __operation : function__ A function expression or reference that will be called, if the condition is true. It may or may not return a value.

### Value.isAtomicString( value ) : boolean

Determines whether or not the passed-in value evaluates to a non-zero-length string with no white space characters at all.

- __value : Any__ The value to check for strict equality with a non-empty, atomic string.

### Value.isNonEmptyString( value ) : boolean

Determines whether or not the passed-in value evaluates to a string longer than zero characters.
Strings composed exclusively of white space characters are rejected.

- __value : Any__ The value to check for strict equa`lity with a non-empty string.

### Value.isNull( value ) : boolean

Determines whether or not the passed-in value evaluates to one of JavaScript's bottom values: ___undefined___ or ___null___.
Makes it unnecessary to check for both bottom values. Does not get tricked by other "falsy" values.

- __value : Any__ The value to check for strict equality with either ___undefined___ or ___null___.

