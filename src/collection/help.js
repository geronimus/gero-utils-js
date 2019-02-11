function splitListHelp() {
  
  return `
splitList( sliceSize, array ) : Array

  Splits an array into an array of arrays. The sub-arrays are of the length specified by sliceSize.

  The returned array is a copy. The orginal is untouched.

  sliceSize : number -> The maximum size of a sub-array. Will be interpreted as an integer.
  array : Array[Any] -> The array to be sliced into sub-arrays.
  `;
}

export { splitListHelp };

