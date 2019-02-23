import { assert } from "chai";
import { quacksLike } from "../../src/Value";

describe( "Value.quacksLike( subject, duck )", () => {

  it( "throws an exception if the arguments are missing or null", () => {
  
    assert.throws(
      () => { quacksLike(); },
      /Illegal operation/
    );
  
    [
      { subject: undefined, duck: undefined },
      { subject: null, duck: null },
      { subject: undefined, duck: null },
      { subject: null, duck: undefined },
    ].forEach( item => {
      assert.throws(
        () => { quacksLike( item.subject, item.duck ); },
        /Illegal argument/
      );
    });
  });

  it( "gives a true result for matching primitive values", () => {
    
    [
      { subject: true, duck: false },
      { subject: 1, duck: 2.345 },
      { subject: "not the empty string", duck: "" }
    ].forEach(
      item => {
        const test = quacksLike( item.subject, item.duck ); 
        assert.isTrue( test.result );
        assert.deepEqual( test.matchedProperties, [] );
        assert.deepEqual( test.unmatchedProperties, [] );
        assert.deepEqual( test.additionalProperties, [] );
        assert.strictEqual( test.subjectDataType, typeof item.subject );
        assert.strictEqual( test.duckDataType, typeof item.duck );
      }
    );
  });

  it( "gives a false result for unmatching primitive values", () => {
    
    [
      { subject: false, duck: 0 },
      { subject: "1", duck: 2.345 },
      { subject: "true", duck: -1 }
    ].forEach(
      item => {
        const test = quacksLike( item.subject, item.duck ); 
        assert.isFalse( test.result );
        assert.strictEqual( test.subjectDataType, typeof item.subject );
        assert.strictEqual( test.duckDataType, typeof item.duck );
      }
    );
  });

  it( "gives a true result, given objects whose property names match exactly", () => {
  
    const objectInterface = {
      firstName: true,
      lastName: 1,
      eyeColour: undefined
    };
    
    const testSubject = {
      firstName: "James",
      lastName: "Bond",
      eyeColour: "Brown"
    };

    const test = quacksLike( testSubject, objectInterface );

    assert.isTrue( test.result );
    assert.deepEqual( test.matchedProperties, Object.getOwnPropertyNames( objectInterface ) );
    assert.deepEqual( test.unmatchedProperties, [] );
    assert.deepEqual( test.additionalProperties, [] );
    assert.strictEqual( test.subjectDataType, "object" );
    assert.strictEqual( test.duckDataType, "object" );
  });

  it( "gives a true result when the subject has all of the duck's properties, even if it has additional properties", () => {
  
    const birdInterface = {
      beak: true,
      wings: false, // It doesn't matter what the value is - the property name is what counts.
      feathers: -1
    };
    
    const testSubject = {
      beak: "bill",
      wings: "98 cm",
      feathers: "brown",
      feet: "webbed",
      quacks: true
    };

    const test = quacksLike( testSubject, birdInterface );

    assert.isTrue( test.result );
    assert.deepEqual( test.matchedProperties, Object.getOwnPropertyNames( birdInterface ) );
    assert.deepEqual( test.unmatchedProperties, [] );
    assert.deepEqual( test.additionalProperties, [ "feet", "quacks" ] );
    assert.strictEqual( test.subjectDataType, typeof testSubject );
    assert.strictEqual( test.duckDataType, typeof birdInterface );
  });

  it( "gives a false result when you expect an object to conform to a primitive type's interface", () => {
  
    const testSubject = {
      beak: "bill",
      wings: "98 cm",
      feathers: "brown",
      feet: "webbed",
      quacks: true
    };

    assert.deepEqual(
      quacksLike( testSubject, "bird" ),
      {
        result: false,
        matchedProperties: [],
        unmatchedProperties: [],
        additionalProperties: Object.getOwnPropertyNames( testSubject ),
        subjectDataType: typeof testSubject,
        duckDataType: typeof "bird"
      }
    );
  });

  it( "gives a false result when you expect a primitive type to conform to an object's interface", () => {
  
    const objInterface = {
      beak: "bill",
      wings: "98 cm",
      feathers: "brown",
      feet: "webbed",
      quacks: true
    };

    assert.deepEqual(
      quacksLike( "bird", objInterface ),
      {
        result: false,
        matchedProperties: [],
        unmatchedProperties: Object.getOwnPropertyNames( objInterface ),
        additionalProperties: [],
        subjectDataType: typeof "bird",
        duckDataType: typeof objInterface
      }
    );
  });

  it( "gives a false result when the subject does not conform to the \"duck's\" interface", () => {
    
    const duckInterface = {  
      beak: "bill",
      wings: "98 cm",
      feathers: "brown",
      feet: "webbed",
      quacks: true
    };

    const pheasantObj = {
      beak: "crooked",
      wings: "86 cm",
      feathers: "red",
      wattle: "male",
      crow: "subtle, strangulated"
    };

    assert.deepEqual(
      quacksLike( pheasantObj, duckInterface ),
      {
        result: false,
        matchedProperties: [ "beak", "wings", "feathers" ],
        unmatchedProperties: [ "feet", "quacks" ],
        additionalProperties: [ "wattle", "crow" ],
        subjectDataType: typeof pheasantObj,
        duckDataType: typeof duckInterface
      }
    );
  });
});

