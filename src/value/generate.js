import { IllegalArgument, IllegalOperation } from "../Error";
import { isNull } from "../Value";

function randomInt( lowerBound, upperBound ) {

  const validArgs = validateNumberBounds( "randomInt", lowerBound, upperBound );

  if ( validArgs.length === 1 )
    return randomIntBetween( 1, validArgs[ 0 ] );
  else if ( validArgs.length === 2 )
    return randomIntBetween( ...validArgs );

  function randomIntBetween( lowerBound, upperBound ) {

    return Math.floor(
      Math.random() * ( upperBound - lowerBound + 1 )
    ) + lowerBound;
  }
}

function range( lowerBound, upperBound ) {

  const validArgs = validateNumberBounds( "range", lowerBound, upperBound );

  if ( validArgs.length === 1 )
    return rangeBetween( 1, validArgs[ 0 ] );
  else if ( validArgs.length === 2 )
    return rangeBetween( ...validArgs );

  function rangeBetween( lowerBound, upperBound ) {
  
    const result = [];

    for ( let i = lowerBound; i <= upperBound; i++ ) {
      result.push( i );  
    }

    return result;
  }
}

/* A private helper function, returning an array of validated bounds,
 * or else throwing an appropriate exception.
 */
function validateNumberBounds( funcName, lowerBound, upperBound ) {
  
  if( typeof lowerBound !== "number" )
    IllegalArgument( "upperBound", "a numeric value", lowerBound );

  if( isNull( upperBound ) )
    return [ Math.floor( lowerBound ) ];
  else if( typeof upperBound !== "number" )
    IllegalArgument( "upperBound", "a numeric value", upperBound );
  else if( lowerBound > upperBound )
    IllegalOperation(
      `${ funcName }( ${ lowerBound }, ${ upperBound } )`,
      "lowerBound must be less than upperBound",
      `Called ${ funcName } with a lowerBound argument greater than its upperBound argument`
    );

  return [ Math.floor( lowerBound ), Math.floor( upperBound ) ];
}

function uuid() {

  return "00000000-0000-4000-v000-000000000000"
    .replace(
      /[0v]/g,
      ( char ) => {
        if ( char === "v" )
          return randomVariantByte();
        else
          return randomByte();
      }
    );

  function randomByte() {
  
    return randomInt( 0, 15 ).toString( 16 );
  }

  function randomVariantByte() {
  
    return randomInt( 9, 11 ).toString( 16 );
  }
}

export {
  randomInt,
  range,
  uuid
};

