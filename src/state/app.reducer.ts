import { StateCar } from "./app.state-car";

const INITIALSTATE: [StateCar] = [{
    nom: '',
    marque: '',
    immatriculation: '',
    datedachat: '',
    couleur: '',
    etat: '',
    delete: false,
    id: 0
}]

export function reducer(state = INITIALSTATE, action) {
    switch (action.type) {
        case 'CREATE CAR':
            console.log(state, action, 'creer car');
            const PAYLOAD = { ...action.payload, id: state.length }
            return [
                ...state, PAYLOAD,
            ]
        case 'MODIFY CAR':
            return state.map((car) => {
                if (car.id === action.payload.id) {
                    return {
                        ...car,
                        nom: action.payload.nom,
                        marque: action.payload.marque,
                        immatriculation: action.payload.immatriculation,
                        datedachat: action.payload.datedachat,
                        couleur: action.payload.couleur,
                        etat: action.payload.etat,
                        delete: action.payload.delete,
                        id: action.payload.id,
                    }
                }
                return car;
            });
        case 'DELETE CAR':
            return state.map((car) => {
                if (car.id === action.payload) {
                    return { ...car, delete: true }
                }
                return car;
            });
        default:
            return state;
    }
}