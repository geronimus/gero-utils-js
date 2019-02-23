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
  uuid
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
  uuid
};

