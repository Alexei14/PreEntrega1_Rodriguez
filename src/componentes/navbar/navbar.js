import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda Club America</h3>
            <div>
                <button>Hombre</button>
                <button>Mujer</button>
                <button>Niños</button>
                <button>Accesorios</button>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar