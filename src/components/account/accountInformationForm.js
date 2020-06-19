import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton, ChangePasswordButton } from "../formFields";

class AccountInformationForm extends Component {
  constructor() {
    super();

    this.state = {
      showPasswords: false,
    };
  }
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        className={`${className} account-information-form`}
      >
        <Field
          className="account-information-form__name"
          name="name"
          type="name"
          title="Name"
          placeholder="Name"
          component={FormInput}
        />
        <Field
          className="account-information-form__email"
          name="email"
          type="email"
          title="Email"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="account-information-form__street-address"
          name="street-address"
          type="address"
          title="Street Address"
          placeholder="Street Address"
          component={FormInput}
        />
        <Field
          className="account-information-form__city"
          name="city"
          type="city"
          title="City"
          placeholder="City"
          component={FormInput}
        />
        <Field
          className="account-information-form__state"
          name="state"
          type="state"
          title="State"
          placeholder="State"
          component={FormInput}
        />
        <Field
          className="account-information-form__zipcode"
          name="zipcode"
          type="zipcode"
          title="Zip Code"
          placeholder="Zip Code"
          component={FormInput}
        />

        {this.state.showPasswords ? (
          [
            <Field
              key={0}
              className="account-information-form__current-password"
              name="current-password"
              type="current-password"
              title="Current Passord"
              placeholder="Current Password"
              component={FormInput}
            />,
            <Field
              key={1}
              className="account-information-form__new-password"
              name="new-password"
              type="new-password"
              title="New Passord"
              placeholder="New Password"
              component={FormInput}
            />,
            <Field
              key={2}
              className="account-information-form__confirm-password"
              name="confirm-password"
              type="confirm-password"
              title="Confirm Passord"
              placeholder="Confirm Password"
              component={FormInput}
            />,
          ]
        ) : (
          <Field
            className="account-information-form__change-password"
            onClick={() => this.setState({ showPasswords: true })}
            name=""
            labelTitle="Password"
            type="button"
            title="Change Password"
            component={ChangePasswordButton}
          />
        )}
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;
