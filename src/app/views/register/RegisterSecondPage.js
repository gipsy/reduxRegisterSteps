import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';
import renderField from './renderField';
import renderBirthdayField from './renderBirthdayField';
import { RadioGroup, Radio } from 'react-radio-group';
import validate from '../../validation';

class RegisterSecondPage extends Component {
  constructor(props) {
    super(props)
    this.onGenderUpdate = this.onGenderUpdate.bind(this)
    this.onWhereUpdate = this.onWhereUpdate.bind(this)
  }

  state = {
    gender: 'female',
    where: 'internet'
  }

  onGenderUpdate(e) {
    // this.setState({ gender: e.value });
    console.log(e)
    console.log('onGenderUpdate fired!')
    this.setState({ gender: e })
    // console.log(this.state.gender);
  }

  onWhereUpdate(e) {
    this.setState({ where: e.value });
  }

  render() {

    const whereOpts = [
      { value: 'internet', label: 'internet'},
      { value: 'radio', label: 'radio'},
      { value: 'tv', label: 'tv'},
      { value: 'friends', label: 'friends'},
      { value: 'social', label: 'social'},
    ]

    const { handleSubmit, previousPage } = this.props

    return (
      <form className="Form" role="form" onSubmit={handleSubmit}>
        <div className="Form__Title">
          Signup
        </div>
        <ul className="Form__Progress">
          <li className="is-active">1</li>
          <li className="is-active">2</li>
          <li>3</li>
        </ul>
        <div className="Form__Content">
          <div className="Form__FieldGroup">
            <p className="Form__Content--group-title">
              Date of Birth
            </p>
            <Field
              name="day"
              type="number"
              component={renderBirthdayField}
              label="birthday"
            />
          </div>
          <div className="Form__FieldGroup">
            <p className="Form__Content--group-title">
              Gender
            </p>
            <RadioGroup
              className="Form__RadioGroup"
              name="gender"
              onChange={ this.onGenderUpdate }
            >
              <label className={`Form__RadioBtn ${this.state.gender === 'male' ? 'is-active' : ''}`}>
                <Radio
                  value="male"
                  checked={this.state.gender === 'male'}
                />Male
              </label>
              <label className={`Form__RadioBtn ${this.state.gender === 'female' ? 'is-active' : ''}`}>
                <Radio
                  value="female"
                  checked={this.state.gender === 'female'}
                />Female
              </label>
              <label className={`Form__RadioBtn ${this.state.gender === 'unspecified' ? 'is-active' : ''}`}>
                <Radio
                  value="unspecified"
                  checked={this.state.gender === 'unspecified'}
                />Unspecified
              </label>
            </RadioGroup>
          </div>
          <div className="Form__FieldGroup">
            <p className="Form__Content--group-title">
              Where did you hear about us?
            </p>
            <Field name="where"
              component={props =>
                <Select
                  className="Form__DefaultSelect"
                  value={this.state.where}
                  options={whereOpts}
                  onChange={ this.onWhereUpdate.bind(this) }
                />
              }
            />
          </div>
        </div>
        <div className="Form__Footer">
          <button
            className="Form__BtnPrev"
            type="button"
            onClick={previousPage}
          >
            Back
          </button>
          <button
            className="Form__BtnNext"
            type="submit"
          >
            Next
            <span className="anticon icon-arrowright"></span>
          </button>
        </div>
      </form>
    ) 
  }
}

export default reduxForm({
  form: 'wizard',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate
})(RegisterSecondPage)
