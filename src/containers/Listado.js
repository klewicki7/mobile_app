import { connect } from 'react-redux';
import actions from "../redux/actions";
import ListadoScreen from '../screens/ListadoScreen';

const mapStateToProps = (state) => ({
    datos : state.user.dataClient
});

const mapDispatchToProps = dispatch => ({
    list : () => dispatch(actions.user.listadoRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListadoScreen);
