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

import React, { useState } from "react";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userResponse, setUserResponse] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://cyf-cors-api.herokuapp.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(response => response.json())
      .then(data => {
        const stringifiedData = JSON.stringify(data, null, 2);
        setUserResponse(stringifiedData);
      })
  }

  return (
    <div className="CreateAccount">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{userResponse}</p>
    </div>
  );
};

export default CreateAccount;
