import { Outlet } from "react-router-dom";

export default function ItemsLayout(){
    return (
        <>
            <main>
                <h1>Estoque de Itens</h1>
            </main>
            <Outlet/>
        </>
    )
}