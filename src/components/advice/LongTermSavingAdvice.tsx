const LongTermSavingAdvice = () => {

    return (
        <div className='advice-details-container'>
            <h1 className='advice-title'>Long Term</h1>
            <p className='advice-paragraph'>
                If you have additional cash available beyond your emergency fund
                then we could look at long term savings goals and have your money work for you.
            </p>
            <p className='advice-more'>
                <ul>
                    <li>
                        <p className='advice-more'>Broadly speaking, you should examine a Stocks & Shares ISA if: </p>
                    </li>
                    <li>
                        You are happy for your money to be put into investment funds for long term savings
                    </li>
                    <li>
                        You are not looking for immediate access to this money (NOT your emergency fund)
                    </li>
                    <li>
                        You are comfortable with the fact that your investments can go up as well as down
                    </li>
                </ul>

                <li>
                    <a className='link-advice' href="https://www.moneyhelper.org.uk/en/savings/investing/stocks-and-shares-isas">
                        General information on S&S Isa
                    </a>
                </li>
                <li>
                    <a className='link-advice' href="https://www.moneysavingexpert.com/savings/stocks-shares-isas/">
                        Compare S&S ISAs on money saving expert
                    </a>
                </li>
            </p>
        </div>
    );
};

export default LongTermSavingAdvice;