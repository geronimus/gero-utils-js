import { IllegalArgument, IllegalOperation } from "../Error";
import { isNull } from "../Value";

function isPrimitive( value ) {
  
  if ( [ ...arguments ].length < 1 ) {
    IllegalOperation(
      "isPrimitive()",
      "It must have an argument",
      "Called it without an argument"
    );
  } else if ( value === null ) {
    return true;
  } else {
    return [
      "boolean",
      "number",
      "string",
      "undefined"
    ].includes( typeof value );
  }
}

function quacksLike( subject, duck ) {
  
  if ( [ ...arguments ].length < 2 )
    IllegalOperation(
      "quacksLike()",
      "You must pass the arguments \"subject\" and \"duck\" to validate that \"subject's\" interface conforms to \"duck\"",
      "Called it with fewer than 2 arguments"
    );

  if ( isNull( subject ) || isNull( duck ) )
    IllegalArgument(
      isNull( subject ) ? "subject" : "duck",
      "a non-null object or primitive value",
      isNull( subject ) ? subject : duck
    );

  if ( isPrimitive( duck ) )
    return primitiveTypeReport( subject, typeof duck );
  else {
    const subjectProperties = isPrimitive( subject ) ? [] : Object.getOwnPropertyNames( subject );
    const duckProperties = Object.getOwnPropertyNames( duck );
    const matchedProperties = duckProperties.filter( item => subjectProperties.includes( item ) );
    const unmatchedProperties = duckProperties.filter( item => !subjectProperties.includes( item ) );
    const additionalProperties = subjectProperties.filter( item => !duckProperties.includes( item ) );

    return objectTypeReport( matchedProperties, unmatchedProperties, additionalProperties, typeof subject );
  }

  function primitiveTypeReport( subject, duckDataType ) {
  
    const subjectDataType = typeof subject;
    const additionalProperties = isPrimitive( subject ) ? [] : Object.getOwnPropertyNames( subject );

    return {
      result: subjectDataType === duckDataType,
      matchedProperties: [],
      unmatchedProperties: [],
      additionalProperties,
      subjectDataType,
      duckDataType
    };
  }

  function objectTypeReport(
    matchedProperties,
    unmatchedProperties,
    additionalProperties,
    subjectDataType
  ) {
    
    return {
      result: unmatchedProperties.length === 0,
      matchedProperties,
      unmatchedProperties,
      additionalProperties,
      subjectDataType,
      duckDataType: "object"
    };
  }
}

export { isPrimitive, quacksLike };

