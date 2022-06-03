
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";


<link rel="stylesheet" href="mystyle.css" />
function App() {
    var rs = 1000000000
    const [price, setPrice] = useState(0);
    const subTrac = () => {
        if (price - 1 < 0)
            return (alert("Dare You"));
        setPrice(price - 1);
    }
    const addItion = () => {
        setPrice(price + 1);
    }
    return (
        <>
            <div className="money">
                <h1>{rs - price * 100}</h1>
            </div>
            <div className="centered">
                <div>
                    <div>
                        <img
                            src="https://5.imimg.com/data5/NJ/RC/GLADMIN-33543202/regular-vadapav-500x500.png" />
                    </div>
                    <div class="money">
                        <h3>100$</h3>
                        <button onClick={() => subTrac()}>-</button>
                        <input type="number" value={price} />
                        <button onClick={() => addItion()}>+</button>
                    </div>
                </div>



            </div>
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
