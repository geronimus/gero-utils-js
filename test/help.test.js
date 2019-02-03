import { assert } from "chai";
import Utils from "../src/Utils";
import {
  generalHelp,
  helpMapping,
  listFunctions,
  moduleHelpText,
} from "../src/help";

describe ( "Utils.help", () => {

  it( "returns the general help text, when called with no arguments", () => {
    assert.strictEqual( generalHelp(), Utils.help() );
  });

  it( "returns the general help text, when called with invalid arguments", () => {
    assert.strictEqual( generalHelp(), Utils.help( 1 ) );  
    assert.strictEqual( generalHelp(), Utils.help( "foo" ) );  
    assert.strictEqual( generalHelp(), Utils.help( false ) );  
  });

  it( "mentions listFunctions()", () => {

    assert.include( generalHelp(), 'listFunctions()' );
  });

  it( "lists the help for each function when called with the function's name", () => {
    listFunctions().forEach(
      item => hasHelpMapping( item )
    );
  });
});

function hasHelpMapping( value ) {
  assert.property( helpMapping, value );
  assert.strictEqual(
    Utils.help( value ),
    helpMapping[ value ]
  );
}

