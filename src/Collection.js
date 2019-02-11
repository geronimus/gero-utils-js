import { IllegalArgument } from "./Error";

function splitList( sliceSize, array ) {

  if ( typeof sliceSize !== "number" )
    IllegalArgument( "sliceSize", "An integer value", sliceSize );

  if ( !Array.isArray( array ) )
    IllegalArgument( "array", "An array", array );

  if ( Math.floor( sliceSize ) < 1 || array.length < 1 )
    return [];

  if ( Math.floor( sliceSize ) > array.length )
    return array.slice( 0 );

  let result = [];
  let item = 1;
  let parcel = [];
  const parcelLimit = Math.floor( sliceSize );
  let member = 1;

  while ( item <= array.length ) {
    parcel.push( array[ item - 1 ] );

    if ( member % parcelLimit === 0 || item === array.length ) {
      result.push( parcel );
      parcel = [];
      member = 1;
    } else {
      member++;
    }

    item++;
  }

  return result;
}

export { splitList };

