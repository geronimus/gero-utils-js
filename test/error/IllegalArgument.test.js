import { assert } from "chai";
import { IllegalArgument } from "../../src/Error";
import { IllegalArgumentHelp } from "../../src/error/help";

const illegalArgPattern = /Illegal argument:/;

describe( "Error.IllegalArgument", () => {

  it( "should throw a runtime IllegalArgument exception when called", () => {
  
    assert.throws(
      () => {
        IllegalArgument( "testParam", "a thing", "another thing" );  
      },
      illegalArgPattern
    );
  });

  it( "still works (albeit poorly) when called with invalid input", () => {
    
    assert.throws(
      () => { IllegalArgument(); },
      illegalArgPattern
    );
  
    assert.throws(
      () => {
        IllegalArgument( undefined, null, undefined );  
      },
      illegalArgPattern
    );
  
    assert.throws(
      () => {
        IllegalArgument( {}, [], {} );  
      },
      illegalArgPattern
    );
  });

  it( "has a help text", () => {
      
    assert( /IllegalArgument/.test( IllegalArgumentHelp() ) );
  });
});

