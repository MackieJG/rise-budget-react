import React from 'react';
import BuyHouseSavingAdvice from './BuyHouseSavingAdvice';
import LongTermSavingAdvice from './LongTermSavingAdvice';
import PensionsAdvice from './PensionsAdvice';
import RainyDayAdvice from './RainyDayAdvice';
import ShortSavingTermAdvice from './ShortTermSavingAdvice';

const AdviceList = () => {
    return(
        <>
            <ul>
                <li>
                    <h1 className='heading'>Tips On Saving For Young Adults</h1>
                    <h3 className='quote'>The best time to plant a tree was 20 years ago. The second best time is today.</h3>
                    <h4 className='quote-person'>-Kendrick Lamar, Money Trees</h4>

                    <h2>First and Foremost</h2>
                    <p>
                        First of all, create a budget and keep a spending diary for tracking your spending over time. 
                        Thank goodness you have found this app!
                        Once you have figured out your monthly budget with your money being greater than your money out, 
                        we can look at what to do with the leftovers.
                    </p>
                </li>
                <li className='category'>
                    <PensionsAdvice />
                </li>
                <li className='category'>
                    <RainyDayAdvice />
                </li>
                <li className='category'>
                    <h2>What Are Your Savings Goals?</h2>
                </li>
                <li className='category'>
                    <ShortSavingTermAdvice />
                </li>
                <li className='category'>
                    <BuyHouseSavingAdvice />
                </li>
                <li className='category'>
                    <LongTermSavingAdvice />
                </li>
            </ul>
        </>
    )
}

export default AdviceList;