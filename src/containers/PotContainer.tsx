import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PotList from "../components/pots/PotList";
import ApiRequest from "../helpers/request";
import NavBarTop from "../components/navigation/NavBarTop";
import PotForm from "../components/pots/PotForm";
import PotFormEdit from "../components/pots/PotFormEdit";
import Footer from "../components/footer/Footer";

interface PotProps {
    id: number;
    title: string;
    amount: number;
    goal_date: string;
    user: any;
}

const PotContainer = ({user}: any) => {

    const [pots, setPots] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const potPromise = request.get('/api/pots')

        Promise.all([potPromise])
            .then((data) => {
                setPots(data[0]);
            })
    }, [])


    const findPotById = (id: any) => {
        return pots.find((pot: PotProps) => {
            return pot.id === parseInt(id);
        })
    }

    const handleEdit = (pot: any) => {
        const request = new ApiRequest();
        const url = '/api/pots' + pot.id;
        pot["pot"] = pot
        request.put(url, pot).then(() => {
            window.location.href = '/pots'
        })
    }

    const PotFormEditWrapper = () => {
        const { id } = useParams();
        let foundPot = findPotById(id);
        if (!foundPot) {
            return <div>Loading...</div>;
        }
        return (<PotFormEdit pot={foundPot} onEdit={handleEdit} amount={0} goal_date={""} />);
    }

    const handleDelete = (id: any) => {
        const request = new ApiRequest();
        const url = '/api/pots/' + id;
    
        request.delete(url).then(() => {
          window.location.href = '/pots';
        })
    }

    const handlePost = (pot: any) => {
        const request = new ApiRequest();
        pot["user"] = user
        request.post('/api/pots', pot).then(() => {
            window.location.href = '/pots'
        })
    }

    return (
        <>
        <NavBarTop/>
        <Routes>
            <Route path="/" element={<PotList pots={pots} handleDelete={handleDelete} />} />
            <Route path="/add" element={<PotForm onCreate={handlePost} />} />
            <Route path="/edit" element={<PotFormEditWrapper /> } />
        </Routes>
        </>
    )
}
export default PotContainer;


