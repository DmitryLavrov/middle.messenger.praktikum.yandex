import {FormData} from '../core/types'

const validators = {
  first_name: {
    regex: /^[А-ЯA-Z][А-ЯA-Zа-яa-z]+$/,
    message: 'Invalid name'
  },
  second_name: {
    regex: /^[А-ЯA-Z][А-ЯA-Zа-яa-z]+$/,
    message: 'Invalid surname'
  },
  login: {
    regex: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
    message: 'Invalid login'
  },
  email: {
    regex: /^\S+@\S+\.\S+$/,
    message: 'Invalid email'
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    message: 'Invalid password'
  },
  phone: {
    regex: /^\+?[0-9-]{10,15}$/,
    message: 'Invalid phone number'
  },
  message: {
    regex: /.*\S.*/,
    message: 'Empty message'
  }
}

export const validateField = (fieldName: string, value: string): null | string => {
  const validator = validators[fieldName]
  if (validator && !validator.regex.test(value)) {
    return validators[fieldName].message
  }
  return null
}

export const validateForm = (formData: FormData = {}) => {
  if (Object.entries(formData).every(([key, value]) => (validateField(key, value) === null))) {
    return null
  }
  return 'There are some errors in the form'
}
