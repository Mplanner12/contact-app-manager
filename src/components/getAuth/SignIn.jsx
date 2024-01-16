import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-container">
      <form action="">
        <h1>Log In</h1>
        <input type="email" placeholder="Enter your Eamil" value={email} />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
        />
      </form>
    </div>
  );
};

export default SignIn;
