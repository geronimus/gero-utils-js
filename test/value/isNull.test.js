import { assert } from "chai";
import { isNull } from "../../src/Value";

describe( "Value.isNull( value )", () => {

  it( "returns true for both null and undefined input", () => {
  
    assert( isNull( undefined ) );
    assert( isNull( null ) );
    assert( isNull() );
  });

  it( "returns false for non-missing input (even if it's essentially empty)", () => {
  
    const nonNullValues = [
      true,
      false,
      0,
      new Date( "9999-12-31T23:59:59.999Z" ),
      "null",
      "undefined",
      {},
      []
    ];

    nonNullValues.forEach( val => assert.isFalse( isNull( val ) ) );
  });
});

