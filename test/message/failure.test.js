import { assert } from "chai";
import { failure } from "../../src/Message";

describe( "Message.failure( error )", () => {

  it( "can return no value, if required", () => {
  
    const test = failure();

    assert.strictEqual( test.status, "failure" );
    assert.strictEqual( test.result, undefined );
    assert.strictEqual( test.message, undefined );
  });

  /*it( "can return an error message", () => {
  
    
  });*/
});

