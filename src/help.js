import * as CollectionHelp from "./collection/help";
import * as ErrorHelp from "./error/help";
import * as ValueHelp from "./value/help";

import * as Collection from "./Collection";
import * as Error from "./Error";
import * as Value from "./Value";

const helpMapping = {
  head: CollectionHelp.headHelp(),
  last: CollectionHelp.lastHelp(),
  splitList: CollectionHelp.splitListHelp(),
  tail: CollectionHelp.tailHelp(),
  IllegalArgument: ErrorHelp.IllegalArgumentHelp(),
  IllegalOperation: ErrorHelp.IllegalOperationHelp(),
  isAtomicString: ValueHelp.isAtomicStringHelp(),
  isNonEmptyString: ValueHelp.isNonEmptyStringHelp(),
  isNull: ValueHelp.isNullHelp(),
  isPrimitive: ValueHelp.isPrimitiveHelp(),
  quacksLike: ValueHelp.quacksLikeHelp(),
  randomInt: ValueHelp.randomIntHelp(),
  range: ValueHelp.rangeHelp(),
  uuid: ValueHelp.uuidHelp()
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

  return Object.getOwnPropertyNames( Collection )
    .concat( Object.getOwnPropertyNames( Error ) )
    .concat( Object.getOwnPropertyNames( Value ) )
    .filter( ( item ) => !defaultModuleMembers.includes( item ) );
}

export {
  generalHelp,
  getHelpItemText,
  helpMapping,
  listFunctions,
};

