import React from "react";
import { Link } from 'react-router-dom';
import PotDetail from "./PotDetail";
interface PotProps {
    id: number;
    title: string;
    amount: number;
    user: any;
};
interface PotListProps {
    pots: PotProps[];
    handleDelete: (pot: PotProps) => void;
    handleEdit: (pot: PotProps) => void;
};

const PotList = ({pots, handleDelete, handleEdit}: PotListProps) => {

    if(pots.length === 0 ) {
        return(<p>You have no pots! Lets get you started!</p>)
    };

    const potElements = pots.map((pot, index) => {
        return (
            <li key={index} className="pot-item">
                <div className ="pot">
                    <PotDetail pot={pot} handleDelete={handleDelete} handleEdit={handleEdit}/>
                </div>
            </li>
        );
    });

    return (
        <>
        <p><Link id='pot-form' to="/pots/add">Create New Pot</Link></p>

        <ul className = "pot-list">
            {potElements}
        </ul>
        </>
    );
};

export default PotList;