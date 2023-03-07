import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PotList from "../components/pots/PotList";
import ApiRequest from "../helpers/request";
import NavBarTop from "../components/navigation/NavBarTop";
import PotForm from "../components/pots/PotForm";
import PotFormEdit from "../components/pots/PotFormEdit";
import Footer from "../components/footer/Footer";
import Swal from 'sweetalert2'

interface PotProps {
    id: number;
    title: string;
    target_amount: number;
    current_amount: number;
    user: any;
};

const PotContainer = ({user}: any) => {

    const [pots, setPots] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const potPromise = request.get('/api/pots')

        Promise.all([potPromise])
            .then((data) => {
                setPots(data[0]);
            });
    }, []);


    const findPotById = (id: any) => {
        return pots.find((pot: PotProps) => {
            return pot.id === parseInt(id);
        });
    };

    const handleDelete = (pot: any) => {
        const request = new ApiRequest();
        const url = '/api/pots/' + pot.id;
        request.delete(url).then(() => {
          window.location.href = '/pots';
        });
    };

    const handleEdit = (pot: any) => {
        const request = new ApiRequest();
        const url = '/api/pots/' + pot.id;
        pot["user"] = {... user}
        request.put(url, pot).then(() => {
            window.location.href = '/pots';
        });
    };

    const handlePost = (pot: any) => {
        const request = new ApiRequest();
        pot["user"] = user[0]
        request.post('/api/pots/', pot)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'New pot added!',
            showConfirmButton: true,
            confirmButtonText: 'OK!'
          }).then(() => {
            window.location.href = '/pots';
        });
    };

    const PotFormEditWrapper = () => {
        const { id } = useParams();
        let foundPot = findPotById(id);
        if (!foundPot) {
            return <p>Loading...</p>;
        };
        return (<PotFormEdit pot={foundPot} targetAmount={0} currentAmount={0} user={user} onEdit={handleEdit} /> );
    };

    
    return (
        <>
        <NavBarTop/>
        <Routes>
            <Route path="/" element={<PotList pots={pots} handleDelete={handleDelete} handleEdit={handleEdit} />} />
            <Route path="/add" element={<PotForm user={user} onCreate={handlePost} />} />
            <Route path="/:id/edit" element={<PotFormEditWrapper /> } />
        </Routes>
        <Footer/>
        </>
    );
};

export default PotContainer;


