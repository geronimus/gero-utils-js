import { assert } from "chai";
import { isPrimitive } from "../../src/Value";

describe( "Value.isPrimitive( value )", () => {

  it( "throws an IllegalOperation exception, if you omit the argument", () => {
  
    assert.throws( () => { isPrimitive(); }, /Illegal operation/ );
  });

  it( "identifies all primitive types", () => {
  
    [
      true,
      false,
      1,
      0.12345,
      "ain't that a string?",
      undefined,
      null
    ].forEach(
      item => {
        assert.isTrue( isPrimitive( item ) );
      }
    );
  });

  it( "rejects complex types", () => {
  
    [
      {},
      [],
      () => { return true; },
      new Date()
    ].forEach(
      item => {
        assert.isFalse( isPrimitive( item ) );  
      }
    );
  });
});

