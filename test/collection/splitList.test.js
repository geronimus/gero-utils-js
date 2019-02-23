import { assert } from "chai";
import { splitList } from "../../src/Collection";
import { range } from "../../src/Value";

describe( "Collection.splitList( sliceSize, array )", () => {

  it( "throws an IllegalArgument exception given invalid arguments", () => {

    assert.throws(
      () => { splitList(); },
      /Illegal argument/
    );

    [
      { sliceSize: undefined, array: undefined },
      { sliceSize: null, array: null },
      { sliceSize: false, array: {} },
      { sliceSize: {}, array: true },
      { sliceSize: "what?!", array: new Date() },
      { sliceSize: 2, array: 2 },
      { sliceSize: false, array: [ 1, 2, 3] }
    ].forEach(
      item => {
        assert.throws(
          () => { splitList(); },
          /Illegal argument/
        );
      }
    );
  });

  it( "given a slice size of zero, returns an empty array", () => {

    assert.deepEqual( splitList( 0, [ 1, 2, 3 ] ), [] );
  });

  it( "given an empty array and a non-zero sliceSize, returns an empty array", () => {

    assert.deepEqual( splitList( 1, [] ), [] );
  });

  it(  "given a sliceSize larger than the array, a clone of the original array is returned", () => {
    
    assert.deepEqual( splitList( 9, range( 5 ) ), range( 5 ) );

    // It's a copy, and not the original array that's returned.
    assert.notStrictEqual( splitList( 9, range( 5 ) ), range( 5 ) );
  });

  it( "given an array divisible by the sliceSize, returns groups of the sliceSize", () => {
    
    assert.deepEqual( splitList( 3, range( 9 ) ), [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] );
  });

  it( "given an array not divisible by sliceSize, returns groups of sliceSize, followed by a final, shorter group", () => {
  
    assert.deepEqual( splitList( 3, range( 8 ) ), [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ] );
  });
});

