import { useHistory } from "react-router"

import { httpDelete } from "../../utils/httpFunctions";

function Deletecarritocomplet({ ids }) {

    const history = useHistory();



    const array1 = ids;

    const deleteProduct = (e) => {
        e.preventDefault()
        array1.forEach(id => {
            httpDelete(`api/CartItemViewSet/${id}/`)
                .then(
                    history.push(`/Navbar/Perfil`)
                )
        });

    }





    return (
        <form onSubmit={deleteProduct}>

            <button type="submit" class="btn btn-danger m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg> Eliminar Carrito</button>
        </form>
    )
}

export default Deletecarritocomplet;