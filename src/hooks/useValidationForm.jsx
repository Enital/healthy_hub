import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          if (!value) {
            setEmpty(true);
          } else {
            setEmpty(false);
          }
          break;
        case 'isName':
          const paternName = /[A-Za-z\s]{2,25}/;
          const nameValid = paternName.test(String(value).toLowerCase());
          if (nameValid) {
            setNameError(false);
          } else {
            setNameError(true);
          }
          break;
        case 'isEmail':
          const paternEmail =
            /(?=.{1,256}$)[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?!-)[a-zA-Z]{2,63}/;
          paternEmail.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;

        case 'isPassword':
          const paternPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
          paternPassword.test(String(value))
            ? setPasswordError(false)
            : setPasswordError(true);
          break;

        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthError(true);
          } else {
            setMinLengthError(false);
          }
          break;
        case 'maxLength':
          if (value.length > validations[validation]) {
            setMaxLengthError(true);
          } else {
            setMaxLengthError(false);
          }
          break;
        default:
          return;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (
      isEmpty ||
      passwordError ||
      emailError ||
      nameError ||
      maxLengthError ||
      minLengthError
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [
    isEmpty,
    nameError,
    passwordError,
    emailError,
    maxLengthError,
    minLengthError,
  ]);

  return {
    isEmpty,
    nameError,
    emailError,
    passwordError,
    minLengthError,
    maxLengthError,
    inputValid,
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
