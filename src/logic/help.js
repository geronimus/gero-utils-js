function whenHelp() {

  return `
when( condition, operation )

  Executes a function passed into "operation", and returns its value, if (and only if) the "condition"
  evaluates to true.
  
  condition : boolean -> Any expression that evaluates to a boolean (true or false) value.
  operation : function -> A function expression or reference that will be called, if the condition is true.
    It may or may not return a value.
  `;
}

export { whenHelp };

