import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ({courses})=>{

    return(
        // courses.length === 0 
        // ? <div className="edgrid center m-cols-4 s-py-4">
        // <div className="spinner-border text-success" role="status">
        // <span className="sr-only">Loading...</span>
        // </div>
        // </div>
          
        // : 
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

export default withLoader(CourseGrid, "courses") 
