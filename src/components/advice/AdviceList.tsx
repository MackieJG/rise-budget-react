import React from 'react';
import { Link } from 'react-router-dom';
import pensions from '../advice/icons/pension-coloured.png';
import rainy from '../advice/icons/rainy-day-coloured.png';
import shortterm from '../advice/icons/short-term-coloured.png';
import house from '../advice/icons/home-coloured.png';
import longterm from '../advice/icons/long-term-coloured.png';
import '../advice/advice.css';

const AdviceList = () => {



    return(
        <>
            <ul>
                <li>
                    <h1 className='heading'>Tips On Saving For Young Adults</h1>
                    <h3 className='quote'>The best time to plant a tree was 20 years ago. The second best time is today.</h3>
                    <h4 className='quote-person'>-Kendrick Lamar, Money Trees</h4>
                    <div className='first'>
                        <h2>First and Foremost</h2>
                        <p>
                            First of all, create a budget and keep a spending diary for tracking your spending over time. 
                            Thank goodness you have found this app!
                            Once you have figured out your monthly budget with your money being greater than your money out, 
                            we can look at what to do with the leftovers.
                        </p>
                    </div>
                </li>
                <div className='advice-container'>
                <div className='icon-container'>
                    <Link id='pensions' to="/pensions" className='link-2'>
                        <img src={pensions} width='80'/>
                        <p>Pensions</p>
                    </Link>
                </div>
                <div className='icon-container'>
                    <Link id='rainy_day' to="/rainy_day" className='link-2'>
                        <img src={rainy} width='80'/>
                        <p>Rainy Day</p>
                    </Link>
                </div>
                <div className='icon-container'>
                    <Link id='short_term' to="/short_term" className='link-2'>
                        <img src={shortterm} width='80'/>
                        <p>Short-Term Goals</p>
                    </Link>
                </div>
                <div className='icon-container'>
                    <Link id='house' to="/house" className='link-2'>
                        <img src={house} width='80'/>
                        <p>New House</p>
                    </Link>
                </div>
                <div className='icon-container'>
                    <Link id='long_term' to="/long_term" className='link-2'>
                        <img src={longterm} width='80'/>
                        <p>Long-Term Goals</p>
                    </Link>
                </div>
                </div>


                {/* <li>
                    <h1><Link id='pensions' to="/pensions"><img src={pensions}></img>Pension</Link></h1>
                </li>
                <li>
                    <h1><Link id='rainy_day' to="/rainy_day"><img src={rainy}>Rainny Day</img></Link></h1>
                </li>
                <li>
                    <h1><Link id='short_term' to="/short_term"><img src={shortterm}>Short-term</img></Link></h1>
                </li>
                <li>
                    <h1><Link id='house' to="/house"><img src={house}>Buyin A House</img></Link></h1>
                </li>
                <li>
                    <h1><Link id='long_term' to="/long_term"><img src={longterm}>Long-term</img></Link></h1>
                </li> */}

        


                {/* <li className='category'>
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
                </li> */}
            </ul>
        </>
    )
}

export default AdviceList;