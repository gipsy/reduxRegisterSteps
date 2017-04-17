import moment from 'moment';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more'
  }
  if (values.password !== values.password_confirm) {
    errors.password_confirm = 'should match'
  }

  console.log(errors)

  if (values.birthday) {
    if (!values.birthday.day) {
      errors.day = 'Required'
      // errors._error = 'Required'
      console.log('Day Required')
    }
    if (!values.birthday.month) {
      errors.month = 'Required'
      // errors._error = 'Required'
      console.log('Month Required')
    }
    if (!values.birthday.year) {
      errors.year = 'Required'
      // errors._error = 'Required'
      console.log('Year Required')
    }
  }

  if (values.birthday) {
    if ((moment().diff(`${values.year}-${values.month}-${values.day}`, 'years')) < 18) {
      // errors.birthday = 'You must be at least 18 years old'
      errors._error = 'You must be at least 18 years old'
    } else {
      errors._error = 'Required'
    }
  }
  return errors
}

export default validate;
