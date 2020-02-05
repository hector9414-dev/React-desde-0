import React from 'react'
import CourseCard from '../Molecules/CourseCard'

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

const CourseGrid = ()=>(

    <div className="ed-grid m-grid-4">
        {
        cursos.map(curso => (
            <CourseCard 
            key={curso.id}
            id={curso.id}
            img={curso.img}
            title={curso.title}
            price={curso.price}
            profesor={curso.profesor}
                />
            )
        )
        }
    </div>
)

export default CourseGrid