import { connect } from "react-redux";

import Home from "../Components/Home";

import { createLogin } from "../Services/action";

const mapStateToProps = state => ({
    loginData: state

})

const mapDispatchToProps = dispatch => ({
    categoryHandler: data => dispatch(createLogin(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)