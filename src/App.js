import React from 'react';
import "./styles/styles.scss";
import Curso from './curso'

const cursos = [
  {
    "key"       : 1,
    "title"     : "React desde cero",
    "img"       : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price"     : 30,
    "profesor"  : "Beto Quiroga"
  
    },
  {
    "key"       : 2,
    "title"     : "HTML desde cero",
    "img"       : "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    "price"     : 20,
    "profesor"  : "Beto Quiroga"
    },
  {
    "key"       : 3,
    "title"     : "CSS desde cero",
    "img"       : "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/css-poster_1.jpg?itok=VUK9BKuY",
    "price"     : 50,
    "profesor"  : "Beto Quiroga"
    },
  {
    "key"       : 4,
    "title"     : "JS desde cero",
    "img"       : "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/javascript_0.jpg?itok=aKHihrP0",
    "price"     : 40,
    "profesor"  : "Beto Quiroga"
    }]

const App = () => (
  <>
    <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://images.unsplash.com/photo-1580675913888-8a4571c91ee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="https://ed.team" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-4">
   {
     cursos.map( curso => <Curso 
                          key = {curso.key}
                          title = {curso.title}
                          img = {curso.img}
                          price = {curso.price}
                          profesor = {curso.profesor}
                           />)
   }
    
   
  </div>
  </>
  
  )



export default App;
