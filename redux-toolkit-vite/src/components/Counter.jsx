import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../features/counter/Counterslice'
import '../index.css'

export function Counter() {
    const [amount, setAmount] = useState(0);
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <div className='comp'>
                <h1>Counter: {count}</h1>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
                <br />
                <div className="inp-btn">
                    <input type="number" name="num" id="num" onChange={e => (setAmount(e.target.value))} />

                    <button aria-label="IncrementByAmount value" onClick={() => dispatch(incrementByAmount(amount))}>Add</button>
                </div>
                <br />
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
                <br />
                <button aria-label="Reset value" onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}