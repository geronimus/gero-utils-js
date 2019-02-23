import { assert } from "chai";
import { success } from "../../src/Message";

describe( "Message.success( result )", () => {

  function successTemplate( val ) {
    return { status: "success", result: val };  
  }

  const results = [
    undefined,
    null,
    false,
    true,
    NaN,
    1,
    2.9,
    [],
    [ 1, 2, 3 ],
    {},
    { yes: 1, really: true }
  ];

  it( "can return no result", () => {
  
    assert.deepEqual( success(), { status: "success" } );
  });

  it( "returns any type of result", () => {
    
    results.forEach(
      item => {
        assert.strictEqual(
          typeof success( item ).result,
          typeof item
        );
        assert.deepEqual( success( item ), successTemplate( item ) );
      }
    );

    const myFunc = () => { return true; }
    assert.strictEqual( typeof success( myFunc ).result, typeof myFunc );
    assert.deepEqual( success( myFunc ).result, myFunc );
    assert.deepEqual( success( myFunc ).result(), myFunc() );
  });
});

