import React from 'react';

const UsersForm = ({ handleChange, handleSubmit, user }) => {
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

      <button className="reg-button">Edit</button>
    </form>
  );
};

export default UsersForm;
