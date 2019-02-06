import { IllegalArgument, IllegalOperation } from "./Error";
import { when } from "./Logic";
import {
  isAtomicString,
  isNonEmptyString,
  isNull,
  randomInt,
  range,
  uuid
} from "./Value";
import { getHelpItemText, listFunctions } from "./help";  

function help( withWhat ) {

  return getHelpItemText( withWhat );
}

export default { 
  IllegalArgument,
  IllegalOperation,
  isAtomicString,
  isNonEmptyString,
  isNull,
  randomInt,
  range,
  uuid,
  when,
  help,
  listFunctions
};
export {  
  IllegalArgument,
  IllegalOperation,
  isAtomicString,
  isNonEmptyString,
  isNull,
  randomInt,
  range,
  uuid,
  when,
  help,
  listFunctions
};

