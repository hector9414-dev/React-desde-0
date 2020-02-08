import React from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import { connect } from 'react-redux'

const Courses = ({courses}) => (

      <div className="ed-grid m-grid-4">
        <h1 className="center ed-grid m-cols-4">Cursos</h1>
        {
         <CourseGrid courses={courses}/>
        }
      </div>
  )
  
const mapStateToProps = state =>({
  courses: state.courseReducer.courses
})

  

export default connect(mapStateToProps,{})(Courses) 

