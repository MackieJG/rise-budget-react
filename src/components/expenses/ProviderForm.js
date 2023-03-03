import React, { useState } from 'react';



const ProviderForm = ({ onChangeProvider, providerName }) => {
  const handleChange = function (event) {
    onChangeProvider(event.target.value);
  };

 
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Provider Name"
          name="providerName"
          onChange={handleChange}
          value={providerName}
        />
      </form>
    </div>
  );
};

export default ProviderForm;
