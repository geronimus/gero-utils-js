import { assert } from "chai";
import { IllegalOperation } from "../../src/Error";

const illegalOpPattern = /Illegal operation/;

describe( "Error.IllegalOperation", () => {

  it( "should throw a runtime IllegalOperation error when called", () => {
    
    assert.throws(
      () => {
        // Example usage: Don't take the following message seriously.
        IllegalOperation(
          "test operation",
          "you must not call this method under test conditions",
          "you called this method during a test"
        );
      },
      illegalOpPattern
    );  
  });

  it( "still works (albeit poorly) when called with invalid input", () => {
    
    assert.throws( () => { IllegalOperation(); }, illegalOpPattern );  
    
    assert.throws(
      () => {
        IllegalOperation( null, undefined, null );
      },
      illegalOpPattern
    );  
    
    assert.throws(
      () => {
        IllegalOperation( {}, {}, [] );
      },
      illegalOpPattern
    );  
  });
});

