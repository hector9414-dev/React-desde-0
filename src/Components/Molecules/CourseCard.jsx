import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { addToCart, removeFromCart } from '../../redux/actionCreators'
import { connect } from 'react-redux'

const CourseCard = ({id,title, img, profesor, imgProfesor, price, addCourseToCart, removeCourseFromCart, cart}) =>(
    
    <article className="card l-container">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/curso/${id}`}>
        <img src={img} alt={title}/>
      </Link>
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
        {
          cart.includes(id) 
          ?
            <button type="button" className="btn btn-danger small" onClick={()=> removeCourseFromCart(id) }>{"Remover del carrito"}</button>
          :           
            <button type="button" className="btn btn-primary small" onClick={()=>addCourseToCart(id)}>{`${price} USD`}</button>
          }
      </div>
    </div>
  </article>
  
  )

CourseCard.propTypes ={
  title : propTypes.string,
  img: propTypes.string,
  price: propTypes.number,
  profesor: propTypes.string,
  
}

CourseCard.defaultProps = {
  title : "No se encontró titulo",
  img : "https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png",
  profesor : "",
  imgProfesor: "",
  price : "----"

}

const mapStateToProps = state => ({
    cart: state.cartReducer.cart
})

const mapDispatchToProps = dispatch => ({

  addCourseToCart(id){
    dispatch(addToCart(id))
  },

  removeCourseFromCart(id){
    dispatch(removeFromCart(id))
  }

})

  
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)