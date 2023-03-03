import React, { useState, useEffect } from "react";
import NavBarTop from "../components/navigation/NavBarTop";
import UserList from "../components/users/UserList";
import ApiRequest from '../helpers/request';
import Footer from "../components/footer/Footer"

interface ExpenseProps {
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: any;
    user: any;
    timeStamp: string;
}

interface UserProps {
    name: string;
    budget: BigInt;
    expenses: ExpenseProps[];
    pots: PotProps[];
}

interface PotProps {
    title: string;
    amount: BigInt;
    user: any;

}

interface UserListProps {
    users: UserProps[];
}

const UserContainer = () => {

    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        const request = new ApiRequest();
        const userPromise = request.get('/api/users')
        userPromise
        .then((data: any) => setUsers(data))
    },[])

    const handleDelete = (id: number) => {
        const request = new ApiRequest();
        const url = '/api/users/' + id;
        request.delete(url).then(() => {
           window.location.href = '/users';
        })
    };


    return (
        <>
        <NavBarTop/>
        <UserList users={users} handleDelete={handleDelete}/>
        <Footer/>
        </>
    )
}
export default UserContainer;