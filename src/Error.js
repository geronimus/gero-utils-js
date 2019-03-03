import { illegalArg, illegalOp } from "./Message/failure/text";

function IllegalArgument( param, expected, actual ) {
  throw new Error( illegalArg( param, expected, actual ) );
}

function IllegalOperation( methodCalled, rule, whatYouDidWrong ) {  
  throw new Error( illegalOp( methodCalled, rule, whatYouDidWrong ) );
}

export { IllegalArgument, IllegalOperation };

