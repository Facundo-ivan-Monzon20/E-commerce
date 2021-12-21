import { Link } from "react-router-dom";
import {httpDelete} from '../../utils/httpFunctions'
import {useState} from 'react'


function ProductoVenta({ product }) {

  const [idProduct, setIdProduct] = useState(null)

 let finalIdProduct = product.id

  const deleteProduct = (e) => {
    e.preventDefault()
    httpDelete(`api/product/${finalIdProduct}/`)
      .then(
        window.location.reload(true)
      )
  }

  return (
    <div>
 <div className="col m-5">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#55595c" />
        </svg>

        <div className="card-body">
          <h5 className="card-text">{product.name}</h5>
          <p className="card-text">
            Descripción: {product.description}
          </p>
          <p className="card-text">
            Precio: {product.price}
          </p>
          <p>Codigo: {product.id}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
                <Link to={`/Navbar/editarproducto/${product.name}/${product.id}`}><button className="btn btn-primary bg-primary">
                Editar
              </button></Link>
              <form onSubmit={deleteProduct} >
                  <input type="hidden" value={idProduct} onChange={(e) => setIdProduct(e.target.value)}/>
                <button className="btn bg-danger text-white" type="submit">Borrar</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  );
}

export default ProductoVenta;