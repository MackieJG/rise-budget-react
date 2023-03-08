import React, { useState } from "react";

interface PotProps {
  id: number;
  title: string;
  targetAmount: number;
  currentAmount: number;
  user: any;
}
interface PotFormProps {
    onCreate: (pot: any) => void;
    user: any;
}

const PotForm = ({ user, onCreate }: PotFormProps) => {

  const [statePot, setStatePot] = useState<PotProps>({
    id: 0,
    title: '',
    targetAmount: 0,
    currentAmount: 0,
    user: user,
  });

   
  const handleChange = function (event: any) {
    const { name, value } = event.target;
    setStatePot(prevPot => ({
      ...prevPot,
      [name]: value,
    }));
  };
  
  

  const handleSubmit = function (event: any) {
    event.preventDefault();
    onCreate(statePot);
  };


  return (
    <div className="user-edit-form-container">
      <form className="user-edit-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pot Title"
          name="title"
          onChange={handleChange}
          value={statePot.title}
        />
        <input
          type="number"
          placeholder="Target Amount"
          name="targetAmount"
          onChange={handleChange}
          value={statePot.targetAmount}
        />
        <input
          type="number"
          placeholder="Current Amount"
          name="currentAmount"
          onChange={handleChange}
          value={statePot.currentAmount}
        />
        <button type="submit">Save</button>
      </form>    
    </div>
  );

};
  
export default PotForm;