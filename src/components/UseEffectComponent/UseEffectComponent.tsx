import { useEffect, useState } from "react"

export const UseEffectComponent = () => {

    const [state, setState] = useState(false);

    useEffect(() => {
        console.log(state);
    }, []);

    return <button onClick={() => { setState(!state)}}>
        Cambiar estado
    </button>
}