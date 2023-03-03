import React from 'react';
import NavBarTop from '../components/navigation/NavBarTop';
import Footer from '../components/footer/Footer';


const AdviceContainer = () => {

    return (
        <>
        <NavBarTop/>
        <h1>A bunch of advice!</h1>

        <h2>Tips On Saving For Yong Adults</h2>
        <p>
            First of all, create a budget and keep a spending diary for tracking your spending over time. 
            Thank goodness you have found this app!
            Once you have figured out your monthly budget with your money being greater than your money out, 
            we can look at what to do with the leftovers.
        </p>

        <h2>Saving For A Rainy Day (Emergency Fund)</h2>
        <p>
            Things happen, life can present you with unexpected things and you need to be prepared.
            This is a goal that you can set for yourself but a general rule of thumb is enough money for you to survive for 3-6 months. 
            This money should be easily accessible in the event of an emergency and is probably best in a normal savings account.
        </p>

        <li>
            Check out easy access savings accounts here:
        </li>

        <li>
            <a href="https://www.moneysavingexpert.com/savings/savings-accounts-best-interest/">
                Easy access savings accounts on money saving expert
            </a>
        </li>

        <h2>Pensions</h2>
            <p>
                The first piece of advice is start saving into a pension as soon as possible.
                In Scotland if you are over 21 there is automatic enrollment into your workplace pension scheme.
                If you are under 21 you will have to opt in. It is recommended to start saving as soon as possible.
            </p>

            <p>
                Did you know?
                The maximum state pension in 2022/23 is £185.15 per week or £9,628 per year!
                This is a lot less than than most people hope to retire on.
            </p>

            <p>
                <li>You can read more about pensions here: </li>
                    <li>
                        <a href="https://www.gov.uk/government/news/pension-tips-for-teenagers">
                            gov.uk pension advice for teenagers
                        </a>
                    </li>
                    <li>
                        <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pensions-basics">
                            Pension basics for young adults
                        </a>
                    </li>
                    <li>
                        <a href="https://www.citizensadvice.org.uk/debt-and-money/pensions/">
                            Citizen's Advice infomation on pensions
                        </a>
                    </li>
            </p>
        


        <h2>What Are Your Savings Goals?</h2>
                <h3>Short Term</h3>
                <p>
                    For any short term savings goals, a higher interest savings account is a good bet.
                    These accounts have stipulations, for example you will need to save a set amount each month.
                    Read more below to see what conditons are rewuired to get the good interest rates. 
                </p>
            <li>
                <a href="https://www.moneysavingexpert.com/savings/best-regular-savings-accounts/">
                    Regular saver accounts on money saving expert
                </a>
            </li>

                <h3>Buy A House</h3>
                <p>
                    You can open a LISA, a lifetime savings ISA. If you are saving for your first time purchase 
                    of a home, this is a government supported scheme where the government will contribute +25% to your 
                    savings each year, up to £4000 per year.
                    So, if you max out your LISA contributions of £4000 in a tax year, the government will give you an 
                    additional £1000 on top of this. If saving up for your first home is the main goal this is a fantastic route 
                    to go down.
                </p>
                <li>
                    <a href="https://www.gov.uk/lifetime-isa#:~:text=You%20must%20be%2018%20or,of%20%C2%A31%2C000%20per%20year.">
                        About Lifetime ISAs on gov.uk
                    </a>
                </li>
                <li>
                    <a href="https://www.moneysavingexpert.com/savings/lifetime-isas/">
                        Compare LISAs on money saving expert
                    </a>
                </li>

                <h3>Long Term</h3>
                <p>
                    If you have additional cash available beyond your emergency fund 
                    then we could look at long term savings goals and have your money work for you.
                </p>

        <Footer/>
        </>
    )
}

export default AdviceContainer;