import { inicialstate,SWITCH_LANGUAGE,SWITCH_MODE } from "../Constants";




export default function rootReducer(state = inicialstate, action) {
    switch(action.type){
        case SWITCH_LANGUAGE:
            return {
                ...state,
                english:action.payload
            }
        case SWITCH_MODE:
            return {
                ...state,
                dark:action.payload
            }
        default: 
            return {...state}
    }
}