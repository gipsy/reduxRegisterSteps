import React from 'react';
import { connect } from 'react-redux';
import { FormSection, Field, Fields, reduxForm, formValueSelector } from 'redux-form';
import moment from 'moment';
import cx from 'classnames';
import { RadioGroup, Radio } from 'react-radio-group';
import validate from '../../validation';

const fillDaysArray = (iYear, iMonth) => {
  let arr = [];
  let daysInMonth = moment(`${iYear}-${iMonth}`, 'YYYY-MM').daysInMonth()
  for (let i = 1; i <= daysInMonth; i++) {
    arr.push({label: i, value: i});
  }
  return arr;
}

const fillMonthsArray = () => {
  let arr = [];
  for (let i = 0; i < moment.months().length; i++) {
    arr.push({label: moment.months()[i], value: i+1})
  }
  return arr;
}

const fillYearsArray = (value) => {
  let arr = [];
  for (let i = moment().year(); i > value; i--) {
    arr.push({label: i, value: i})
  }
  return arr;
}

let renderBirthdaySelector = (fields) => (
  <div>
    <p className="Form__Content--group-title">
      Date of Birth
      {/* {JSON.stringify(fields)} */}
    </p>
    <div className="Form__SelectGroup">
      <div className="Form__SelectWrapper">
        <select
          {...fields.day.input}
          className={
            cx(`Form__FieldGroupItem${fields.day.meta.touched && fields.day.meta.error ? "--error" : ""}`)
          }
        >
          <option value="">Select day...</option>
          {fillDaysArray(fields.yearValue || moment().year(), fields.monthValue || moment().month()).map((day, i) => <option value={day.value} key={i}>{day.label}</option>)}
        </select>
        {fields._error}
      </div>
      <div className="Form__SelectWrapper">
        <select
          {...fields.month.input}
          className={
            cx(`Form__FieldGroupItem${fields.month.meta.touched && fields.month.meta.error ? "--error" : ""}`)
          }
        >
          <option value="">Select month...</option>
          {fillMonthsArray().map((month, i) => <option value={month.value} key={i}>{month.label}</option>)}
        </select>
      </div>
      <div className="Form__SelectWrapper">
        <select
          {...fields.year.input}
          className={
            cx(`Form__FieldGroupItem${fields.year.meta.touched && fields.year.meta.error ? "--error" : ""}`)
          }
        >
          <option value="">Select year...</option>
          {fillYearsArray(1900).map((year, i) => <option value={year.value} key={i}>{year.label}</option>)}
        </select>
      </div>
    </div>
  </div>
)

// renderBirthdaySelector = reduxForm({
//   form: 'signup',
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true,
//   validate
// })(renderBirthdaySelector)

export default renderBirthdaySelector;
