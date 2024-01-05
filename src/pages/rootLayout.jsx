import { Link, Outlet } from "react-router-dom";

export default function RootLayout(){
    return (
        <>
            <header>
                <Link to="/">REACT STOCK</Link>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/items">Itens</Link>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer>
                <small text-align= "center">Desenvolvido por Lucas Ferreira</small>
            </footer>
        </>
    )
}