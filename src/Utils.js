import { IllegalArgument, IllegalOperation } from "./error/Error";
import { when } from "./logic/Logic";
import {
  isAtomicString,
  isNonEmptyString,
  isNull,
  randomInt,
  range,
  uuid
} from "./value/Value";
import { getHelpItemText } from "./help";  

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
  help
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
  help
};

