import React, {useState} from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

const Course = ({match, course}) => {

  let [comment, setComment]= useState([])
  let curso = []
  const c = course.filter(c => c.id == match.params.id)
  c.map(e => curso = e)
  const {title, img, profesor} = curso
  
  const myComment = e =>{
    e.preventDefault()
    setComment(
      comment= [e.target.commentBox.value,...comment]
    )
    e.target.commentBox.value=""
  }

  return (
      curso
      ?
        (
          <div className="l-block">
            <div className="ed-grid m-grid-3">
                <h1 className="m-cols-3">{title}</h1>
                <img src={img} alt="" className="m-cols-1 s-mb-3"/>
                <p className="m-cols-2">{profesor}</p>
            </div>
            <div className="ed-grid m-grid-3">
              <h2 className="m-cols-3">Escribe tu comentario</h2>
              <form onSubmit={myComment.bind(this)} className="m-cols-2 m-mb-2 m-mt-1"  >
              <input id="commentBox" type="text" placeholder="Escribe algo..." />
              </form>
              <div className="ed-grid m-cols-3 small">{comment.map(c => <div>{c}</div>)}</div>
            </div>
          </div>
          )
      :
        (
          <h1>Curso no Existe</h1>
        )
    )
  }

Course.propTypes ={
  title : propTypes.string,
  img: propTypes.string,
  price: propTypes.number,
  profesor: propTypes.string,
  
}

Course.defaultProps = {
  title : "No se encontró titulo",
  img : "https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png",
  profesor : "",
  imgProfesor: "",

}

const mapStateToPros = state=>({
  course: state.courseReducer.courses
})

export default connect(mapStateToPros,{})(Course)

