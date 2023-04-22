import * as types from "./actionType";
import { Thirukovilur } from "../Components/AmsamBase"


export const feedinput = (payload)=>(dispatch)=>{
    let values = payload
    dispatch({type:types.UPDATE_NAME,payload:values.name32  })
    let agasuVinadi = 3600-(Number(payload.Anazi *60)+Number(payload.Avina));
    dispatch({type:types.UPDATE_AGASU_NAZHIGAI,payload:payload.Anazi})
    dispatch({type:types.UPDATE_AGASU_VINADI,payload:payload.Avina})
    let IAnazi = Math.floor(agasuVinadi/60);
    let IAvina = agasuVinadi - (IAnazi*60);
    let SunMin = (((Number(IAnazi*60)+Number(IAvina))/2)/2.5)+6;
    let SunHour = Math.floor(Number(SunMin)/60);
    SunMin = Math.round(Number(SunMin)-Number(SunHour*60))
    dispatch({type:types.UPDATE_SUN_HOUR,payload:SunHour})
    dispatch({type:types.UPDATE_SUN_MINUTE,payload:SunMin})
    let totsun = Number(SunHour*60)+Number(SunMin);
    let totBirth = Number(values.Bhour*60)+Number(values.Bmins)
    // console.log(totsun,totBirth);

    dispatch({ type:types.BIRTH_HOUR,payload:values.Bhour})
    dispatch({ type:types.BIRTH_MINUTES,payload:values.Bmins})

    let day = values.day
    dispatch({type:types.UPDATE_DAY,payload:day})
    let remTime=0;
    if(totsun<totBirth){
        remTime = Number(totBirth)-Number(totsun);        
    }
    else{
        remTime=(Number(totBirth)+Number(1440))-Number(totsun);
    }

    dispatch({type:types.UPDATE_GENDER,payload:values.gender})

    let orai = ((remTime*2.5)/75); 
    let orairound = Math.ceil(orai); 
    let Jnavi=0;
        if(day === ("Monday"||"Wednesday"||"Friday")){
            if(values.gender === "female" && orairound%2 === 1){
                let naz = Math.floor( Number(remTime*2.5)/60);
                let vin = Math.round(Number(remTime*2.5)-(naz*60))
                Jnavi=Number(naz*60)+Number(vin)
                dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
                dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
            }
            else if(values.gender === "male" && orairound%2 === 0){
                let naz = Math.floor( Number(remTime*2.5)/60);
                let vin = Math.round(Number(remTime*2.5)-(naz*60))
                Jnavi=Number(naz*60)+Number(vin)
                dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
                dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
            }
            else{
                if(Math.round(orai)-orai >= 0){
                    orairound=(Math.round(orai)*75)+5;
                    
                }
                else{
                    orairound=(Math.floor(orai)*75)-5;
               }
                    let naz = Math.floor( Number(orairound)/60);
                    let vin = Math.round(Number(orairound)-(naz*60))
                    Jnavi=Number(naz*60)+Number(vin)
                    dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
                    dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
            }
        }
        else{
            if(values.gender === "male" && orairound%2 === 1){
                let naz = Math.floor( Number(remTime*2.5)/60);
                let vin = Math.round(Number(remTime*2.5)-(naz*60))
                Jnavi=Number(naz*60)+Number(vin)
                dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
                dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
            }
            else if(values.gender === "female" && orairound%2 === 0){
                let naz = Math.floor( Number(remTime*2.5)/60);
                let vin = Math.round(Number(remTime*2.5)-(naz*60))
                Jnavi=Number(naz*60)+Number(vin)
                dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
                dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
            }
            else{
                if(Math.round(orai)-orai >= 0){
                    orairound=(Math.round(orai)*75)+5;
                    
                }
                else{
                    orairound=(Math.floor(orai)*75)-5;
               }
                    let naz = Math.floor( Number(orairound)/60);
                    let vin = Math.round(Number(orairound)-(naz*60))
                    Jnavi=Number(naz*60)+Number(vin)
                    dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
                    dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
            }
        }
    
    // console.log(values.rasi,values.rasiNazi,values.rasiVina);
    const lakna = ["மேஷம்","ரிஷபம்","மிதுனம்","கடகம்","சிம்மம்","கன்னி","துலாம்","விருச்சகம்","தனுசு","மகரம்","கும்பம்","மீனம்"]
    let index = payload.rasi;
    // console.log(index);
    let laknam;
    let madhaIrupu = Number(payload.rasiNazi*60)+Number(payload.rasiVina);
    while(madhaIrupu<Jnavi){
        index=index%12;
        madhaIrupu+=Thirukovilur[++index].ssec
        laknam=lakna[index]
        console.log(madhaIrupu,Jnavi,laknam);
    }
    let laknaIrupu = madhaIrupu-Jnavi;
    let laknaSel = Thirukovilur[index].ssec-laknaIrupu;
    dispatch({type:types.LAKNAM_IRUPU,payload:laknaIrupu})
    dispatch({type:types.LAKNAM_SEL,payload:laknaSel})

    let paadham = Math.floor(laknaSel/(Thirukovilur[index].ssec/9))
    laknam = `${laknam} (${Thirukovilur[index].paadha[paadham]})`;
    dispatch({type:types.UPDATE_LUKNAM,payload:laknam})
    // console.log(laknam);
}

