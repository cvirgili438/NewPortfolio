import {SWITCH_LANGUAGE,SWITCH_MODE } from "../Constants";
export const changeLanguage = (payload) => (dispatch)=>{
    return dispatch({
        type:SWITCH_LANGUAGE,
        payload:payload
    })
}

export const changeMode= (payload)=>(dispatch)=>{
    return dispatch({
        type:SWITCH_MODE,
        payload:payload
    })
}