function isAtomicStringHelp() {

  return `
isAtomicString( value ) : boolean

  Determines whether or not the passed-in value evaluates to a non-zero-length string with no white space characters at all.

  value : Any -> The value to check for strict equality with a non-empty, atomic string.
`;
}

function isNonEmptyStringHelp() {

  return `
isNonEmptyString( value ) : boolean

  Determines whether or not the passed-in value evaluates to a string longer than zero characters.
  
  Strings composed exclusively of white space characters are rejected.

  value : Any -> The value to check for strict equality with a non-empty string.
  `;
}

function isNullHelp() {

  return `
isNull( value ) : boolean

  Determines whether or not the passed-in value evaluates to one of JavaScript's bottom values: undefined or null.
  Makes it unnecessary to check for both bottom values. Does not get tricked by other "falsy" values.
  
  value : Any -> The value to check for strict equality with either undefined or null.
  `;
}

function isPrimitiveHelp() {

  return `
isPrimitive( value ) : boolean

  Determines whether the passed-in value is one of JavaScript's primitive types. ( "boolean", "number", "string", "undefined", "null" )

  Otherwise, presume it is a complex type. (eg, An "object" or "function". )

  value : Any -> The value whose type you want to know.
`;
}

function quacksLikeHelp() {

  return `
quacksLike( subject, duck ) : object

  (As in "duck typing".) Determines whether the "subject" is an object like the "duck", by examining their properties.

  It doesn't examine the "duck's" property values, so it can be a real object, or just an interface definition.

  Returns a result object that reports on the matched and unmatched properties. eg:

    {
      result: false,
      matchedProperties: [ "beak", "feathers" ],
      unmatchedProperties: [ "quack", "webbedFeet" ]
      subjectDataType: "object",
      duckDataType: "object"
    }

  subject : Any -> The value to test as having the same properties as the "duck".
  duck : Any -> An object whose property names you expect the subject to have. If you pass in a primitive value, the function will verify that the subject is of the same primitive type.
  `;
}

function randomIntHelp() {

  return `
randomInt( upperBound ) : number

  Returns a random integer between 0 and the value supplied to upperBound.

  upperBound : number -> The highest number (inclusive) that can be returned. (Whatever number is supplied will be interpreted as an integer.)


randomInt( lowerBound, upperBound ) : number

  Returns a random integer between lowerBound and upperBound (inclusive).

  NOTE: Uses Math.random() under the hood and is therefore NOT cryptographically secure.

  lowerBound : number -> The lowest number (inclusive) that can be returned. (Whatever number is supplied will be interpreted as an integer.)
  upperBound : number -> The highest number (inclusive) that can be returned. (Whatever number is supplied will be interpreted as an integer.)
`;
}

function rangeHelp() {

  return `
range( upperBound ) : number

  Returns an array containing the integers from 1 until the argument provided to upperBound.

  upperBound : number -> The highest number (inclusive) in the returned range. (Whatever number is supplied will be interpreted as an integer.)

range( lowerBound, upperBound ) : number

  Returns an array containing the integers from lowerBound until  upperBound.

  lowerBound : number -> The lowest number (inclusive) in the returned range. (Whatever number is supplied will be interpreted as an integer.)
  upperBound : number -> The highest number (inclusive) in the returned range. (Whatever number is supplied will be interpreted as an integer.)
`;
}

function uuidHelp() {

  return `
uuid() : string

  Returns the canonical string representation of a version 4 (random) uuid (per IETF RFC 4122).
`;
}

export { 
  isAtomicStringHelp,
  isNonEmptyStringHelp,
  isNullHelp,
  isPrimitiveHelp,
  quacksLikeHelp,
  randomIntHelp,
  rangeHelp,
  uuidHelp
};

