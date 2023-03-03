import React, { useState } from "react";

interface PotProps {
    id: number;
    title: string;
    amount: number;
    goal_date: string;
}

interface PotFormEditProps {
    pot: PotProps
    onEdit: (pot: any) => void;
    amount: number;
    goal_date: string;
}

const PotFormEdit = ({pot, onEdit }: PotFormEditProps) => {

    const [statePot, setStatePot] = useState<PotProps>(
        {
            id: pot.id,
            title: pot.title,
            amount: pot.amount,
            goal_date: pot.goal_date
        }
    );

    const handleChange = function (event: any) {
        const { name, value } = event.target;
        setStatePot(prevPot => ({
          ...prevPot,
          [name]: value,
        }));
    };

    const handleSubmit = function (event: any) {
        event.preventDefault();
        onEdit(statePot);
    };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Pot Title"
              name="title"
              onChange={handleChange}
              value={pot.title}
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

}

export default PotFormEdit;