import React from 'react'
import { connect } from 'react-redux'

const CartCounter = ({ cartLength }) => (
    <li>
        <button className="btn btn-outline-secondary btn-sm small s-mt-1" >{`Carrito : ${cartLength.length}`}</button>
    </li>
)

const mapStateProps = state => ({
    cartLength : state.cartReducer.cart
})

export default connect(mapStateProps, {})(CartCounter)