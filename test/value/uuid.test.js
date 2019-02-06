import { assert } from "chai";
import { range, uuid } from "../../src/Value";
import { uuidHelp } from "../../src/value/help";

describe( "Value.uuid()", () => {

  it( "has the format of a version 4 uuid", () => {
  
    assert.match(
      uuid(),
      /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/
    );
  });

  it( "produces distinct values", () => {
  
    range( 1, 100 )
      .map( () => { return uuid(); } )
      .reduce(
        ( acc, val ) => {
          assert.isTrue( !Object.keys( acc ).includes( val ) );  
          acc[ val ] = true;
          return acc;
        },
        {}
      );
  });

  it( "has a help text", () => {
    
    assert( /uuid/.test( uuidHelp() ) );
  });
});

