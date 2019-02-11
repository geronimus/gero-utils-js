import { assert } from "chai";
import { tail } from "../../src/Collection";
import { tailHelp } from "../../src/collection/help";
import { range } from "../../src/Value";

describe( "Collection.tail( array )", () => {
  
  it( "thows an illegal operation exception when invoked on a non-array", () => {
  
    [
      undefined,
      null,
      true,
      1,
      "thingy"
    ].forEach( item => { assert.throws( () => { tail( item ) }, /Illegal operation/ ); } );
  });

  it( "returns the empty array when called on an empty array", () => {
    
    assert.deepEqual( tail( [] ), [] );  
  });

  it( "returns the empty array when called on a single-element array", () => {
    
    assert.deepEqual( tail( [ 1 ] ), [] );
  });

  it( "returns the sequence of items following the first, for a multi-element array", () => {
    
    assert.deepEqual( tail( [ 1, 2, 3 ] ), [ 2, 3 ] );
    assert.deepEqual( tail( [ 1, 2, 3, 4, 5 ] ), [ 2, 3, 4, 5 ] );
    assert.deepEqual( tail( range( 100 ) ), range( 2, 100 ) );
  });

  it( "has a help function", () => {
    
    assert.isTrue( /tail/.test( tailHelp() ) );
  });
});

