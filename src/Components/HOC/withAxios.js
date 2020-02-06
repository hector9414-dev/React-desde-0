import React, { Component } from "react"
import axios from 'axios'

const withAxios = (WrappedComponent, url)=>{
    
    return class WithAxios extends Component{

        constructor(props){
            super(props)
            this.ajaxRequest=this.ajaxRequest.bind(this)
        }

        async ajaxRequest(){
            const r = await axios.get(url)
            return r.data

        }

        render(){
            return <WrappedComponent {...this.props} ajaxRequest={this.ajaxRequest}/>
        }

    }
}

export default withAxios