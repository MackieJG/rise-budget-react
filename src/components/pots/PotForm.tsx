import React, { useState } from "react";

interface PotProps {
    id: number;
    title: string;
    amount: number;
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
    amount: 0,
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
    <div>
      <form className='pot-form-container' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pot Title"
          name="title"
          onChange={handleChange}
          value={statePot.title}
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          onChange={handleChange}
          value={statePot.amount}
        />
        <button type="submit">Save</button>
      </form>    
    </div>
  );

};
  
export default PotForm;