import { connect } from "react-redux";

import Restaurants from "../Components/Restaurants";

import { createLogin, sortingData } from "../Services/action";

const mapStateToProps = state => ({
    sortData: state

})

const mapDispatchToProps = dispatch => ({
    sortHandler: data => dispatch(sortingData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)