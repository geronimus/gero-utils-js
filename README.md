# Geronimus Utilities (JavaScript)
### gero-utils-js

## Purpose
Geronimus Utilities for JavaScript (gero-utils.js) are functions I find myself rewriting for every JavaScript / ECMAScript project.

The collection is expected to grow over time.

## Error Functions
    - IllegalArgument
    - IllegalOperation

## Logic Functions
    - when

## Value Functions
    - isNonEmptyString
    - isNull
    - randomInt
    - range
    - uuid

You can import each function on its own, or else import the default object from the gero-utils file, which will contain all of the functions.

### Example:

```javascript
import { IllegalArgument } from "@geronimus/utils";

IllegalArgument( "myParam", "A valid value", myParam );
```

Or:

```javascript
import Utils from "@geronimus/utils";
  
Utils.IllegalArgument( "myParam", "A valid value", myParam );
```
  

To show help for a specific function, call help like this:

```javascript
Utils.help( "IllegalArgument" );
```
  
# API

## Collection

### head( array ) : Any

Returns the first element of an Array.

- __array : Array[Any]__ The array from which you want the first element.

### last( array ) : Any

Returns the final element of an Array.

- __array : Array[Any]__ The array from which you want the final element.

### splitList( sliceSize, array ) : Array

Splits an array into an array of arrays. The sub-arrays are of the length specified by sliceSize.

The returned array is a copy. The orginal is untouched.

- __sliceSize : number__ The maximum size of a sub-array. Will be interpreted as an integer.
- __array : Array[Any]__ The array to be sliced into sub-arrays.

### tail( array ) : Array[Any]

Returns all of the elements of the array that follow its first element.

- __array: Array[Any]__ The array from which you want all of the elements following the first.

## Error

### IllegalArgument( param, expected, actual ) : void

Throws a runtime exception with a message explaining that an illegal argument was provided to ___param___.

The first words of the error message will always be: "Illegal argument" (For the purposes of pattern matching in tests.)

- __param : string__ The name of the parameter where the illegal value was encountered.
- __expected : string__ A description of the allowed values.
- __actual : string__ A description or representation of the value encountered.

### IllegalOperation( methodCalled, rule, whatYouDidWrong ) : void

Throws a runtime exception with a message explaining that the user or process attempted an illegal operation.

The first words of the error message will always be: "Illegal operation" (For the purposes of pattern matching in tests.)

- __methodCalled : string__ The name of the illegal method, as fully-scoped as possible.
- __rule : string__ A description of when this method is allowed or not allowed.
- __whatYouDidWrong : string__ A drescription of how the current state of the system violated the rule.


## Logic

### when( condition, operation ) : Any

Executes a function passed into ___operation___, and returns its value, if (and only if) the ___condition___
evaluates to true.

- __condition : boolean__ Any expression that evaluates to a boolean (true or false) value.
- __operation : function__ A function expression or reference that will be called, if the condition is true. It may or may not return a value.

## Value

### isAtomicString( value ) : boolean

Determines whether or not the passed-in value evaluates to a non-zero-length string with no white space characters at all.

- __value : Any__ The value to check for strict equality with a non-empty, atomic string.

### isNonEmptyString( value ) : boolean

Determines whether or not the passed-in value evaluates to a string longer than zero characters.
Strings composed exclusively of white space characters are rejected.

- __value : Any__ The value to check for strict equality with a non-empty string.

### isNull( value ) : boolean

Determines whether or not the passed-in value evaluates to one of JavaScript's bottom values: ___undefined___ or ___null___.
Makes it unnecessary to check for both bottom values. Does not get tricked by other "falsy" values.

- __value : Any__ The value to check for strict equality with either ___undefined___ or ___null___.

### isPrimitive( value ) : boolean

Determines whether the passed-in value is one of JavaScript's primitive types. ( "boolean", "number", "string", "undefined", "null" )

Otherwise, presume it is a complex type. (eg, An "object" or "function". )

- __value : Any__ The value whose type you want to know.

### quacksLike( subject, duck ) : object

(As in "duck typing".) Determines whether the "subject" is an object like the "duck", by examining their properties.

It doesn't examine the "duck's" property values, so it can be a real object, or just an interface definition.

Returns a result object that reports on the matched and unmatched properties. eg:

```javascript
    {
      result: false,
      matchedProperties: [ "beak", "feathers" ],
      unmatchedProperties: [ "quack", "webbedFeet" ]
      additionalProperties: [ "wattle", "crow" ],
      subjectDataType: "object",
      duckDataType: "object"
    }
```

- __subject : Any__ The value to test as having the same properties as the "duck".
- __duck : Any__ An object whose property names you expect the subject to have. If you pass in a primitive value, the function will verify that the subject is of the same primitive type.

### randomInt( upperBound ) : number

Returns a random integer between 0 and the value supplied to upperBound.

NOTE: Uses `Math.random()` under the hood and is therefore ___NOT___ cryptographically secure.

- __upperBound : number__ The highest number (inclusive) that can be returned. (Whatever number is supplied will be interpreted as an integer.)

### randomInt( lowerBound, upperBound ) : number

Returns a random integer between lowerBound and upperBound (inclusive).

NOTE: Uses `Math.random()` under the hood and is therefore ___NOT___ cryptographically secure.

- __lowerBound : number__ The lowest number (inclusive) that can be returned. (Whatever number is supplied will be interpreted as an integer.)
- __upperBound : number__ The highest number (inclusive) that can be returned. (Whatever number is supplied will be interpreted as an integer.)

### range( upperBound ) : Array[ number ]

Returns an array containing the integers from 1 until the argument provided to upperBound.

- __upperBound : number__ The highest number (inclusive) in the returned range. (Whatever number is supplied will be interpreted as an integer.)

### range( lowerBound, upperBound ) : Array[ number ]

Returns an array containing the integers from lowerBound until  upperBound.

- __lowerBound : number__ The lowest number (inclusive) in the returned range. (Whatever number is supplied will be interpreted as an integer.)
- __upperBound : number__ The highest number (inclusive) in the returned range. (Whatever number is supplied will be interpreted as an integer.)

### uuid() : string

Returns the canonical string representation of a version 4 (random) uuid (per IETF RFC 4122).

