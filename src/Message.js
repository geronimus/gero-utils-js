function failure( error ) {

  const failureObject = { status: "failure" };

  return Object.freeze( addMessage( error, failureObject ) );

  function addMessage( errorOrText, failureObj ) {
  
    if ( typeof errorOrText === "string" ) {
      failureObj.message = errorOrText;
    } else if ( errorOrText instanceof Error ) {
      failureObj.message = errorOrText.message;
    }

    return failureObj;
  }
}

function success( result ) {

  const resultTemplate = { status: "success" };

  if ( arguments.length > 0 )
    resultTemplate.result = result;

  return Object.freeze( resultTemplate );
}

export { failure, success };
export { illegalArgFailure, illegalOpFailure } from "./Message/failure";

