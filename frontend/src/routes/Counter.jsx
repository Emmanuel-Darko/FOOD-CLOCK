import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setTimeout(() => {
            setCount(count + 1)
        }, 1000)

        // return(
        //     clearInterval(interval)
        // )
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Counter</h1>
            <h1> {count} </h1>
            <div>
                <button onClick={() => setCount(count+1)}>Start</button> &emsp;
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter