import { createStore, combineReducers, applyMiddleware } from "redux"
import { ADD_TO_CART, REMOVE_FROM_CART, GET_COURSE_LIST, GET_USERS_LIST } from "./actions"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialStore = {
    cart : []
}

const initialCourses ={
    courses: []
}

const initialUsers={
    users: []
}

const cartReducer = (state = initialStore, {type, id}) => {
    switch(type){
        case ADD_TO_CART:
            if(state.cart.includes(id)){
                return state
            }
            else{
                return {
                    cart: [...state.cart,id]
                }
            }   
        case REMOVE_FROM_CART:
            state.cart.splice(state.cart.indexOf(id),1)
            return{
                cart : [...state.cart]
            }
        default:
            break
        }
    return state

}

const courseReducer = (state = initialCourses, action) => {

    if(action.type === GET_COURSE_LIST){
        return{
            courses :[...state.courses ,...action.courses]
        }
    }
    return state
}

const userReducer = (state = initialUsers,action) =>{

    if(action.type === GET_USERS_LIST){
        return{
            users: [...state.users,...action.users]
        }
    }
    console.log(action)
    return state
}

export default createStore(combineReducers({cartReducer,courseReducer, userReducer}), composeWithDevTools(applyMiddleware(thunk)))

































