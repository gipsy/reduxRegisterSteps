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

  // #TODO find out why values is empty
  // if (!values.day) {
  //   errors.day = 'Required'
  // }
  // if (!values.month) {
  //   errors.month = 'Required'
  // }
  // if (!values.year) {
  //   errors.year = 'Required'
  // }

  // #TODO ensure users age is more than 18 years
  // if (moment().diff(`${values.year}-${values.month}-${values.day}`, 'years')) {
  //   console.log(moment().diff(`${values.year}-${values.month}-${values.day}`, 'years'))
  //   errors.birthday = 'You must be more than 18 age old'
  // }
  return errors
}

export default validate;
