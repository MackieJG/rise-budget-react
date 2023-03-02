import React from 'react';
import NavBarBottom from '../components/navigation/NavBarBottom';
import NavBarTop from '../components/navigation/NavBarTop';


const HomePage = () => {

    return (

        <div className='home-page'>
            <NavBarTop/>
            <div className='info-container'>
                <div className='info-details'>
                    <p className='info'>You Have £700 left for the month</p>
                    <p className='short-message'>You're on track for this month!</p>
                </div>
                <div className='chart'>
                    <p>chart</p>
                </div>
            </div>
            <NavBarBottom/>
        </div>
    )
}

export default HomePage;