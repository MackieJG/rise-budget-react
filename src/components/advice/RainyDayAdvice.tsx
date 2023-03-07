const RainyDayAdvice = () => {

    return (
        <div className='advice-details-container'>
            <h1 className='advice-title'>Saving For A Rainy Day (Emergency Fund)</h1>
            <p className='advice-paragraph'>
                Things happen, life can present you with unexpected things and you need to be prepared.
                This is a goal that you can set for yourself but a general rule of thumb is enough money for you to survive for 3-6 months. 
                This money should be easily accessible in the event of an emergency and is probably best in a normal savings account.
            </p>
            <p className='advice-more'>
                <li>
                    Check out easy access savings accounts here:
                </li>

                <li>
                    <a className='link-advice' href="https://www.moneysavingexpert.com/savings/savings-accounts-best-interest/">
                        Easy access savings accounts on money saving expert
                    </a>
                </li>
            </p>
        </div>
    )
}

export default RainyDayAdvice;