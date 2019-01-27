function isNonEmptyStringHelp() {

  return `
isNonEmptyString( value )

  Determines whether or not the passed-in value evaluates to a string longer than zero characters.
  
  Strings composed exclusively of white space characters are rejected.

  value : Any -> The value to check for strict equality with a non-empty string.
  `;
}

function isNullHelp() {

  return `
isNull( value )

  Determines whether or not the passed-in value evaluates to one of JavaScript's bottom values: undefined or null.
  Makes it unnecessary to check for both bottom values. Does not get tricked by other "falsy" values.
  
  value : Any -> The value to check for strict equality with either undefined or null.
  `;
}

export { 
  isNonEmptyStringHelp,
  isNullHelp
};

