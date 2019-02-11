import { IllegalOperation } from "../Error";

function head( array ) {

  validateArray( "head", array );
  return array[ 0 ];
}

function last( array ) {

  validateArray( "last", array );
  return array[ array.length - 1 ];
}

function tail( array ) {

  validateArray( "tail", array );
  return array.length < 2 ? [] : array.slice( 1 );
}

function validateArray( method, array ) {
  
  if ( !Array.isArray( array ) )
    IllegalOperation(
      `${ method }( array )`,
      "Must be called on an Array",
      `passed ${ array } of type ${ typeof array }`
    );
}

export { head, last, tail };

