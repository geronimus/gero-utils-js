import { assert } from "chai";
import { head } from "../../src/Collection";
import { headHelp } from "../../src/collection/help";

describe( "Collection.head( array )", () => {
  
  it( "thows an illegal operation exception when invoked on a non-array", () => {
  
    [
      undefined,
      null,
      true,
      1,
      "thingy"
    ].forEach( item => { assert.throws( () => { head( item ) }, /Illegal operation/ ); } );
  });

  it( "returns undefined when called on an empty array", () => {
    
    assert.isUndefined( head( [] ) );  
  });

  it( "returns the first element from a non-empty list", () => {
    
    assert.strictEqual( 1, head( [ 1 ] ) );
    assert.strictEqual( 1, head( [ 1, 2, 3 ] ) );
    assert.strictEqual( 0, head( head( [ [ 0, 1 ], 2, 3 ] ) ) );
  });

  it( "has a help function", () => {
    
    assert.isTrue( /head/.test( headHelp() ) );
  });
});

