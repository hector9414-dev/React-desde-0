import React from 'react'
import {Link} from 'react-router-dom'
const Banner = () =>(
    <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://images.unsplash.com/photo-1580675913888-8a4571c91ee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <Link to="/cursos" className="button">
          Botón del banner
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Banner