import { assert } from "chai";
import { illegalArg } from "../../../../src/Message/failure/text";

describe( "Message.failure.illegalArg( param, expected, actual )", () => {

  it( "if you provide no argument, it simply reports: Illegal argument", () => {
  
    assert.strictEqual( illegalArg(), "Illegal argument" );
    assert.strictEqual( illegalArg( undefined, undefined, undefined ), "Illegal argument" );
  });

  it( "if you only provide a valid param, it reports: Illegal argument: ${ param }", () => {
    
    assert.strictEqual( illegalArg( "first" ), "Illegal argument: first" );
  });

  it( "if you don't provide an actual value, illegalArg won't report it", () => {
  
    assert.strictEqual(
      illegalArg( "first", "validArg" ),
      "Illegal argument: first\n  expected: validArg"  
    );
  });

  it( "if you provide all of the arguments, you get the full message", () => {
  
    assert.strictEqual(
      illegalArg( "first", "anything", null ),
      "Illegal argument: first\n  expected: anything\n  actual: null"
    );
    assert.strictEqual(
      illegalArg( "mustBeUndefined", undefined, null ),
      "Illegal argument: mustBeUndefined\n  expected: undefined\n  actual: null"
    );
  });
});

