import React, { useState } from "react";
interface PotProps {
  id: number;
  title: string;
  targetAmount: number;
  currentAmount: number;
  user: object | null;
}

interface PotFormEditProps {
  pot: PotProps;
  targetAmount: number;
  currentAmount: number;
  user: any;
  onEdit: (pot: any) => void;
}

const PotFormEdit = ({pot, onEdit }: PotFormEditProps) => {

  const [statePot, setStatePot] = useState<PotProps>(
    {
      id: pot.id,
      title: pot.title,
      targetAmount: pot.targetAmount,
      currentAmount: pot.currentAmount,
      user: pot.user
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
          value={statePot.title}
        />
        <input
          type="number"
          placeholder="Target Amount"
          name="target_amount"
          onChange={handleChange}
          value={statePot.targetAmount}
        />
                <input
          type="number"
          placeholder="Current Amount"
          name="current_amount"
          onChange={handleChange}
          value={statePot.currentAmount}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );

}

export default PotFormEdit;