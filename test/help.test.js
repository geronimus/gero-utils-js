import { assert } from "chai";
import Utils from "../src/Utils";
import {
  bareFunctions,
  generalHelp,
  helpMapping,
  listModuleMembers,
  moduleHelpText,
  qualifiedFunctions,
  stripQualifier
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

  it( "mentions each Module and function", () => {
    const members = listMembersRecursive( Utils );

    members.forEach( member => {
      assert.include( generalHelp(), member );  
    });
  });

  it( "lists each function in the module, when called with the module name", () => {
      const modules = listModuleMembers( Utils);

      modules.forEach( module => {
        const members = listModuleMembers( Utils[ module ] );
        const helpText = moduleHelpText( module, members );

        assert.strictEqual( helpText, Utils.help( module ) );
      });
  });

  it( "lists the help for each function when called with the function's qualified name", () => {
    qualifiedFunctions().forEach(
      item => hasHelpMapping( stripQualifier( item ) )
    );  
  });

  it( "lists the help for each function when called with the function's unqualified name", () => {
    bareFunctions().forEach(
      item => hasHelpMapping( item )
    );
  });
});

function hasHelpMapping( value ) {
  assert( helpMapping.hasOwnProperty( value ) );
  assert.strictEqual(
    Utils.help( value ),
    helpMapping[ value ]
  );
}

function listMembersRecursive( obj ) {
  
  if ( typeof obj === "object" ) {
    const members = Object.getOwnPropertyNames( obj )
      .filter( member => ![ 
        "__esModule",
        "help",
        "length",
        "name",
        "prototype"
      ].includes( member ) );
    
    const children = members.map( member => listMembersRecursive( obj[ member ] ) )
      .reduce(
        ( acc, current ) => { return acc.concat( current ); },
        []
      );
    
    return members.concat( children );
  } else {
    return [];  
  }
}

