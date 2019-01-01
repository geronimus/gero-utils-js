import * as Error from "./error/Error";
import * as Logic from "./logic/Logic";
import * as Value from "./value/Value";
import {
  getHelpItemText,
  isModule,
  listModuleMembers,
  moduleHelpText
} from "./help";  

function help( withWhat ) {
  if ( isModule( withWhat ) ) {
    return moduleHelpText( withWhat, listModuleMembers( this[ withWhat ] ) );
  } else {
    return getHelpItemText( withWhat );
  }
}

export default { Error, Logic, Value, help };
export { Error, Logic, Value, help };

