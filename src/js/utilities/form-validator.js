const REGX_NAME = /^[a-zA-Z ]{0,30}$/;

export const nameFieldIsValid = (value) => REGX_NAME.test(value);
