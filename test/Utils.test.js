import { assert } from "chai";
import { Error, Logic, Value } from "../src/Utils";

console.log( Error );

describe( "Utils", () => {

  it( "contains the Error module", () => {
    assert.isObject( Error );
    assert.isFunction( Error.IllegalArgument );
    assert.isFunction( Error.IllegalOperation );
  });

  it( "contains the Logic module", () => {
    assert.isObject( Logic );
    assert.isFunction( Logic.when );
  });

  it( "contains the Value module", () => {
    assert.isObject( Value );
    assert.isFunction( Value.isNull );
  });
});

