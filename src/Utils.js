import { head, last, splitList, tail } from "./Collection";
import { IllegalArgument, IllegalOperation } from "./Error";
import {
  isAtomicString,
  isNonEmptyString,
  isNull,
  isPrimitive,
  quacksLike,
  randomInt,
  range,
  uuid
} from "./Value";
import { getHelpItemText, listFunctions } from "./help";  

function help( withWhat ) {

  return getHelpItemText( withWhat );
}

export default { 
  head,
  last,
  splitList,
  tail,
  IllegalArgument,
  IllegalOperation,
  isAtomicString,
  isNonEmptyString,
  isNull,
  isPrimitive,
  quacksLike,
  randomInt,
  range,
  uuid,
  help,
  listFunctions
};
export {  
  head,
  last,
  splitList,
  tail,
  IllegalArgument,
  IllegalOperation,
  isAtomicString,
  isNonEmptyString,
  isNull,
  isPrimitive,
  quacksLike,
  randomInt,
  range,
  uuid,
  help,
  listFunctions
};

