import React from 'react'
import CourseCard from '../Molecules/CourseCard'

const CourseGrid = ({courses})=>{

    return(
        courses.map(curso => (
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
    )
    
}

export default CourseGrid
