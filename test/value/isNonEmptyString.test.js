import { assert } from "chai";
import { isNonEmptyString } from "../../src/Value";
import { isNonEmptyStringHelp } from "../../src/value/help";

describe( "Value.isNonEmptyString( value )", () => {

  it( "returns true for non-empty strings", () => {
    
    const validValues = [
      "1",
      "atomicValue",
      "multi-part text value with spaces!"
    ];

    validValues.forEach(
      item => {
        assert.isTrue( isNonEmptyString( item ) );  
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
      { string: "how long is a piece of it?" }
    ];

    invalidValues.forEach(
      item => {
        assert.isFalse( isNonEmptyString( item ) );  
      }
    );
  });
  
  it( "has a help text", () => {
    
    assert( /isNonEmptyString/.test( isNonEmptyStringHelp() ) );
  });
});

