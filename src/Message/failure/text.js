function illegalArg( param, expected, actual ) {

  const template = [
    `Illegal argument: ${ param }`,
    `  expected: ${ expected }`,
    `  actual: ${ actual }`
  ];

  const validArgs = getValidArgs(
    arguments,
    [ isString, anythingWillDo, anythingWillDo ]
  );

  return compileTemplate( template, validArgs.length, "Illegal argument" );
}

function illegalOp( methodCalled, rule, whatYouDidWrong ) {

  const template = [
    `Illegal operation: ${ methodCalled }`,
    `  rule: ${ rule }`,
    `  what you did wrong: ${ whatYouDidWrong }`
  ];

  const validArgs = getValidArgs(
    arguments,
    [ isString, isString, isString ]
  );

  return compileTemplate( template, validArgs.length, "Illegal operation" );
}

/**
 * @param {Object} argsObj The arguments object provided by a function.
 * @param {function[]} validatorFuncs An array of functions, taking one argument and
 *   returning a boolean, intended to validate each expected argument.
 *
 * @returns {[]} The subset of the arguments that passed the validation.
 */
function getValidArgs( argsObj, validatorFuncs ) {

  return Array.from( argsObj ).filter(
    ( arg, index ) => validatorFuncs[ index ]( arg )
  );
}

// These two functions are argument validators.
function isString( arg ) { return typeof arg === "string"; }

function anythingWillDo() { return true; }

// Calculates the string to be returned, based on the template and the number of valid arguments.
// Returns the defaultVal if no arguments are valid.
function compileTemplate( templateArray, validArgCount, defaultVal ) {
  
  if ( validArgCount === 0 ) {
    return defaultVal;  
  } else {
    return templateArray
      .slice( 0, validArgCount )
      .join( "\n" );
  }
}

export { illegalArg, illegalOp };

