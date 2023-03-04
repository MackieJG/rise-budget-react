import React from 'react'
import {useNavigate} from 'react-router-dom';
import './PotList.css';

interface PotProps {
    id: number;
    title: string;
    amount: number;
    user: any;
};
interface PotDetailProps {
    pot: PotProps;
    handleDelete: (pot: PotProps) => void;
    handleEdit: (pot: PotProps) => void;
};

const PotDetail = ({pot, handleDelete}: PotDetailProps) => {

    const navigate = useNavigate();

    const onDelete = () => {
        handleDelete(pot)
    };
    
    const onEdit = () => {
        navigate(`/pots/${pot.id}/edit`)
    };

    if(!pot) {
        return (
            <p>
                loading...
            </p>
        );
    };

    return (
        <>
        <div className='pot-page'>
        <div className="pot-detail">
            <p>{pot.title}</p>
            <p>{pot.amount}</p>
         </div>
        <div className="buttons">
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit Pot</button>
        </div>
        </div>
        </>
    );
}
export default PotDetail;