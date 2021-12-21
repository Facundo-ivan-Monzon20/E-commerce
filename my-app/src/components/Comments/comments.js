import { useEffect, useState } from 'react'
import { httpGet, httpDelete } from '../../utils/httpFunctions'
import { useHistory } from "react-router-dom";

function Comments({ comments }) {
  const [commentData, setCommentData] = useState({})
  const [comment, setComment] = useState([])
  const [idComment, setIdComment] = useState(null)

  let idCommentFinal = comments.id
  
  const history = useHistory();

  const deleteComment = (e) => {
    e.preventDefault()
    httpDelete(`api/comment/${idCommentFinal}/`)
      .then(
        window.location.reload(true)
      )
  }

  // const editComment = (e) => {
  //   e.preventDefault()
  //   httpPutAuthorization(`api/comment/${id}/`, { comment : comment, "user": userData.id, product: id })
  //     .then(
  //       history.push('/Navbar/Perfil')
  //     )
  // }



    useEffect(() => {
      httpGet('api/comment').then((res) => setCommentData(res.data))
    }, [])

  return (
 
    <div class="media d-flex justify-content-end">
    <div class="col-12 d-flex">
            <img src="#" width="64" height="64" alt="" />
            <div class="media_body">
              <p class="nombre text-start">
                {comments.user.username}
                <span>{comments.updated_at}</span>
              </p>
              <p class="comentario text-start">
                {comments.comment}
              </p>
              <div class="botones text-right text-end d-flex">
                <form>
                <button class="btn btnComentario" type="submit">Editar</button>
                </form>
                <form onSubmit={deleteComment}>
                  <input type="hidden" value={idComment} onChange={(e) => setIdComment(e.target.value)}/>
                <button class="btn btnComentario" type="submit">Borrar</button>
                </form>
              </div>
            </div>
          </div>
          </div>
  );
}

export default Comments;
