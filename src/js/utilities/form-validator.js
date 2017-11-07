const REGX_NAME = /^[a-zA-Z ]{0,30}$/;
const REGX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const nameIsValid = (name) => REGX_NAME.test(name);
export const emailIsValid = (email) => REGX_EMAIL.test(email);
