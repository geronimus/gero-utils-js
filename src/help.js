import { IllegalArgumentHelp, IllegalOperationHelp } from "./error/help";
import { whenHelp } from "./logic/help";
import {
  isAtomicStringHelp,
  isNonEmptyStringHelp,
  isNullHelp,
  randomIntHelp,
  rangeHelp,
  uuidHelp
} from "./value/help";
import * as Error from "./error/Error";
import * as Logic from "./logic/Logic";
import * as Value from "./value/Value";

const helpMapping = {
  IllegalArgument: IllegalArgumentHelp(),
  IllegalOperation: IllegalOperationHelp(),
  when: whenHelp(),
  isAtomicString: isAtomicStringHelp(),
  isNonEmptyString: isNonEmptyStringHelp(),
  isNull: isNullHelp(),
  randomInt: randomIntHelp(),
  range: rangeHelp(),
  uuid: uuidHelp()
};

function generalHelp() {

  return `
Geronimus Utilities for JavaScript (gero-utils.js) are functions I find myself rewriting for every JavaScript / ECMAScript project.

The collection is expected to grow over time.

You can list the available functions by calling:

  import Utils from "@geronimus/utils";

  Utils.listFunctions();

You can get help with a specific function by calling:

  Utils.help( functionName );

You can import each function by name, like this:

  import { IllegalArgument } from "@geronimus/utils";
  
  IllegalArgument( "myParam", "A valid value", myParam );
  `;
}

function getHelpItemText( item ) {

  if ( listFunctions().includes( item ) ) {
    return helpMapping[ item ];  
  } else {
    return generalHelp();  
  }
}

function listFunctions() {

  const defaultModuleMembers = [
    "__esModule",
    "help",
    "length",
    "name",
    "prototype"
  ];

  return Object.getOwnPropertyNames( Error )
    .concat( Object.getOwnPropertyNames( Logic ) )
    .concat( Object.getOwnPropertyNames( Value ) )
    .filter( ( item ) => !defaultModuleMembers.includes( item ) );
}

export {
  generalHelp,
  getHelpItemText,
  helpMapping,
  listFunctions,
};

