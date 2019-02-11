function headHelp() {
  
  return `
head( array ) : Any

  Returns the first element of an Array.

  array : Array[Any] -> The array from which you want the first element.
  `;
}

function lastHelp() {

  return `
last( array ) : Any

  Returns the final element of an Array.

  array : Array[Any] -> The array from which you want the final element.
  `;
}

function splitListHelp() {
  
  return `
splitList( sliceSize, array ) : Array

  Splits an array into an array of arrays. The sub-arrays are of the length specified by sliceSize.

  The returned array is a copy. The orginal is untouched.

  sliceSize : number -> The maximum size of a sub-array. Will be interpreted as an integer.
  array : Array[Any] -> The array to be sliced into sub-arrays.
  `;
}

function tailHelp() {

  return `
tail( array ) : Array[Any]

  Returns all of the elements of the array that follow its first element.

  array: Array[Any] -> The array from which you want all of the elements following the first.
  `;
}

export { headHelp, lastHelp, splitListHelp, tailHelp };

