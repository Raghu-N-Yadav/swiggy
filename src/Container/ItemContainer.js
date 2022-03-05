import { connect } from "react-redux";

import Items from "../Components/Items";

import { createLogin, createItem, createCount } from "../Services/action";

const mapStateToProps = state => ({
    itemData: state

})

const mapDispatchToProps = dispatch => ({
    itemHandler: data => dispatch(createItem(data)),
    counterHandle: data => dispatch(createCount(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Items)