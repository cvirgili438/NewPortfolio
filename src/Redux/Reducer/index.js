import { inicialstate,SWITCH_LANGUAGE } from "../Constants";




export default function rootReducer(state = inicialstate, action) {
    switch(action.type){
        case SWITCH_LANGUAGE:
            return {
                ...state,
                english:action.payload
            }
        default: 
            return {...state}
    }
}