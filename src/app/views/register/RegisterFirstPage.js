import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../validation';
import renderField from './renderField';

class RegisterFirstPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <form className="Form" role="form" onSubmit={handleSubmit}>
        <div className="Form__Title">
          Signup
        </div>
        <ul className="Form__Progress">
          <li className="is-active">1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <div className="Form__Content">
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
          <Field
            name="password_confirm"
            type="password"
            component={renderField}
            label="Confirm password"
          />
        </div>
        <div className="Form__Footer">
          <button
            className="Form__BtnNext"
            type="submit"
            disabled={`${this.props.invalid ? 'true' : ''}`}
          >
            Next
            <span className="anticon icon-arrowright"></span>
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(RegisterFirstPage);
