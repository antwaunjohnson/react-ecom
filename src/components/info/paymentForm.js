import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

import history from "../../history";
import OrderSummary from "./orderSummary";
import { UnderlinedTitle } from "./infoHelp";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field
          className="payment-form__name"
          name="name"
          type="name"
          title="Name"
          placeholder="Name on Card"
          component={FormInput}
        />
        <Field
          className="payment-form__card"
          name="card"
          type="card"
          title="Debit or Credit Card Number"
          placeholder="____-____-____-____"
          component={FormInput}
        />
        <Field
          className="payment-form__expiration"
          name="expiration"
          type="expiration"
          title="Expiration Date"
          placeholder="Exp. Date"
          component={FormInput}
        />
        <Field
          className="payment-form__cvv"
          name="cvv"
          type="cvv"
          title="CVV"
          placeholder="CVV"
          component={FormInput}
        />
        <div className="payment-form__line"></div>
        <Field
          className="payment-form__pay-complete"
          onClick={() => history.push("/info/payment")}
          name="pay-complete"
          type="submit"
          title="Pay & Complete"
          component={FormButton}
        />
        <Field
          className="payment-form__back"
          onClick={() => history.push("/signin")}
          name="back"
          type="button"
          title="Back"
          short="true"
          component={FormButton}
        />
        <OrderSummary className="payment-form__order-summary" />
        <div className="payment-form__shipping-info shipping-info">
          <UnderlinedTitle
            className="shipping-info__title"
            title="Shipping To"
          />
          <div className="shipping-info__name small-text">Lamont Johnson</div>
          <div className="shipping-info__address small-text">
            One Anywhere Pl
          </div>
        </div>
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm",
})(PaymentForm);

export default PaymentForm;
