import { useState } from "react";

export const CounterComponent = () => {

    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        if(counter == 0) return;

        setCounter(counter - 1);
    }
    return (
        <div>
            <h2>Valor del counter: {counter}</h2>
            <button onClick={incrementCounter}>
                Incrementar
            </button>
            <button onClick={decrementCounter}>
                Decrementar
            </button>
        </div>
    );
}