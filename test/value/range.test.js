import { assert } from "chai";
import { range } from "../../src/Value";

const nonNumericArgs = [
  { lower: undefined, upper: undefined },
  { lower: null, upper: null },
  { lower: undefined, upper: null },
  { lower: null, upper: undefined },
  { lower: true, upper: false },
  { lower: "1", upper: "100" },
  { lower: {}, upper: [] }
];

describe( "Value.range( lowerBound, upperBound )", () => {
  
  it( "throws an IllegalArgument error when the first argument is not a number",  () => {
    
    nonNumericArgs.forEach(
      item => {
        assert.throws( () => { range( item.lower ); }, /Illegal argument/ );
      }
    );
  });

  it( "throws an IllegalArgument error when both arguments are not numbers", () => {
  
    nonNumericArgs.forEach(
      item => {
        assert.throws( () => { range( item.lower, item.upper ) }, /Illegal argument/ );  
      }
    );
  });

  it( "throws an IllegalArgument error when the second argument is not a number", () => {
  
    nonNumericArgs
      .filter( item => item.upper !== undefined && item.upper !== null )
      .forEach(
        item => {
          assert.throws( () => { range( 1, item.upper ) }, /Illegal argument/ );  
        }
      );
  });

  it( "throws an IllegalOperation error when the second argument is smaller than the first", () => {
  
    assert.throws( () => { range( 2, 1 ); }, /Illegal operation/ );
  });

  it( "returns an array of numbers from 1 to first arg's floor value, when it is supplied as a decimal", () => {
    
    const uBound = 5.554321;

    assert.strictEqual( range( uBound ).length, 5 );
    assert.deepEqual( range( uBound ), [ 1, 2, 3, 4, 5 ] );
  });

  it( "returns an array of numbers, from the lowerBound's floor value, " +
    "to the upperBound's floor value, when the arguments are supplied as decimals", () => {
    
    const lBound = 3.829939;
    const uBound = 5.554321;

    assert.strictEqual( range( lBound, uBound ).length, 3 );
    assert.deepEqual( range( lBound, uBound ), [ 3, 4, 5 ] );
  });
});

