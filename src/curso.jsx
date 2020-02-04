import React from 'react'
import propTypes from 'prop-types'
const Curso = ({key,title, img, profesor, imgProfesor, price}) =>(
    
    <article className="card l-container s-pt-4" key={key}>
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={img} alt={title}/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
         {title}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src={imgProfesor} alt="" />
            </div>
          </div>
          <span className="small">{profesor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">{price}</a>
      </div>
    </div>
  </article>
  
  )

  Curso.propTypes ={
    title : propTypes.string,
    img: propTypes.string,
    price: propTypes.string,
    profesor: propTypes.string,
    
  }

  Curso.defaultProps = {
    title : "No se encontró titulo",
    img : "https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png",
    profesor : "",
    imgProfesor: "",
    price : "----"


  }

export default Curso