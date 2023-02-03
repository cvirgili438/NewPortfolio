import {SWITCH_LANGUAGE } from "../Constants";
export const changeLanguage = (payload) => (dispatch)=>{
    return dispatch({
        type:SWITCH_LANGUAGE,
        payload:payload
    })
}