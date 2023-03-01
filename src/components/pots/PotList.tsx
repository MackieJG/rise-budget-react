import React from "react";
import PotDetail from "./PotDetail";

interface PotListProps {
    pots: PotProps[];
}

interface PotProps {
    title: string;
    amount: BigInt;
    user: any;
}

const PotList = ({pots}: PotListProps ) => {
    if(pots.length === 0 ) {
        return(<p>You have no pots! Lets get you started!</p>)
    }

    const potElements = pots.map((pot, index) => {
        return (
            <li key={index} className="pot-item">
                <div className ="pots">
                    <PotDetail pots={pots} />
                </div>
            </li>
        )
    })

    return (
        <>
        <ul className = "pot-list">
            {potElements}
        </ul>
        </>
    )
}
export default PotList;