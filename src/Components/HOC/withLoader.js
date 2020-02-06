import React, { Component } from "react"

const withLoader = (WrappedComponent, propValue) =>{

    return class WithLoader extends Component {
        constructor(props){
            super(props)
        }

        render(){
            console.log(this.props)
            return this.props[propValue].length === 0
            ? <div className="edgrid center m-cols-4 s-py-4">
              <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
              </div>
              </div>
            :
            <WrappedComponent {...this.props} />
        }

    }
}

export default withLoader