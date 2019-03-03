import { assert } from "chai";
import { illegalOp } from "../../../../src/Message/failure/text";

describe( "Message.failure.text.illegalOp( methodCalled, rule, whatYouDidWrong )", () => {

  it( "if you provide no argument, it simply reports: Illegal operation", () => {
  
    assert.strictEqual( illegalOp(), "Illegal operation" );
  });

  it( "if you only provide a valid methodCalled, it reports: Illegal argument: ${ param }", () => {
    
    assert.strictEqual( illegalOp( "embezzle" ), "Illegal operation: embezzle" );
  });

  it( "if you don't provide whatYouDidWrong, illegalOp won't report it", () => {
  
    assert.strictEqual(
      illegalOp( "embezzle", "thou shalt not steal" ),
      "Illegal operation: embezzle\n  rule: thou shalt not steal"  
    );
  });

  it( "if you provide all of the arguments, you get the full message", () => {
  
    assert.strictEqual(
      illegalOp( "embezzle", "thou shalt not steal", "you stole the cookies from the cookie jar!" ),
      "Illegal operation: embezzle\n  rule: thou shalt not steal\n  what you did wrong: you stole the cookies from the cookie jar!"
    );
  });
});

