import { IllegalArgument } from "./Error";

function when( condition, operation ) {
  
  if ( typeof condition !== "boolean" ) {
    IllegalArgument( "condition", "An expression that evaluates to a boolean value", condition );
  } else if ( !condition ) {
    return;  
  }
  
  if ( typeof operation !== "function" ) {
    IllegalArgument( "operation", "A callable function", operation );
  } else {
    return operation();  
  }
}

export { when };

