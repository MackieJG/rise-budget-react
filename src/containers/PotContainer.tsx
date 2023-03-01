import React, { useState, useEffect } from "react";
import PotList from "../components/pots/PotList";
import ApiRequest from "../helpers/request";


interface PotProps {
    title: string;
    amount: BigInt;
    user: UserProps;
}

interface UserProps{
    name: string;
    budget: BigInt;
    expenses: ExpenseProps[];
    pots: PotProps[];
}

interface PotProps {
    title: string;
    amount: BigInt;
    user: UserProps;
}

interface ExpenseProps {
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: any;
    user: any;
    timeStamp: string;
}

const PotContainer = () => {

    const [pots, setPots] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const potPromise = request.get('/api/pots')
        potPromise
        .then((data: any) => setPots(data))
    }, [])

    const handleDelete = (id: any) => {
        const request = new ApiRequest();
        const url = '/api/pots/' + id;
    
        request.delete(url).then(() => {
          window.location.href = '/pots';
        })
      }

    return (
        <>
        <PotList pots={pots} onDelete={handleDelete} />
        </>
    )
}
export default PotContainer;


