import React, { useState } from 'react';



const ProviderForm = ({ onCreateProvider }) => {
  const [providerName, setProviderName] = useState('');

  const handleChange = function (event) {
    setProviderName(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    onCreateProvider(providerName);
    setProviderName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Provider Name"
          name="providerName"
          onChange={handleChange}
          value={providerName}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProviderForm;
