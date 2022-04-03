import {connect} from 'react-redux';
import actions from "../redux/actions";
import RegistroScreen from '../screens/RegistroScreen';

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = dispatch => ({
    //Aca llamamos al action REQUEST que le pasaremos los datos del state y definimos la prop para poder acceder en la screen
    insertRequest : (nombre,apellido) => dispatch(actions.user.insertClientRequest(nombre,apellido)),
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(RegistroScreen);
