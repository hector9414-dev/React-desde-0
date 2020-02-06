import React, { Component } from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import withAxios from '../HOC/withAxios'

class Courses extends Component{

  constructor(props){
    super(props)

    this.state ={
      courses : []
    }
  }

  async componentDidMount(){
    this.setState({
      courses : await this.props.ajaxRequest()
    })
  }

  render(){
    const {courses} = this.state
    return(
      <div className="ed-grid m-grid-4">
        <h1 className="center ed-grid m-cols-4">Cursos</h1>
        {
         <CourseGrid courses={courses}/>
        }
      </div>
    )
  

}
  
  

  }

  

export default withAxios(Courses, "https://my-json-server.typicode.com/hector9414-dev/json-db/cursos") 