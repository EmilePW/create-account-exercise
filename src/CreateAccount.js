/*
  1) Create a component to create an account. The component should have a form element containing
  three inputs inside it: one for name, one for email
  and one for password.

  2) Use setState to save the name, email and input in three different state variables.

  3) Add a button at the bottom of the form to submit.

  4) Add a handleSubmit function which prevents the default behaviour and instead uses fetch
  to POST the information to the following API endpoint:
    https://cyf-cors-api.herokuapp.com/user

  5) Print out the JSON response for the POST request underneath the form (use setState to save
    the response in a state variable).
*/

import React from "react";

const CreateAccount = () => {
  return <div className="CreateAccount"></div>;
};

export default CreateAccount;
