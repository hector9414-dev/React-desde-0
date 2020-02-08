import { ADD_TO_CART, REMOVE_FROM_CART, GET_COURSE_LIST, GET_USERS_LIST } from "./actions"
import axios from "axios"

const addToCart = (id) =>({
    type: ADD_TO_CART,
    id
})

const removeFromCart = (id) =>({
    type: REMOVE_FROM_CART,
    id
})

const getCourseList = ()=> async dispatch =>{
    const response = await axios.get("https://my-json-server.typicode.com/hector9414-dev/json-db/cursos")
    return dispatch({
        type : GET_COURSE_LIST,
        courses : response.data
    })
}

const getUserList = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return dispatch({
        type : GET_USERS_LIST,
        users : response.data
    })

}
export {addToCart, removeFromCart, getCourseList, getUserList}

