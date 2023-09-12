const Header = () => {
    return (
        <>
            <h2>Expense Tracker</h2>
            <div className="container">
                <h4>Your Balance</h4>
                <h1 id="balance">$0.00</h1>

                <div className="inc-exp-container">
                    <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">+$0.00</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p id="money-minus" className="money minus">-$0.00</p>
                    </div>
                </div>
            </div>
        </>
            );
}
export default Header;