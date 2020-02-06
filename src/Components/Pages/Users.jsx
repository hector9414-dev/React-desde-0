import React, { Component } from "react"
import UsersGrid from '../Organisms/UsersGrid'
import withAxios from '../HOC/withAxios'

// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyC88q09tCxonHcG4Ysd6H7Rhe5JgGQQ1fU",
//     authDomain: "parkingproject-1693b.firebaseapp.com",
//     databaseURL: "https://parkingproject-1693b.firebaseio.com",
//     projectId: "parkingproject-1693b",
//     storageBucket: "parkingproject-1693b.appspot.com",
//     messagingSenderId: "714625538390",
//     appId: "1:714625538390:web:a6232137075fe48bdbdef7",
//     measurementId: "G-RPWSSQQ39V"
// };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

class Users extends Component {

    constructor(props){
        super(props)

        this.state={
            users : []
        }

    }

    // async componentDidMount(){

    //     // const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //     // const r = await response.json()
    // }

    //     // Logueo y obtener informacion del usuario logueado del servidor con Firebase
    //     // const response = await firebase.auth().signInWithEmailAndPassword("hector_okmpo@hotmail.com", "Cuervo94148*")
    //     // var loggedUser = await firebase.auth().currentUser;
    //     // var user = {
    //     //     id: loggedUser.uid,
    //     //     name: loggedUser.displayName,
    //     //     email: loggedUser.email,
    //     //     photo: loggedUser.photoURL
    //     // }
    //     // this.setState({
    //     //     users: user
    //     // })

        
    // }

    render(){

        const { users } = this.state

        return (
            <div className="ed-grid s-grid-2 m-grid-4">
                <h1 className="ed-grid s-cols-2 m-cols-4 center s-pt-2">Usuarios</h1>
                  {
                    <UsersGrid users = {users}/>
                  }
            </div>
        )
    }

    async componentDidMount(){
        this.setState({
            users : await this.props.ajaxRequest()
        })
    }
}

export default withAxios(Users, "https://jsonplaceholder.typicode.com/users") 