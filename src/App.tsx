import { AppProduct } from "./components/AppProduct/app-product";

export const App = () => {

    return <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
        {/* <MyFirstComponent text = {"Texto desde propiedades"} color='red' fontSize={12}/>
        <CounterComponent/>
        <UseEffectComponent/> 
        <FormComponent />*/}
        <AppProduct/>
    </div>;
}