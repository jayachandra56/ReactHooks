import React, { useState, useContext } from 'react'
import { context } from './contextCreator'

function CompoB() {
    const [cakes, setcakes] = useState(0)
    const [icecreams, setIcecreams] = useState(0)
    const storeContext = useContext(context)
    return (
        <div>
            <div>
                <label>Qty:</label>
                <input type="number" value={cakes} onChange={e => setcakes(e.target.value)} />
                <h1>NoOfCakes: {storeContext.CakeState.noOfCakes}</h1>
                <button onClick={() => storeContext.cakeAction({ type: 'BUY_CAKE', number: cakes })}>Buy Cake</button>
            </div>
            <hr/>
            <div>
            <label>Qty:</label>
                <input type="number" value={icecreams} onChange={e => setIcecreams(e.target.value)} />
                <h1>NoOfIceCreams: {storeContext.IceState.noOfIceCreams}</h1>
                <button onClick={() => storeContext.iceAction({ type: 'BUY_ICE', number: icecreams })}>Buy Ice Cream</button>
            </div>
        </div>
    )
}

export default CompoB
