import { isNull } from "../Value";

function illegalArg( param, expected, actual ) {

  if ( arguments.length === 0 || typeof param !== "string" )
    return "Illegal argument";

  if ( arguments.length === 1 || isNull( expected ) )
    return `Illegal argument: ${ param }`;

  if ( arguments.length === 2 )
    return `Illegal argument: ${ param }\n` +
      `  expected: ${ expected }`;

  return `Illegal argument: ${ param }\n` +
    `  expected: ${ expected }\n` +
    `  actual: ${ actual }`;
}

export { illegalArg };

