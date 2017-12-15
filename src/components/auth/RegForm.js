import React from 'react';

const RegForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-entry">
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
          className="former"
        />
      </div>
      <div className="form-entry">
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="former"
        />
      </div>
      <div className="form-entry">
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="former"
        />
      </div>
      <div className="form-entry">
        <input
          name="passwordConfirmation"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="former"
        />
      </div>

      <button className="btn">Login</button>
    </form>
  );
};

export default RegForm;
