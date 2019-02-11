import { assert } from "chai";
import { last } from "../../src/Collection";
import { lastHelp } from "../../src/collection/help";
import { range } from "../../src/Value";

describe( "Collection.last( array )", () => {
  
  it( "thows an illegal operation exception when invoked on a non-array", () => {
  
    [
      undefined,
      null,
      true,
      1,
      "thingy"
    ].forEach( item => { assert.throws( () => { last( item ) }, /Illegal operation/ ); } );
  });

  it( "returns undefined when called on an empty array", () => {
    
    assert.deepEqual( last( [] ), undefined );  
  });

  it( "returns the first element when called on a single-element array", () => {
    
    assert.deepEqual( last( [ 1 ] ), 1 );
  });

  it( "returns the final item, for a multi-element array", () => {
    
    assert.deepEqual( last( [ 1, 2, 3 ] ), 3 );
    assert.deepEqual( last( [ 1, 2, 3, 4, 5 ] ), 5 );
    assert.deepEqual( last( range( 100 ) ), 100 );
  });

  it( "has a help function", () => {
    
    assert.isTrue( /last/.test( lastHelp() ) );
  });
});

