function isNullHelp() {

  return `
isNull( value )

  Determines whether of not the passed-in value evaluates to one of JavaScript's bottom values: undefined or null.
  Makes it unnecessary to check for both bottom values. Does not get tricked by other "falsy" values.
  
  value : Any -> The value to check for strict equality with either undefined or null.
  `;
}

export { isNullHelp };

