const BuyHouseSavingAdvice = () => {

    return (
        <div className='advice-details-container'>
            <h1 className='advice-title'>Buy A House</h1>
            <p className='advice-paragraph'>
                You can open a LISA, a lifetime savings ISA. If you are saving for your first time purchase 
                of a home, this is a government supported scheme where the government will contribute +25% to your 
                savings each year, up to £4000 per year.
                So, if you max out your LISA contributions of £4000 in a tax year, the government will give you an 
                additional £1000 on top of this. If saving up for your first home is the main goal this is a fantastic route 
                to go down.
            </p>
            <p className='advice-more'>
                <li>
                    <a className='link-advice' href="https://www.gov.uk/lifetime-isa#:~:text=You%20must%20be%2018%20or,of%20%C2%A31%2C000%20per%20year.">
                        About Lifetime ISAs on gov.uk
                    </a>
                </li>
                <li>
                    <a className='link-advice' href="https://www.moneysavingexpert.com/savings/lifetime-isas/">
                        Compare LISAs on money saving expert
                    </a>
                </li>
            </p>
        </div>
    )
}

export default BuyHouseSavingAdvice;