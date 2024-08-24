import { useState } from 'react';
import cls from './Counter.module.scss'

export const Counter = () => {
    const [c, setC] = useState(0)

    const incrementCounter = () => {
        setC(c + 1)
    }

    return (
        <div
            className={cls.count}
        >
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