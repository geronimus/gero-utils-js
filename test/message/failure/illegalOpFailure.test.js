import { assert } from "chai";
import { illegalOp } from "../../../src/Message/failure/text";
import { illegalOpFailure } from "../../../src/Message";

describe( "Message.illegalOpFailure( methodCalled, rule, whatYouDidWrong )", () => {
  
  const methodCalled = "divide";
  const rule = "division by zero is not a thing!";
  const whatYouDidWrong = "divided something by zero";

  const message = illegalOp( methodCalled, rule, whatYouDidWrong );
  const degenerateMessage = illegalOp();

  it( "contains the illegalOperation text", () => {
  
    assert.deepEqual(
      illegalOpFailure(),
      { status: "failure", message: degenerateMessage }
    );

    assert.deepEqual(
      illegalOpFailure( methodCalled, rule, whatYouDidWrong ),
      { status: "failure", message: message }
    );
  });
});

