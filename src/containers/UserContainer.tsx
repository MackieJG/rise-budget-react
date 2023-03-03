import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBarTop from "../components/navigation/NavBarTop";
import UserList from "../components/users/UserList";
import ApiRequest from '../helpers/request';
import Footer from "../components/footer/Footer"
import UserFormEdit from "../components/users/UserFormEdit";
import UserForm from "../components/users/UserForm";

interface ExpenseProps {
    title: string;
    amount: number;
    provider: any;
    categoryType: any;
    user: any;
    timeStamp: string;
};

interface UserProps {
    id: number;
    name: string;
    budget: number;
    expenses: ExpenseProps[];
    pots: PotProps[];
}

interface PotProps {
    id: number;
    title: string;
    amount: number;
    user: any;
}

const UserContainer = ({user}: any) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const potPromise = request.get('/api/users')

        Promise.all([potPromise])
            .then((data) => {
                setUsers(data[0]);
            });
    }, []);

    const findUserById = (id: any) => {
        return users.find((user: UserProps) => {
            return user.id === parseInt(id);
        })
    }

    const handleDelete = (user: any) => {
        const request = new ApiRequest();
        const url = '/api/users/' + user.id;
        request.delete(url).then(() => {
           window.location.href = '/users';
        })
    };

    const handleEdit = (user: any) => {
        const request = new ApiRequest();
        const url = '/api/users/' + user.id;
        request.put(url, user).then(() => {
            window.location.href = '/users';
        })
    }


    const handlePost = (user: any) => {
        const request = new ApiRequest();
        user["user"] = user
        request.post('/api/users/', user).then(() => {
            window.location.href = '/users';
        })
    }

    const UserFormEditWrapper = () => {
        const { id } = useParams();
        let foundUser = findUserById(id);
        if (!foundUser) {
            return <div>Loading...</div>;
        }
        return (<UserFormEdit user={foundUser} budget={0} onEdit={handleEdit} /> );
    }

    return (
        <>
        <NavBarTop/>
        <Routes>
            <Route path="/" element={<UserList users={users} handleDelete={handleDelete} handleEdit={handleEdit} /> }/>
            <Route path="/add" element={<UserForm user={user} onCreate={handlePost} /> } />
            <Route path="/:id/edit" element={<UserFormEditWrapper /> } />
        </Routes>
        <Footer/>
        </>
    )
}
export default UserContainer;