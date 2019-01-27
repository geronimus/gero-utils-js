function isNonEmptyString( value ) {
  return !isNull( value ) &&
    typeof value === "string" &&
    value.length > 0 &&
    !/^\s+$/.test( value );
}

function isNull( value ) {
  return value === undefined ||
    value === null;
}

export {
  isNonEmptyString,
  isNull
};

