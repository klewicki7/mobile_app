import { connect } from 'react-redux';
import actions from "../redux/actions";
import ListadoScreen from '../screens/ListadoScreen';

const mapStateToProps = (state) => ({
    Colors : state.auth.Colors,
    DATA : state.auth.DATA
});

const mapDispatchToProps = dispatch => ({
    list : () => dispatch(actions.user.listadoRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListadoScreen);
