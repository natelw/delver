import React from 'react';

const CampaignsForm = ({ handleChange, handleSubmit, campaign }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-entry">
        <input
          name="name"
          type="text"
          placeholder="Campaign name..."
          onChange={handleChange}
          value={campaign.name}
          className="former"
        />
      </div>

      <button className="done-button">Done</button>
    </form>
  );
};

export default CampaignsForm;
