import { FunctionComponent, MouseEvent, useState } from 'react';
// import PropTypes from 'prop-types'


type CounterAppProps = { value?: number }

const CounterApp: FunctionComponent<CounterAppProps> = ({value = 10}): JSX.Element => {

    const [counter, setCounter ] = useState(value); // []

    // handleAdd
    // const handleAdd = (e: MouseEvent):void =>{
    //     setCounter(counter + 1);
    //     // setCounter((c) => c + 1);
    // }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick = { () => setCounter(counter + 1) }>+1</button>
            <button onClick = { () => setCounter((c) => c > 0 ? c - 1 : 0) }>-1</button>
            <button onClick = { () => setCounter(value) }>Reset</button>
        </>
    )
}


// CounterApp.propTypes = {
//     value: PropTypes.number
// }


export default CounterApp;