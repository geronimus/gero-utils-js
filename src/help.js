import Utils from "./Utils";
import { IllegalArgumentHelp, IllegalOperationHelp } from "./error/help";
import { whenHelp } from "./logic/help";
import { isAtomicStringHelp, isNonEmptyStringHelp, isNullHelp } from "./value/help";

const helpMapping = {
  IllegalArgument: IllegalArgumentHelp(),
  IllegalOperation: IllegalOperationHelp(),
  when: whenHelp(),
  isAtomicString: isAtomicStringHelp(),
  isNonEmptyString: isNonEmptyStringHelp(),
  isNull: isNullHelp()
};

function generalHelp() {

  return `
Geronimus Utilities for JavaScript (gero-utils.js) are functions I find myself rewriting for every JavaScript / ECMAScript project.

The collection is expected to grow over time.

It is organized into modules, each containing functions:
${ mapModules() }

You can import each module on its own, or else import the default object from the gero-utils file, which will contain all of the modules and functions.

Example:

  import { Error } from "@geronimus/utils";
  
  Error.IllegalArgument( "myParam", "A valid value", myParam );

Or:

  import Utils from "@geronimus/utils";
  
  Utils.Error.IllegalArgument( "myParam", "A valid value", myParam );
  

To list the available functions in each category, call help this way:

  Utils.help( "Error" );
  
To show help for a specific function, call help like this:

  Utils.help( "IllegalArgument" );
  
Or like this:

  Utils.help( "Error.IllegalArgument" );
  `;
}

function moduleHelpText( module, members ) {
  return `
${ module } contains help for the following functions:

${ members.map( item => "  - " + item ).join( "\n" ) }

To display the help for a function, simply call help like this:

  Utils.help( "${ members[0] }" );

Or like this:

  Utils.help( "${ module }.${ members[0] }" );
  `;
}

function getHelpItemText( item ) {
  if ( qualifiedFunctions().includes( item ) ) {
    return helpMapping[ stripQualifier( item ) ];  
  } else if ( bareFunctions().includes( item ) ) {
    return helpMapping[ item ];
  } else {
    return generalHelp();  
  }
}

function isModule( name ) {
  return listModuleMembers( Utils ).includes( name );    
}

function listModuleMembers( obj ) {
  return Object.getOwnPropertyNames( obj )
    .filter( item => item !== "__esModule" )
    .filter( item => item !== "help" )
    .sort();
}

function mapModules() {
  return Object.getOwnPropertyNames( Utils )
    .filter( item => item !== "help" )
    .sort()
    .map(
      module => {
        return [ "", `  - ${ module } (module)` ].concat(
          Object.getOwnPropertyNames( Utils[ module ] )
            .filter( item => item !== "__esModule"  )
            .sort()
            .map( item => `    - ${ item }` )
        );
      }
    )
    .reduce( ( acc, val ) => { return acc.concat( val ); } )
    .join( "\n" );
}

function qualifiedFunctions() {
  const modules = listModuleMembers( Utils );
  
  return modules.map(
    module => {
      return listModuleMembers( Utils[ module ] )
        .map( item => `${ module }.${ item }` );
    }
  ).reduce(
    ( acc, coll ) => { return acc.concat( coll ); },
    []
  );
}

function stripQualifier( input ) {
  return input.slice( input.indexOf( "." ) + 1 );  
}

function bareFunctions() {
  return qualifiedFunctions().map(
    item =>stripQualifier( item )
  );  
}

export {
  bareFunctions,
  generalHelp,
  getHelpItemText,
  helpMapping,
  isModule,
  listModuleMembers,
  moduleHelpText,
  qualifiedFunctions,
  stripQualifier
};

