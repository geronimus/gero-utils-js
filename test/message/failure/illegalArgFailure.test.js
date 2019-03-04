import { assert } from "chai";
import { illegalArg } from "../../../src/Message/failure/text";
import { illegalArgFailure } from "../../../src/Message";

describe( "Message.illegalArgFailure( param, expected, actual )", () => {
  
  const param = "dividend";
  const expected = "a non-zero integer";
  const actual = 0;

  const message = illegalArg( param, expected, actual );
  const degenerateMessage = illegalArg();

  it( "contains the illegalArgument text", () => {
  
    assert.deepEqual(
      illegalArgFailure(),
      { status: "failure", message: degenerateMessage }
    );

    assert.deepEqual(
      illegalArgFailure( param, expected, actual ),
      { status: "failure", message: message }
    );
  });
});

