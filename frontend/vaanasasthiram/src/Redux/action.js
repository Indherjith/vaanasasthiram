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
    console.log(madhaIrupu,index);
    while(madhaIrupu<Jnavi){ 
        if(index == 11){
            index=-1;
        }
        else{
            index=index%12;
            madhaIrupu+=Thirukovilur[++index].ssec
            laknam=lakna[index]
        }      
        
        // console.log(madhaIrupu,Jnavi,laknam,index);
        
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
        if(MaandhiIndex == 11){
            MaandhiIndex=-1;
        }
        else{
            MaandhiIndex=MaandhiIndex%12;
            MaandhimadhaIrupu+=Thirukovilur[++MaandhiIndex].ssec
            Maandhi = lakna[MaandhiIndex]
        }
        
    }
    // console.log(MaandhiIndex);
    let MaandhiIrupu = MaandhimadhaIrupu-kuliVina;
    let MaandhiSel = Thirukovilur[MaandhiIndex].ssec - MaandhiIrupu;

    let MaandhiPaadham = Math.floor(MaandhiSel/(Thirukovilur[MaandhiIndex].ssec/9))
    Maandhi = `${Maandhi} (${Thirukovilur[MaandhiIndex].paadha[MaandhiPaadham]})`
    dispatch({type:types.UPDATE_KULIGAN,payload:Maandhi})
}

export const cond1=(payload)=>(dispatch)=>{
    // console.log("cond1",payload);
    let mun1 = Number(payload.m1.nazhigai * 60) + Number(payload.m1.vinadi)
    let that1 = Number(payload.t1.nazhigai * 60) + Number(payload.t1.vinadi)
    let next1 = Number(payload.n1.nazhigai * 60) + Number(payload.n1.vinadi)
    let Jnatch;
    let Aapnazi;
    let Natchsel;
    let NatchIrupu;
    let padham1ku;
    let Natchathiram;
    let padham;

    // console.log(payload.Janana,mun1,that1,next1);
    if(payload.Janana < that1){
        Jnatch = payload.t1.natchathiram
        Aapnazi = (3600-Number(mun1))+that1;
        padham1ku = Aapnazi/4;
        Natchsel = (3600-Number(mun1))+payload.Janana;
        NatchIrupu = (Aapnazi-Natchsel)
        if(padham1ku > Natchsel){
               padham = 1;
            Natchathiram = Jnatch+" 1ம் பாதம்"
        }
        else if(padham1ku*2 > Natchsel){
               padham = 2;
            Natchathiram = Jnatch+" 2ம் பாதம்"
        }
        else if(padham1ku*3 > Natchsel){
                padham = 3;
            Natchathiram = Jnatch+" 3ம் பாதம்"
        }
        else{
                padham=4;
            Natchathiram = Jnatch+" 4ம் பாதம்"
        }
    }
    else{
        Jnatch = payload.n1.natchathiram
        Aapnazi = (3600-Number(that1))+next1;
        padham1ku = Aapnazi/4;
        Natchsel=payload.Janana - Number(that1);
        NatchIrupu = (Aapnazi-Natchsel)
        if(padham1ku > Natchsel){
               padham = 1;
            Natchathiram = Jnatch+" 1ம் பாதம்"
        }
        else if(padham1ku*2 > Natchsel){
               padham = 2;
            Natchathiram = Jnatch+" 2ம் பாதம்"
        }
        else if(padham1ku*3 > Natchsel){
                padham = 3;
            Natchathiram = Jnatch+" 3ம் பாதம்"
        }
        else{
                padham=4;
            Natchathiram = Jnatch+" 4ம் பாதம்"
        }
    }

    const lakna = ["மேஷம்","ரிஷபம்","மிதுனம்","கடகம்","சிம்மம்","கன்னி","துலாம்","விருச்சகம்","தனுசு","மகரம்","கும்பம்","மீனம்"]


    for(let i=0;i<Thirukovilur.length;i++){
        for(let j=0;j<Thirukovilur[i].paadha.length;j++){
            if(`${Jnatch}-${padham}` == Thirukovilur[i].paadha[j]){
                Natchathiram = `${lakna[i]} (${Natchathiram})`
            }
        }
    }

    Aapnazi = `${Math.floor(Aapnazi/60)}-${Aapnazi%60}`;
    Natchsel = `${Math.floor(Natchsel/60)}-${Natchsel%60}`;
    NatchIrupu = `${Math.floor(NatchIrupu/60)}-${NatchIrupu%60}`;

    dispatch({type:types.NATCH,payload:Natchathiram})
    dispatch({type:types.AADHI,payload:Aapnazi})
    dispatch({type:types.NATSEL,payload:Natchsel})
    dispatch({type:types.NATIRUPU,payload:NatchIrupu})

    console.log(Jnatch,"Aadhi Andha ParamaNazhigai",Aapnazi);
    console.log("padham 1ku",padham1ku);
    console.log(Jnatch,"sel",Natchsel);
    console.log(Jnatch,"irupu",NatchIrupu);
    console.log(Natchathiram);
}



