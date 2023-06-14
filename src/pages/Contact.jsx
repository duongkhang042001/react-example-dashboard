import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

export default function Contact() {

    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    return (
        <div>
            <div>  <span className='p-5 bg-black text-center text-white'>{count}</span></div>
            <br />
            <div>
                <button className='p-3 bg-blue-500 text-white mr-1'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button className='p-3 bg-blue-500 text-white mr-1'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <button className='p-3 bg-blue-500 text-white mr-1'
                    aria-label="Decrement By Amount"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    Decrement By Amount
                </button>
            </div>
        </div>
    )
}
