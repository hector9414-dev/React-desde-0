import React from 'react'
import Curso from './Curso'


const cursos = [
    {
      "id"       : 1,
      "title"     : "React desde cero",
      "img"       : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
      "price"     : "30 USD",
      "profesor"  : "Beto Quiroga"
    
      },
    {
      "id"       : 2,
      "title"     : "HTML desde cero",
      "img"       : "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
      "price"     : "20 USD",
      "profesor"  : "Beto Quiroga"
      },
    {
      "id"       : 3,
      "title"     : "CSS desde cero",
      "img"       : "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/css-poster_1.jpg?itok=VUK9BKuY",
      "price"     : "50 USD",
      "profesor"  : "Beto Quiroga"
      },
    {
      "id"       : 4,
      "title"     : "JS desde cero",
      "img"       : "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/javascript_0.jpg?itok=aKHihrP0",
      "price"     : "40 USD",
      "profesor"  : "Beto Quiroga"
      }]

const Course = ({match}) => {

     const CursoActual = cursos.filter( c => c.id === parseInt(match.params.id))[0]

    return (
        CursoActual ?
            (
            <div className="ed-grid m-grid-3">
                <h1 className="m-cols-3">{CursoActual.title}</h1>
                <img src={CursoActual.img} alt="img" className="m-cols-1"/>
                <p className="m-cols-2">{CursoActual.profesor}</p>
            </div>
            )
        :
            (
                <h1>Curso no Existe</h1>
            )

        )
    }

export default Course