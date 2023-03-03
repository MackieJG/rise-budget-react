import React, { useState } from "react";


interface PotProps {
    id: number;
    title: string;
    amount: number;
    goal_date: string;
    user: any;
}

interface PotFormProps {
    onCreate: (pot: any) => void;
}

const PotForm = ({ onCreate }: PotFormProps) => {
    const [statePot, setStatePot] = useState<PotProps>({
      id: 0,
      title: '',
      amount: 0,
      goal_date: '',
      user: null,
    });

   
    const handleChange = function (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
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
          <form onSubmit={handleSubmit}>
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
            <input type="date" name="goal_date" placeholder="goal_date" onChange={handleChange} value={statePot.goal_date} />
            <button type="submit">Save</button>
          </form>    
        </div>
    );

};
  

export default PotForm;