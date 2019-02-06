function IllegalArgument( param, expected, actual ) {
  throw new Error(
    "Illegal argument:\n" +
      `  Parameter: ${ param }\n` +
      `  Expected: ${ expected }\n` +
      `  Actual: ${ actual }\n`
  );
}

function IllegalOperation( methodCalled, rule, whatYouDidWrong ) {  
  throw new Error(
    "Illegal operation:\n" +
      `  Method: ${ methodCalled }\n` +
      `  Rule: ${ rule }\n` +
      `  What you did wrong: ${ whatYouDidWrong }\n`
  );
}

export { IllegalArgument, IllegalOperation };

