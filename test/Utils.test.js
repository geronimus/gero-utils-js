import { assert } from "chai";
import {
  IllegalArgument,
  IllegalOperation
} from "../src/Error";
import { when } from "../src/Logic";
import {
  isNull,
  isAtomicString,
  isNonEmptyString,
  randomInt,
  range,
  uuid
} from "../src/Value";
import { help } from "../src/Utils";

describe( "Utils", () => {

  it( "contains the Error module", () => {
    assert.isFunction( IllegalArgument );
    assert.isFunction( IllegalOperation );
  });

  it( "contains the Logic module", () => {
    assert.isFunction( when );
  });

  it( "contains the Value module", () => {
    assert.isFunction( isNull );
    assert.isFunction( isAtomicString );
    assert.isFunction( isNonEmptyString );
    assert.isFunction( randomInt );
    assert.isFunction( range );
    assert.isFunction( uuid );
  });

  it( "has a general help function", () => {
    assert.isFunction( help );
  });
});


