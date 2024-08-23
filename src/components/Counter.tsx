import { useState } from "react";
import './Counter.scss'

export const Counter = () => {
    const [c, setC] = useState(0)

    const incrementCounter = () => {
        setC(c + 1)
    }

    return (
        <div className="counter">
            <div>
                Counter {c}
            </div>
            <button
                onClick={incrementCounter}
            >
                +1
            </button>
        </div>
    )
}