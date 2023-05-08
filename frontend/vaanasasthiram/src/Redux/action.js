import * as types from "./actionType";
import { Thirukovilur } from "../Components/AmsamBase"


export const feedinput = (payload)=>(dispatch)=>{

    // dispatching Name
    let values = payload
    dispatch({type:types.UPDATE_NAME,payload:values.name})

    // dispatching Agasu
    let agasuVinadi = 3600-(Number(payload.Anazi *60)+Number(payload.Avina));
    dispatch({type:types.UPDATE_AGASU_NAZHIGAI,payload:payload.Anazi})
    dispatch({type:types.UPDATE_AGASU_VINADI,payload:payload.Avina})

    // dispatching Sooriya Udhayam
    let IAnazi = Math.floor(agasuVinadi/60);
    let IAvina = agasuVinadi - (IAnazi*60);
    let SunMin = (((Number(IAnazi*60)+Number(IAvina))/2)/2.5)+6;
    let SunHour = Math.floor(Number(SunMin)/60);
    SunMin = Math.round(Number(SunMin)-Number(SunHour*60))
    dispatch({type:types.UPDATE_SUN_HOUR,payload:SunHour})
    dispatch({type:types.UPDATE_SUN_MINUTE,payload:SunMin})
    let totsun = Number(SunHour*60)+Number(SunMin);

    // dispatching Birth Time
    let totBirth = Number(values.Bhour*60)+Number(values.Bmins)
    dispatch({ type:types.BIRTH_HOUR,payload:values.Bhour})
    dispatch({ type:types.BIRTH_MINUTES,payload:values.Bmins})

    // dispatching Day
    let day = values.day
    dispatch({type:types.UPDATE_DAY,payload:day})


    let remTime=0;
    if(totsun<totBirth){
        remTime = Number(totBirth)-Number(totsun);        
    }
    else{
        remTime=(Number(totBirth)+Number(1440))-Number(totsun);
    }
    // console.log(remTime);

    // dispatching gender
    dispatch({type:types.UPDATE_GENDER,payload:values.gender})

    let orai = ((remTime*2.5)/75); 
    let orairound = Math.ceil((remTime*2.5)/75);
    // console.log(orairound); 
    let Jnavi=0;



    if((day === "Sunday" || day === "Tuesday" || day === "Thursday" || day === "Saturday")){
        if(values.gender == "male" && orairound%2 == 1){
            // console.log("force1 true");
            let naz = Math.floor( Number(remTime*2.5)/60);
            let vin = Math.round(Number(remTime*2.5)-(naz*60))
            Jnavi=Number(naz*60)+Number(vin)
            dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
            dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
        }
        else if(values.gender == "female" && orairound%2 == 0){
            // console.log("force1 true");
            let naz = Math.floor( Number(remTime*2.5)/60);
            let vin = Math.round(Number(remTime*2.5)-(naz*60))
            Jnavi=Number(naz*60)+Number(vin)
            dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
            dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
        }
        else{
            // console.log("force 1 flase");
            let oraiRemainder =Number((remTime*2.5)%75);
            let naz;
            let vin;
            if(oraiRemainder>=37.5){
                // console.log("big");
                remTime = (orairound*75)+5;
                naz = Math.floor( Number(remTime)/60);
                vin = Math.round(Number(remTime)-(naz*60))
            }
            else{
                // console.log("small");
                remTime = ((Number(orairound)-1)*75)-5;
                // console.log(remTime);
                naz = Math.floor( Number(remTime)/60);
                vin = Math.round(Number(remTime)-(naz*60))
            }
            // console.log(naz,vin);
            Jnavi=Number(naz*60)+Number(vin)
            dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
            dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
        }
    }
    else{
        if(values.gender == "female" && orairound%2 == 1){
            // console.log("force1 true");
            let naz = Math.floor( Number(remTime*2.5)/60);
            let vin = Math.round(Number(remTime*2.5)-(naz*60))
            Jnavi=Number(naz*60)+Number(vin)
            dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
            dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
        }
        else if(values.gender == "male" && orairound%2 == 0){
            // console.log("force1 true");
            let naz = Math.floor( Number(remTime*2.5)/60);
            let vin = Math.round(Number(remTime*2.5)-(naz*60))
            Jnavi=Number(naz*60)+Number(vin)
            dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
            dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
        }
        else{
            // console.log("force 1 flase");
            let oraiRemainder =Number((remTime*2.5)%75);
            let naz;
            let vin;
            if(oraiRemainder>=37.5){
                // console.log("big");
                remTime = (orairound*75)+5;
                naz = Math.floor( Number(remTime)/60);
                vin = Math.round(Number(remTime)-(naz*60))
            }
            else{
                // console.log("small");
                remTime = ((Number(orairound)-1)*75)-5;
                console.log(remTime);
                naz = Math.floor( Number(remTime)/60);
                vin = Math.round(Number(remTime)-(naz*60))
            }
            // console.log(naz,vin);
            Jnavi=Number(naz*60)+Number(vin)
            dispatch({type:types.UPDATE_JANANA_NAZIGAI,payload:naz})
            dispatch({type:types.UPDATE_JANANA_VINADI,payload:vin})
        }
    }

    // console.log(values.rasi,values.rasiNazi,values.rasiVina);
    const lakna = ["மேஷம்","ரிஷபம்","மிதுனம்","கடகம்","சிம்மம்","கன்னி","துலாம்","விருச்சகம்","தனுசு","மகரம்","கும்பம்","மீனம்"]
    let index = payload.rasi;
    // console.log(index);
    let laknam = lakna[index];
    let madhaIrupu = Number(payload.rasiNazi*60)+Number(payload.rasiVina);
    // console.log(madhaIrupu);
    while(madhaIrupu<Jnavi){
        index=index%12;
        madhaIrupu+=Thirukovilur[++index].ssec
        laknam=lakna[index]
        // console.log(madhaIrupu,Jnavi,laknam,index);
        if(index == 11){
            index=-1;
        }
    }
    let laknaIrupu = madhaIrupu-Jnavi;
    let laknaSel = Thirukovilur[index].ssec-laknaIrupu;
    dispatch({type:types.LAKNAM_IRUPU,payload:laknaIrupu})
    dispatch({type:types.LAKNAM_SEL,payload:laknaSel})

    let paadham = Math.floor(laknaSel/(Thirukovilur[index].ssec/9))
    laknam = `${laknam} (${Thirukovilur[index].paadha[paadham]})`;
    dispatch({type:types.UPDATE_LUKNAM,payload:laknam})
    // console.log(laknam);

    let kuliga = [
        {pagal:1560,iravu:600},
        {pagal:1320,iravu:360},
        {pagal:1080,iravu:120},
        {pagal:840,iravu:1560},
        {pagal:600,iravu:1320},
        {pagal:360,iravu:1080},
        {pagal:120,iravu:840}
    ]
    let newDay=0;
    if(day === "Monday"){
        newDay=1;
    }else if(day === "Tuesday"){newDay=2}
    else if(day === "Wednesday")
    {newDay=3}
    else if(day === "Thursday"){newDay=4}
    else if(day === "Friday"){newDay=5}
    else if(day === "Saturday"){newDay=6}
    else if(day === "Sunday"){newDay=0}

    let MaandhiIndex = payload.rasi;
    let Maandhi = lakna[MaandhiIndex];
    let MaandhimadhaIrupu = Number(payload.rasiNazi*60)+Number(payload.rasiVina);
    let kuliVina = 0;
    if(values.maandhi == "pagal"){
        kuliVina = kuliga[newDay].pagal
    }
    else{
        kuliVina = kuliga[newDay].iravu
        kuliVina+=(Number(payload.Anazi*60)+Number(payload.Avina));
        console.log(kuliVina);
    }
    console.log(kuliVina);
    while(MaandhimadhaIrupu<kuliVina){
        MaandhiIndex=MaandhiIndex%12;
        MaandhimadhaIrupu+=Thirukovilur[++MaandhiIndex].ssec
        Maandhi = lakna[MaandhiIndex]
        if(MaandhiIndex == 11){
            MaandhiIndex=-1;
        }
    }
    // console.log(MaandhiIndex);
    let MaandhiIrupu = MaandhimadhaIrupu-kuliVina;
    let MaandhiSel = Thirukovilur[MaandhiIndex].ssec - MaandhiIrupu;

    let MaandhiPaadham = Math.floor(MaandhiSel/(Thirukovilur[MaandhiIndex].ssec/9))
    Maandhi = `${Maandhi} (${Thirukovilur[MaandhiIndex].paadha[MaandhiPaadham]})`
    dispatch({type:types.UPDATE_KULIGAN,payload:Maandhi})
}


