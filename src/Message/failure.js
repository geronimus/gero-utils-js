import { failure } from "../Message";
import { illegalArg, illegalOp } from "./failure/text";

function illegalArgFailure( param, expected, actual ) {
  
  return failure(
    illegalArg( param, expected, actual )
  );
}

function illegalOpFailure( methodCalled, rule, whatYouDidWrong ) {

  return failure(
    illegalOp( methodCalled, rule, whatYouDidWrong )
  );
}

export { illegalArgFailure, illegalOpFailure };

