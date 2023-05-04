import * as types from "./actionType"

const initState = {
    Name:"",
    AgasuNazhigai:0,
    AgasuVinadi:0,
    SunHour:0,
    SunMin:0,
    BirthHour:0,
    BirthMins:0,
    Day:"",
    JananaNazhigai:0,
    JananaVinadi:0,
    Gender:"",
    LaknaIrupu:0,
    LaknaSel:0,
    Luknam:"",
    Kuligan:""
}

export const reducer = (state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.UPDATE_NAME:
            return {...state,Name:payload}
        case types.UPDATE_AGASU_NAZHIGAI:
            return {...state,AgasuNazhigai:payload}
        case types.UPDATE_AGASU_VINADI:
            return {...state,AgasuVinadi:payload}
        case types.UPDATE_SUN_HOUR:
            return {...state,SunHour:payload}
        case types.UPDATE_SUN_MINUTE:
            return {...state,SunMin:payload}
        case types.BIRTH_HOUR:
            return {...state,BirthHour:payload}
        case types.BIRTH_MINUTES:
            return {...state,BirthMins:payload}
        case types.UPDATE_DAY:
            return {...state,Day:payload}
        case types.UPDATE_JANANA_NAZIGAI:
            return {...state,JananaNazhigai:payload}
        case types.UPDATE_JANANA_VINADI:
            return {...state,JananaVinadi:payload}
        case types.UPDATE_GENDER:
            return {...state,Gender:payload}
        case types.LAKNAM_IRUPU:
            return {...state,LaknaIrupu:payload}
        case types.LAKNAM_SEL:
            return {...state,LaknaSel:payload}
        case types.UPDATE_LUKNAM:
            return {...state,Luknam:payload}
        case types.UPDATE_KULIGAN:
            return {...state,Kuligan:payload}
        default:
            return {...state};
    }
}