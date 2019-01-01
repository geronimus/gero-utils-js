import { assert } from "chai";
import { when } from "../../src/logic/Logic";
import { whenHelp } from "../../src/logic/help";

const illegalArg = /Illegal argument:/;

describe( "Logic.when( condition, operation )", () => {

  it( "when you pass it an invalid (non-boolean) condition, it throws an IllegalArgument exception", () => {
    
    assert.throws( () => { when(); }, illegalArg );

    const invalidConditions = [ undefined, null, 0, 1, "true", "false" ];

    invalidConditions.forEach( cond => {
      assert.throws( () => { when( cond ); } );  
    });
  });

  it( "if the condition is false, then the operation is never called", () => {
    
    assert.doesNotThrow( () => { when( false ); } );
    assert.isUndefined( when( false, () => { return 0; } ) );
  });

  it( "when you pass it an invalid operation to call, it throws an IllegalArgument exception", () => {
    
    assert.throws( () => { when( true ); }, illegalArg );
    
    const invalidOps = [ false, 0, "function", "() => { return 0; }", {}, [] ];

    invalidOps.forEach(
      op => assert.throws( () => { when( true, op ); }, illegalArg )
    );
  });

  it( "when the condition is true, then it executes the operation, and returns its value", () => {

    assert.isNumber( when( true, () => { return randomInt( 0, 10 ); } ) );
    assert.isAtLeast( when( true, () => { return randomInt( 0, 10 ); } ), 0 );
    assert.isAtMost( when( true, () => { return randomInt( 0, 10 ); } ), 10 );

    function randomInt( min, max ) {
      min  = Math.ceil( min );
      max = Math.floor( max );
      return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
  });

  it( "has a help text", () => {
  
    assert( /when/.test( whenHelp() ) );
  });
});

