import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { httpGetAuthorization, httpGet, httpPostAuthorization } from '../../utils/httpFunctions'
import "./detailProduct.css";
import Comments from '../Comments/comments';
import { Link } from 'react-router-dom';

const DetailProduct = () => {
  const [products, setProducts] = useState([])
  const [Vendedor, setvendedor] = useState([])
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState([])
  const [filterComments] = useState(true)
  const [userData, setUserData] = useState({})
  const [numberProduct, setNumberProduct] = useState(0)

  const history = useHistory();



  const { id } = useParams()

  let idProduct = id

  const fetchProducts = () => {
    httpGet(`api/product/${id}`)
      .then((res) => setProducts(res.data))
  }

  const fetchvendedor = () => {
    httpGet(`api/product/${id}`)
      .then((res) => setvendedor(res.data.usuario))
  }



  useEffect(() => {
    httpGetAuthorization('api/me').then((res) => setUserData(res.data))
  }, [])

  const createComment = (e) => {
    e.preventDefault()
    httpPostAuthorization('api/comment/', { comment: comment, "user": userData.id, product: id })
      .then(
        window.location.reload(true)
      )
  }


  const createCarrito = (e) => {
    e.preventDefault()
    httpPostAuthorization('api/CartItemViewSet/', { Product: id, "usuario": userData.id })
      .then(window.alert("Su producto se guardo correctamente"))
  }





  useEffect(fetchProducts, [])

  useEffect(fetchvendedor, [])

  //COMMENTS
  const fetchComments = () => {
    httpGet('api/comment/')
      .then((res) => setComments(res.data))
  }


  useEffect(fetchComments, [])



  //Filtro Comentarios

  let finalComments;


  if (filterComments) {
    finalComments = comments.filter((comment) => {
      return comment.product == idProduct;
    })
  } else {
    finalComments = [];
  }



  //Calculo oferta

  let precioFinal

  if (products.offerPercentage > 0) {
    precioFinal = products.price - (products.price * products.offerPercentage)
  } else {
    precioFinal = products.price
  };






  // Calificacion

  let contador;

  const calificar = (item) => {
    contador = item.id[0];//captura el primer caracter
    let nombre = item.id.substring(1);//captura todo menos el primer caracter
    for (let i = 0; i < 5; i++) {
      if (i < contador) {
        document.getElementById((i + 1) + nombre).style.color = "orange";
      } else {
        document.getElementById((i + 1) + nombre).style.color = "black";
      }
    }
  }


  return (
    <div>



      <div class="container-fluid">
        <div class="container  bg-white mt-5 mb-5 shadow-lg p-3 rounded p-5 ">
          <div class="caja mt-3">
            <div class="row ">
              <div class="col-8 d-flex container_detalles">
                <div class="col-6  mb-4">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="400" xmlns="http://www.w3.org/2000/svg"
                    role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#55595c" />
                  </svg>
                  <div class="row ">
                    <div class="col-12 ">
                      <h5>Características:</h5>
                      <p className="text-start">{products.features}</p>
                    </div>

                  </div>
                </div>
                <div class="col-5 offset-1">
                  <h2>{products.name}</h2>
                  {/* <div class="mt-3 ">
            <form class="form_calificar d-flex">
            <span class="fa fa-star" id="1estrella" onclick={calificar}></span>
            <span class="fa fa-star" id="2estrella" onclick={calificar}></span>
            <span class="fa fa-star" id="3estrella" onclick={calificar}></span>
            <span class="fa fa-star" id="4estrella" onclick={calificar}></span>
            <span class="fa fa-star" id="5estrella" onclick={calificar}></span>
            <p>(201)</p>
            <button class="btn p-2 btn_calificar">Calificar</button>
          </form>
          </div> */}


                  <h3 class="mt-3  mb-2"> {"$" + precioFinal}</h3>
                  {/* <a href="#" class="medios_pago">Conocer medios de pago</a> */}

                  <h5 class="mt-4">Descripción:</h5>
                  <p class="text-description text-start">{products.description}</p>
                </div>

              </div>


              <div class="col-3 offset-1 compra ">
                <h5 class="mb-0 text-primary text-start">Envío gratis a todo el país</h5>

                {/* <p className="text-start"> Conocé los tiempos y las formas de envío.</p> */}
                {/* <a href="#" class="mt-1">
              <p><i class="fas fa-map-marker-alt"></i>Conocer cuando llega.<p>
            </a> */}


                <p class="mt-4 text-start">Vendido por {Vendedor.username}</p>


                <h6 className="text-start">Stock Disponible: 20</h6>
                <p className="text-start">Cantidad a comprar: 20</p>
                <button type="button" class="btn comprar btn-lg btn-block mt-3 w-100">Comprar</button>

                <form onSubmit={createCarrito}>
                  <button type="submit" class="btn agregar btn-lg btn-block mt-2 w-100"
                    onClick={() => setNumberProduct(numberProduct + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg> Agregar al Carrito </button>
                </form>

                <Link to={`/Navbar/carrito/${userData.username}/${userData.id}`}><button type="button" class="btn agregar btn-lg btn-block mt-2 w-100"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg> Ver mi carrito {numberProduct}</button></Link>





                {/* <div class="row mt-5 informacion_vendedor">
            <h5 class="mb-3 text-start">
              Información del Vendedor
            </h5>
            <p className="text-start">Nombre completo: first_name last_name</p>
            <p className="text-start">Dirección: Dirección</p>
          </div> */}
              </div>
            </div>




          </div>



          <div class="container container-comentarios">
            <div class="row comentarios justify-content-center">
              <div class="col-8">
                <form onSubmit={createComment} class="form_comentarios d-flex justify-content-end flex-wrap">
                  <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                  <button class="btn" type="submit">Comentar</button>
                </form>

                {
                  finalComments
                    // comments
                    .map((comments) => {
                      return <Comments comments={comments} />;
                    })
                }
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )

}

export default DetailProduct