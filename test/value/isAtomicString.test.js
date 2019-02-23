import { assert } from "chai";
import { isAtomicString } from "../../src/Value";

describe( "Value.isAtomicString( value )", () => {

  it( "returns true for atomic strings", () => {
    
    const validValues = [
      "1",
      "atomicValue",
      "another_atomic_value"
    ];

    validValues.forEach(
      item => {
        assert.isTrue( isAtomicString( item ) );  
      }
    );
  });

  it( "returns false for invalid values", () => {
  
    const invalidValues = [
      undefined,
      null,
      true,
      1,
      "",
      " ",
      "       ",
      new Date( "1970-01-01T00:00:00.000Z" ),
      [ "here's a string" ],
      { string: "how long is a piece of it?" },
      "a string with spaces",
      "a\nstring\nwith\r\ngasp!!!\r\nline breaks!"
    ];

    invalidValues.forEach(
      item => {
        assert.isFalse( isAtomicString( item ) );  
      }
    );
  });
});

