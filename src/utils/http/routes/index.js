import {Route, RouteErrorMapper} from "./route";
import {DELETE, GET, POST, PUT} from "./methods";
import {userErrors} from "./errors";
import { SEARCH_RESERVATIONS_ERROR } from "../../../redux/actions/reservation";


/* const login = (user, password, id_rentadora) => new Route(GET, `/client/login?user=${user}&password=${password}&id_rentadora=${id_rentadora}`, [
    new RouteErrorMapper(401, 'USR007', userErrors.login.WRONG_CREDENTIALS),
]);

const loginLeasing = (user, password) => new Route(GET, `/leasing/login?user=${user}&password=${password}`,
[
    new RouteErrorMapper(401, 'USR007', userErrors.login.WRONG_CREDENTIALS),
]); */

//METODO GET:
const exampleRequest = (id) => new Route (GET,`/ROUTE?id=${id}`, []);
const ListadoRequest = () => new Route (GET,`/listadoDeCliente`, []);
//METODO POST:
const examplePostRequest = new Route(POST, '/Route', []); 
//Aca cambiamos el route por el del ws
const insertClientRequest = new Route(POST, '/Route', []); 
export const routes = {
    //METODO GET:
    exampleRequest: (id) => exampleRequest(id),
    ListadoRequest: () => ListadoRequest(),
    //METODO POST:
    examplePostRequest: () => examplePostRequest,
    insertClientRequest: () => insertClientRequest

};
