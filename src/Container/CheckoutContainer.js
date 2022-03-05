import { connect } from "react-redux";

import Checkout from "../Components/Checkout";

import { createItem, createCount, resetCart } from "../Services/action";

const mapStateToProps = state => ({
    itemData: state

})

const mapDispatchToProps = dispatch => ({
    itemHandler: data => dispatch(createItem(data)),
    counterHandle: data => dispatch(createCount(data)),
    cartHandler: data => dispatch(resetCart(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)