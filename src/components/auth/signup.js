import React, { Component } from "react";

import { reduxForm } from "redux-form";

class SignUp extends Component {
  render() {
    return <div className="signup">Sign Up</div>;
  }
}

SignUp = reduxForm({
  form: "SignUp",
})(SignUp);
export default SignUp;
