function failure() {

  return Object.freeze( { status: "failure" } );
}

function success( result ) {

  const resultTemplate = { status: "success" };

  if ( arguments.length > 0 )
    resultTemplate.result = result;

  return Object.freeze( resultTemplate );
}

export { failure, success };

