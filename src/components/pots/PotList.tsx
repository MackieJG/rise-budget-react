import React from "react";
import { Link } from 'react-router-dom';
import PotDetail from "./PotDetail";
interface PotProps {
    id: number;
    title: string;
    targetAmount: number;
    currentAmount: number;
    user: any;
};
interface PotListProps {
    pots: PotProps[];
    handleDelete: (pot: PotProps) => void;
    handleEdit: (pot: PotProps) => void;
};

const PotList = ({pots, handleDelete, handleEdit}: PotListProps) => {

    if(pots.length === 0 ) {
        return(<><p>You have no pots! Lets get you started!</p>
        <p className="link-3"><Link className="link-3" id='pot-form' to="/pots/add">Create New Pot</Link></p>
        </>)
    };

    const potElements = pots.map((pot, index) => {
        return (
            <li key={index}>
                    <PotDetail pot={pot} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </li>
        );
    });

    return (
        <>
        <div className="pot-list-wrapper">
            <div className="pot-list-container">
                <div className = "pot-list">
                <p className="link-3"><Link className="link-3" id='pot-form' to="/pots/add">Click To Create New Pot!</Link></p>
                    {potElements}
                </div>
            </div>
        </div>
        </>
    );
};

export default PotList;