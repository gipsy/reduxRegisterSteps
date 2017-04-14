import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';

class RegisterThirdPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit, previousPage } = this.props

    return (
      <form className="Form" role="form" onSubmit={handleSubmit}>
        <div className="Form__Title">
          Thank you!
        </div>
        <ul className="Form__Progress">
          <li className="is-active">Account</li>
          <li className="is-active">More Info</li>
          <li className="is-active">Confirmation</li>
        </ul>
        <div className="Form__Content">
          <div className="Form__IconCheck fa fa-check-circle"></div>
          <div className="Form__Action--center">
            <a className="Form__BtnGhost" href="/">Go to Dashboard</a>
          </div>
        </div>
      </form>
    ) 
  }
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(RegisterThirdPage)
