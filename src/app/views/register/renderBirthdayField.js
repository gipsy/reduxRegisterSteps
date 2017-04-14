import React, { Component } from 'react';
import { Field } from 'redux-form';
import Select from 'react-select';
import cx from 'classnames';
import 'react-select/dist/react-select.css';
import { RadioGroup, Radio } from 'react-radio-group';
import moment from 'moment';

class renderBirthdayField extends Component {
  constructor(props) {
    super(props)
    this.onDayUpdate = this.onDayUpdate.bind(this)
    this.onMonthUpdate = this.onMonthUpdate.bind(this)
    this.onYearUpdate = this.onYearUpdate.bind(this)

  }

  state = {
    day: moment().date(),
    month: moment(new Date()).format("MMMM"),
    year: moment().year(),
  }

  onDayUpdate(e) {
    this.setState({ day: e });
  };

  onMonthUpdate(e) {
    this.setState({ month: e });
  }

  onYearUpdate(e) {
    this.setState({ year: e });
  }


  render() {

    const fillDaysArray = (iMonth, iYear) => {
      let arr = [];
      let daysInMonth = 32 - new Date(iYear, iMonth, 32).getDate();
      for (let i = 1; i < daysInMonth; i++) {
        arr.push({label: i, value: i});
      }
      return arr;
    }

    const fillYearsArray = (value, len) => {
      var arr = [];
      for (var i = value; i < (value+len)+1; i++) {
        arr.push({label: i, value: i});
      }
      return arr;
    }

    let today = new Date(),
      day = today.getUTCDate(),
      month = today.getUTCMonth(),
      year = today.getUTCFullYear(),
      daysInCurrMonth = fillDaysArray(month, year);

    let days = fillDaysArray(month, year);
    let months = Object.values(moment.months()).map(d => ({value: d, label: d}));
    let years = fillYearsArray(1930, moment().diff('1930-01-01', 'years'))

    const { input, label, type, meta: { touched, error } } = this.props;
    console.log(this.props)

    return(
      <div className="Form__BirthdayFieldGroup">
        <Field name="birthday"
          component={props =>
            <Select
              name="day"
              className={
                cx(`Form__BirthdayFieldItem${touched && error ? "--error" : ""}`)
              }
              value={this.state.day}
              options={days}
              onChange={ this.onDayUpdate }
              onBlur={() => props.input.onBlur(props.input.value)}
            />
          }
        />
        <Field name="month"
          component={props =>
            <Select
              name="month"
              className={
                cx(`Form__BirthdayFieldItem${touched && error ? "--error" : ""}`)
              }
              value={this.state.month}
              options={months}
              onChange={ this.onMonthUpdate }
              onBlur={() => props.input.onBlur(props.input.value)}
            />
          }
        />
        <Field name="year"
          component={props =>
            <Select
              name="year"
              className={
                cx(`Form__BirthdayFieldItem${touched && error ? "--error" : ""}`)
              }
              value={this.state.year}
              options={years}
              onChange={ this.onYearUpdate }
              onBlur={() => props.input.onBlur(props.input.value)}
            />
          }
        />
        {/* {touched && error && <span>{error}</span>} */}
      </div>
    );
  }
}

export default renderBirthdayField;
