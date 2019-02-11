import { assert } from "chai";
import * as Collection from "../src/Collection";
import * as Error from "../src/Error";
import * as Value from "../src/Value";
import { help } from "../src/Utils";

describe( "Utils", () => {

  it( "contains all exported functions from all modules", () => {
    Object.keys( Collection ).map( key => Collection[ key ] )
      .concat( Object.keys( Error ).map( key => Error[ key ] ) )
      .concat( Object.keys( Value ).map( key => Value[ key ] ) )
      .concat( [ help ] )
      .forEach( item => { assertIsFunction( item ); } );
  });
});

function assertIsFunction( functionRef ) {
  assert.isFunction( functionRef );  
}

