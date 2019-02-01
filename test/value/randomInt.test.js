import { assert } from "chai";
import { randomInt, range } from "../../src/value/Value";
import { randomIntHelp } from "../../src/value/help";

describe( "Value.randomInt( lowerBound, upperBound )", () => {

  it( "throws an error if neither argument is supplied", () => {
  
    assert.throws( () => { randomInt(); }, /Illegal argument/ );
    assert.throws( () => { randomInt( undefined ); }, /Illegal argument/ );
    assert.throws( () => { randomInt( null ); }, /Illegal argument/ );
    assert.throws( () => { randomInt( undefined, undefined ); }, /Illegal argument/ );
    assert.throws( () => { randomInt( null, null ); }, /Illegal argument/ );
    assert.throws( () => { randomInt( undefined, null ); }, /Illegal argument/ );
    assert.throws( () => { randomInt( null, undefined ); }, /Illegal argument/ );
  });

  it( "throws an error if either argument is non-numeric", () => {
  
    const invalidArgs = [
      { lower: "0", upper: "100" },
      { lower: "100", upper: undefined },
      { lower: 0, upper: "100" },
      { lower: false, upper: true },
      { lower: 0, upper: new Date() },
      { lower: 0, upper: {} },
      { lower: 0, upper: [] }
    ];

    invalidArgs.forEach(
      item => {
        assert.throws( () => { randomInt( lower, upper ); } );  
      }
    );
  });

  it( "throws an IllegalOperation error if the second argument is smaller than the first", () => {
  
    assert.throws( () => { randomInt( 2, 1 ); }, /Illegal operation/ );
  });

  it( "returns a pseudorandom integer beweeen the integer values of the two bounds", () => {
  
    const lower = 0.1234566;
    const upper = 100.1233456;

    const results = range( 1, 100 ).map(
      () => { return randomInt( lower, upper ); }
    );
    
    results.forEach(
      item => {
        assert.isNumber( item );
        assert.strictEqual( item, Math.floor( item ) );
        assert.isAtLeast( item, Math.floor( lower ) );
        assert.isAtMost( item, Math.floor( upper ) );
      }
    );

    /* A prmitive test for random distribution.*/
    assert.isAtLeast( Object.getOwnPropertyNames( sortIntoMap( results ) ).length, 50 )

    function sortIntoMap( numArray ) {
    
      const results = {};

      numArray.forEach(
        item => {
          if ( !Object.getOwnPropertyNames( results ).includes( item.toString() ) ) {
            results[ item.toString() ] = 1;
          } else {
            results[ item.toString() ] = results[ item.toString() ] + 1;
          }
        }
      );

      return results;
    }
  });
  
  it( "has a help text", () => {
    
    assert( /randomInt/.test( randomIntHelp() ) );
  });
});

