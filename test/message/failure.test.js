import { assert } from "chai";
import { failure } from "../../src/Message";
import { illegalArg } from "../../src/Message/failure/text";

describe( "Message.failure( error )", () => {

  it( "can return no value, if required", () => {
  
    const test = failure();

    assert.strictEqual( test.status, "failure" );
    assert.strictEqual( test.result, undefined );
    assert.strictEqual( test.message, undefined );
  });

  it( "given a simple error message, can return that as the message", () => {
  
    const errorMessage = illegalArg( "arg", "a proper argument", "just contradiction" );
    const test = failure( errorMessage );

    assert.deepEqual(
      test,
      { status: "failure", message: errorMessage }
    );
  });

  it( "given an actual Error object, returns the error text on the message property", () => {
  
    const errorInstance = new Error( illegalArg( "dispute", "litigation", "a duel with swords" ) );
    const test = failure( errorInstance );

    assert.deepEqual(
      test,
      { status: "failure", message: errorInstance.message }
    );
  });

  it( "the received message is immutable", () => {
    
    const test = failure( illegalArg( "mistake", "don't look at me that way", "it was an honest must-take" ) );
    assert.throws( () => { test.message = "I didn't do it! Nobody saw me do it! You can't prove anything!" } );
  });
});

