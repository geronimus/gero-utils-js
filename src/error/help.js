function IllegalArgumentHelp() {

  return `
IllegalArgument( param, expected, actual )

  Throws a runtime exception with a message explaining that an illegal argument was provided to "param".
  
  param : string -> The name of the parameter where the illegal value was encountered.
  expected : string -> A description of the allowed values.
  actual : string -> A description or representation of the value encountered.
  `;
}

function IllegalOperationHelp() {

  return `
IllegalOperation( methodCalled, rule, whatYouDidWrong )

  Throws a runtime exception with a message explaining that the user or process attempted an illegal operation.
  
  methodCalled : string -> The name of the illegal method, as fully-scoped as possible.
  rule: string -> A description of when this method is allowed or not allowed.
  whatYouDidWrong : string -> A drescription of how the current state of the system violated the rule.
  `;
}

export { IllegalArgumentHelp, IllegalOperationHelp };

