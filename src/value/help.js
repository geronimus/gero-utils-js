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
  randomIntHelp,
  rangeHelp,
  uuidHelp
};

