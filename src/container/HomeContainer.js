import StudentsDetails from '../components/StudentsDetails'
import {connect} from 'react-redux'
import {addToCart} from '../services/Actions/action'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(StudentsDetails)
// export default Home;