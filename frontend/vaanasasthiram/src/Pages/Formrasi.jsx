import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Box, FormControl, FormHelperText, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {cond1} from "../Redux/action";
import { useNavigate } from 'react-router-dom';


const Formrasi = () => {

    const store = useSelector(state=>state)
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const [Mone,setMone] = useState()
    const [Mtwo,setMtwo] = useState({display:'none'})
    const [Mthree,setMThree] = useState({display:'none'})

    const [Tone,setTone] = useState()
    const [Ttwo,setTtwo] = useState({display:'none'})
    const [Tthree,setTThree] = useState({display:'none'})

    const [None,setNone] = useState()

    const [m1,setM1] = useState({natchathiram:"அஸ்வினி"});
    const [m2,setM2] = useState({});
    const [m3,setM3] = useState({});

    const [t1,setT1] = useState({});
    const [t2,setT2] = useState({});
    const [t3,setT3] = useState({});

    const [n1,setN1] = useState({});

    const handlerasi=()=>{
        if(m2.keys== undefined && t2.keys== undefined){
            let payload = {m1,t1,n1,Janana:Number(store.JananaNazhigai*60)+Number(store.JananaVinadi)}
            if(m1.natchathiram != t1.natchathiram && t1.natchathiram != n1.natchathiram){
                // console.log("unique :",payload);
                dispatch(cond1(payload))
            }
            else if(m1.natchathiram == t1.natchathiram && t1.natchathiram != n1.natchathiram){
                console.log("1&2",payload);
            }
            else if(m1.natchathiram != t1.natchathiram && t1.natchathiram == n1.natchathiram){
                console.log("2&3",payload);
            } 
            else{
                console.log("1&2&3",payload)
            }
        }
        else if(m3.keys== undefined && t3.keys== undefined){
            let payload = {m1,m2,t1,t2,n1,JananaNazhigai:store.JananaNazhigai,JananaVinadi:store.JananaVinadi}
            console.log(payload);
        }
        else{
            let payload = {m1,m2,m3,t1,t2,t3,n1,JananaNazhigai:store.JananaNazhigai,JananaVinadi:store.JananaVinadi}
            console.log(payload);
        }
        navigate("/result")
    }
    
  return (
    <div>
        <Box maxW={'480px'} padding={'20px'} margin={'auto'} paddingTop={'20px'} boxShadow={'1px 1px 3px 3px grey'} background='radial-gradient(skyblue,white)' >
        <VStack marginTop={'30px'} >

            <FormControl  mb={'10px'}>
            <FormLabel color={'crimson'} mb={'-30px'} fontWeight={'bold'}>Day ago stars / முன் நாள் நட்சத்திரங்கள் :</FormLabel>
                <Button onClick={e=>{
                    setMtwo({display:'none'})
                    setMThree({display:'none'})
                }} marginRight={'10px'} border={'1px solid blue'}>RESET</Button>
                <Button onClick={e=>{
                    setMtwo()
                    setMThree({display:'none'})
                }} marginRight={'10px'} border={'1px solid blue'}>2 இருப்பின்</Button>
                <Button onClick={e=>{
                    setMtwo()
                    setMThree()
                }} border={'1px solid blue'}>3 இருப்பின்</Button>
            </FormControl>

            <FormControl style={Mone} isRequired >
                <FormLabel color={'crimson'} width={'100%'} fontWeight={'bold'}>1) முன்நாள் நா-வி :</FormLabel>
                <Select onChange={(e)=>{
                    let mm1 = m1; mm1.natchathiram = e.target.value;
                    setM1(mm1)
                }}>
                    <option value="அஸ்வினி">அஸ்வினி</option>
                    <option value="பரணி">பரணி</option>
                    <option value="கிருத்திகை">கிருத்திகை</option>
                    <option value="ரோகிணி">ரோகிணி</option>
                    <option value="மிருகசீரிசம்">மிருகசீரிசம்</option>
                    <option value="திருவாதிரை">திருவாதிரை</option>
                    <option value="புனர்பூசம்">புனர்பூசம்</option>
                    <option value="பூசம்">பூசம்</option>
                    <option value="ஆயில்யம்">ஆயில்யம்</option>
                    <option value="மகம்">மகம்</option>
                    <option value="பூரம்">பூரம்</option>
                    <option value="உத்திரம்">உத்திரம்</option>
                    <option value="ஹஸ்தம்">ஹஸ்தம்</option>
                    <option value="சித்திரை">சித்திரை</option>
                    <option value="சுவாதி">சுவாதி</option>
                    <option value="விசாகம்">விசாகம்</option>
                    <option value="அனுஷம்">அனுஷம்</option>
                    <option value="கேட்டை">கேட்டை</option>
                    <option value="மூலம்">மூலம்</option>
                    <option value="பூராடம்">பூராடம்</option>
                    <option value="உத்திராடம்">உத்திராடம்</option>
                    <option value="திருவோணம்">திருவோணம்</option>
                    <option value="அவிட்டம்">அவிட்டம்</option>
                    <option value="சதயம்">சதயம்</option>
                    <option value="புரட்டாதி">புரட்டாதி</option>
                    <option value="உத்திரட்டாதி">உத்திரட்டாதி</option>
                    <option value="ரேவதி">ரேவதி</option>
                </Select>
                <Input type='number' onChange={(e)=>{
                    let mm1 = m1; mm1.nazhigai = e.target.value;
                    setM1(mm1)
                }} name='AgasuNazhigai' border={'1px solid blue'}  width={'60px'} />
                <Input type='number' onChange={(e)=>{
                    let mm1 = m1; mm1.vinadi = e.target.value;
                    setM1(mm1)
                }} name='AgasuVinadi' border={'1px solid blue'} width={'60px'} />
            </FormControl>

            <FormControl style={Mtwo} isRequired >
                <FormLabel color={'crimson'} width={'100%'} fontWeight={'bold'}>2) முன்நாள் நா-வி :</FormLabel>
                <Select onChange={(e)=>{
                    let mm2 = m2; mm2.natchathiram = e.target.value;
                    setM2(mm2)
                }}>
                    <option value="அஸ்வினி">அஸ்வினி</option>
                    <option value="பரணி">பரணி</option>
                    <option value="கிருத்திகை">கிருத்திகை</option>
                    <option value="ரோகிணி">ரோகிணி</option>
                    <option value="மிருகசீரிசம்">மிருகசீரிசம்</option>
                    <option value="திருவாதிரை">திருவாதிரை</option>
                    <option value="புனர்பூசம்">புனர்பூசம்</option>
                    <option value="பூசம்">பூசம்</option>
                    <option value="ஆயில்யம்">ஆயில்யம்</option>
                    <option value="மகம்">மகம்</option>
                    <option value="பூரம்">பூரம்</option>
                    <option value="உத்திரம்">உத்திரம்</option>
                    <option value="ஹஸ்தம்">ஹஸ்தம்</option>
                    <option value="சித்திரை">சித்திரை</option>
                    <option value="சுவாதி">சுவாதி</option>
                    <option value="விசாகம்">விசாகம்</option>
                    <option value="அனுஷம்">அனுஷம்</option>
                    <option value="கேட்டை">கேட்டை</option>
                    <option value="மூலம்">மூலம்</option>
                    <option value="பூராடம்">பூராடம்</option>
                    <option value="உத்திராடம்">உத்திராடம்</option>
                    <option value="திருவோணம்">திருவோணம்</option>
                    <option value="அவிட்டம்">அவிட்டம்</option>
                    <option value="சதயம்">சதயம்</option>
                    <option value="புரட்டாதி">புரட்டாதி</option>
                    <option value="உத்திரட்டாதி">உத்திரட்டாதி</option>
                    <option value="ரேவதி">ரேவதி</option>
                </Select>
                <Input type='number' onChange={(e)=>{
                    let mm2 = m2; mm2.nazhigai = e.target.value;
                    setM2(mm2)
                }} name='AgasuNazhigai' border={'1px solid blue'}  width={'60px'} />
                <Input type='number' onChange={(e)=>{
                    let mm2 = m2; mm2.vinadi = e.target.value;
                    setM2(mm2)
                }} name='AgasuVinadi' border={'1px solid blue'} width={'60px'} />
            </FormControl>

            <FormControl style={Mthree} isRequired >
                <FormLabel color={'crimson'} width={'100%'} fontWeight={'bold'}>3) முன்நாள் நா-வி :</FormLabel>
                <Select onChange={(e)=>{
                    let mm3 = m3; mm3.natchathiram = e.target.value;
                    setM3(mm3)
                }}>
                    <option value="அஸ்வினி">அஸ்வினி</option>
                    <option value="பரணி">பரணி</option>
                    <option value="கிருத்திகை">கிருத்திகை</option>
                    <option value="ரோகிணி">ரோகிணி</option>
                    <option value="மிருகசீரிசம்">மிருகசீரிசம்</option>
                    <option value="திருவாதிரை">திருவாதிரை</option>
                    <option value="புனர்பூசம்">புனர்பூசம்</option>
                    <option value="பூசம்">பூசம்</option>
                    <option value="ஆயில்யம்">ஆயில்யம்</option>
                    <option value="மகம்">மகம்</option>
                    <option value="பூரம்">பூரம்</option>
                    <option value="உத்திரம்">உத்திரம்</option>
                    <option value="ஹஸ்தம்">ஹஸ்தம்</option>
                    <option value="சித்திரை">சித்திரை</option>
                    <option value="சுவாதி">சுவாதி</option>
                    <option value="விசாகம்">விசாகம்</option>
                    <option value="அனுஷம்">அனுஷம்</option>
                    <option value="கேட்டை">கேட்டை</option>
                    <option value="மூலம்">மூலம்</option>
                    <option value="பூராடம்">பூராடம்</option>
                    <option value="உத்திராடம்">உத்திராடம்</option>
                    <option value="திருவோணம்">திருவோணம்</option>
                    <option value="அவிட்டம்">அவிட்டம்</option>
                    <option value="சதயம்">சதயம்</option>
                    <option value="புரட்டாதி">புரட்டாதி</option>
                    <option value="உத்திரட்டாதி">உத்திரட்டாதி</option>
                    <option value="ரேவதி">ரேவதி</option>
                </Select>
                <Input type='number' onChange={(e)=>{
                    let mm3 = m3; mm3.nazhigai = e.target.value;
                    setM3(mm3)
                }} name='AgasuNazhigai' border={'1px solid blue'}  width={'60px'} />
                <Input type='number' onChange={(e)=>{
                    let mm3 = m3; mm3.vinadi = e.target.value;
                    setM3(mm3)
                }} name='AgasuVinadi' border={'1px solid blue'} width={'60px'} />
            </FormControl>


            <FormControl  mb={'10px'}>
            <FormLabel color={'crimson'} mb={'-30px'} fontWeight={'bold'} mt={'30px'} >That day stars / பிறந்த நாள் நட்சத்திரங்கள் :</FormLabel>
                <Button onClick={e=>{
                    setTtwo({display:'none'})
                    setTThree({display:'none'})
                }} marginRight={'10px'} border={'1px solid blue'}>RESET</Button>
                <Button onClick={e=>{
                    setTtwo()
                    setTThree({display:'none'})
                }} marginRight={'10px'} border={'1px solid blue'}>2 இருப்பின்</Button>
                <Button onClick={e=>{
                    setTtwo()
                    setTThree()
                }} border={'1px solid blue'}>3 இருப்பின்</Button>
            </FormControl>

            <FormControl style={Tone} isRequired >
                <FormLabel color={'crimson'} width={'100%'} fontWeight={'bold'}>1) பிறந்த நாள் நா-வி :</FormLabel>
                <Select onChange={(e)=>{
                    let tt1 = t1; tt1.natchathiram = e.target.value;
                    setT1(tt1)
                }}>
                    <option value="அஸ்வினி">அஸ்வினி</option>
                    <option value="பரணி">பரணி</option>
                    <option value="கிருத்திகை">கிருத்திகை</option>
                    <option value="ரோகிணி">ரோகிணி</option>
                    <option value="மிருகசீரிசம்">மிருகசீரிசம்</option>
                    <option value="திருவாதிரை">திருவாதிரை</option>
                    <option value="புனர்பூசம்">புனர்பூசம்</option>
                    <option value="பூசம்">பூசம்</option>
                    <option value="ஆயில்யம்">ஆயில்யம்</option>
                    <option value="மகம்">மகம்</option>
                    <option value="பூரம்">பூரம்</option>
                    <option value="உத்திரம்">உத்திரம்</option>
                    <option value="ஹஸ்தம்">ஹஸ்தம்</option>
                    <option value="சித்திரை">சித்திரை</option>
                    <option value="சுவாதி">சுவாதி</option>
                    <option value="விசாகம்">விசாகம்</option>
                    <option value="அனுஷம்">அனுஷம்</option>
                    <option value="கேட்டை">கேட்டை</option>
                    <option value="மூலம்">மூலம்</option>
                    <option value="பூராடம்">பூராடம்</option>
                    <option value="உத்திராடம்">உத்திராடம்</option>
                    <option value="திருவோணம்">திருவோணம்</option>
                    <option value="அவிட்டம்">அவிட்டம்</option>
                    <option value="சதயம்">சதயம்</option>
                    <option value="புரட்டாதி">புரட்டாதி</option>
                    <option value="உத்திரட்டாதி">உத்திரட்டாதி</option>
                    <option value="ரேவதி">ரேவதி</option>
                </Select>
                <Input type='number' onChange={(e)=>{
                    let tt1 = t1; tt1.nazhigai = e.target.value;
                    setT1(tt1)
                }} name='AgasuNazhigai' border={'1px solid blue'}  width={'60px'} />
                <Input type='number' onChange={(e)=>{
                    let tt1 = t1; tt1.vinadi = e.target.value;
                    setT1(tt1)
                }} name='AgasuVinadi' border={'1px solid blue'} width={'60px'} />
            </FormControl>

            <FormControl style={Ttwo} isRequired >
                <FormLabel color={'crimson'} width={'100%'} fontWeight={'bold'}>2) பிறந்த நாள் நா-வி :</FormLabel>
                <Select onChange={(e)=>{
                    let tt2 = t2; tt2.natchathiram = e.target.value;
                    setT2(tt2)
                }}>
                    <option value="அஸ்வினி">அஸ்வினி</option>
                    <option value="பரணி">பரணி</option>
                    <option value="கிருத்திகை">கிருத்திகை</option>
                    <option value="ரோகிணி">ரோகிணி</option>
                    <option value="மிருகசீரிசம்">மிருகசீரிசம்</option>
                    <option value="திருவாதிரை">திருவாதிரை</option>
                    <option value="புனர்பூசம்">புனர்பூசம்</option>
                    <option value="பூசம்">பூசம்</option>
                    <option value="ஆயில்யம்">ஆயில்யம்</option>
                    <option value="மகம்">மகம்</option>
                    <option value="பூரம்">பூரம்</option>
                    <option value="உத்திரம்">உத்திரம்</option>
                    <option value="ஹஸ்தம்">ஹஸ்தம்</option>
                    <option value="சித்திரை">சித்திரை</option>
                    <option value="சுவாதி">சுவாதி</option>
                    <option value="விசாகம்">விசாகம்</option>
                    <option value="அனுஷம்">அனுஷம்</option>
                    <option value="கேட்டை">கேட்டை</option>
                    <option value="மூலம்">மூலம்</option>
                    <option value="பூராடம்">பூராடம்</option>
                    <option value="உத்திராடம்">உத்திராடம்</option>
                    <option value="திருவோணம்">திருவோணம்</option>
                    <option value="அவிட்டம்">அவிட்டம்</option>
                    <option value="சதயம்">சதயம்</option>
                    <option value="புரட்டாதி">புரட்டாதி</option>
                    <option value="உத்திரட்டாதி">உத்திரட்டாதி</option>
                    <option value="ரேவதி">ரேவதி</option>
                </Select>
                <Input type='number' onChange={(e)=>{
                    let tt2 = t2; tt2.nazhigai = e.target.value;
                    setT2(tt2)
                }} name='AgasuNazhigai' border={'1px solid blue'}  width={'60px'} />
                <Input type='number' onChange={(e)=>{
                    let tt2 = t2; tt2.vinadi = e.target.value;
                    setT2(tt2)
                }} name='AgasuVinadi' border={'1px solid blue'} width={'60px'} />
            </FormControl>

            <FormControl style={Tthree} isRequired>
                <FormLabel color={'crimson'} width={'100%'} fontWeight={'bold'}>3) பிறந்த நாள் நா-வி :</FormLabel>
                <Select onChange={(e)=>{
                    let tt3 = t3; tt3.natchathiram = e.target.value;
                    setT3(tt3)
                }}>
                    <option value="அஸ்வினி">அஸ்வினி</option>
                    <option value="பரணி">பரணி</option>
                    <option value="கிருத்திகை">கிருத்திகை</option>
                    <option value="ரோகிணி">ரோகிணி</option>
                    <option value="மிருகசீரிசம்">மிருகசீரிசம்</option>
                    <option value="திருவாதிரை">திருவாதிரை</option>
                    <option value="புனர்பூசம்">புனர்பூசம்</option>
                    <option value="பூசம்">பூசம்</option>
                    <option value="ஆயில்யம்">ஆயில்யம்</option>
                    <option value="மகம்">மகம்</option>
                    <option value="பூரம்">பூரம்</option>
                    <option value="உத்திரம்">உத்திரம்</option>
                    <option value="ஹஸ்தம்">ஹஸ்தம்</option>
                    <option value="சித்திரை">சித்திரை</option>
                    <option value="சுவாதி">சுவாதி</option>
                    <option value="விசாகம்">விசாகம்</option>
                    <option value="அனுஷம்">அனுஷம்</option>
                    <option value="கேட்டை">கேட்டை</option>
                    <option value="மூலம்">மூலம்</option>
                    <option value="பூராடம்">பூராடம்</option>
                    <option value="உத்திராடம்">உத்திராடம்</option>
                    <option value="திருவோணம்">திருவோணம்</option>
                    <option value="அவிட்டம்">அவிட்டம்</option>
                    <option value="சதயம்">சதயம்</option>
                    <option value="புரட்டாதி">புரட்டாதி</option>
                    <option value="உத்திரட்டாதி">உத்திரட்டாதி</option>
                    <option value="ரேவதி">ரேவதி</option>
                </Select>
                <Input type='number' onChange={(e)=>{
                    let tt3 = t3; tt3.nazhigai = e.target.value;
                    setT3(tt3)
                }} name='AgasuNazhigai' border={'1px solid blue'}  width={'60px'} />
                <Input type='number' onChange={(e)=>{
                    let tt3 = t3; tt3.vinadi = e.target.value;
                    setT3(tt3)
                }} name='AgasuVinadi' border={'1px solid blue'} width={'60px'} />
            </FormControl>



            <FormControl  mb={'10px'}>
            <FormLabel color={'crimson'} fontWeight={'bold'} mt={'30px'} >Next day star / மறுநாள் நட்சத்திரம் :</FormLabel>
            </FormControl>


            <FormControl style={None} isRequired mb={'40px'} >
                <FormLabel color={'crimson'} width={'100%'} fontWeight={'bold'}>1) மறுநாள் நா-வி :</FormLabel>
                <Select onChange={(e)=>{
                    let nn1 = n1; nn1.natchathiram = e.target.value;
                    setN1(nn1)
                }}>
                    <option value="அஸ்வினி">அஸ்வினி</option>
                    <option value="பரணி">பரணி</option>
                    <option value="கிருத்திகை">கிருத்திகை</option>
                    <option value="ரோகிணி">ரோகிணி</option>
                    <option value="மிருகசீரிசம்">மிருகசீரிசம்</option>
                    <option value="திருவாதிரை">திருவாதிரை</option>
                    <option value="புனர்பூசம்">புனர்பூசம்</option>
                    <option value="பூசம்">பூசம்</option>
                    <option value="ஆயில்யம்">ஆயில்யம்</option>
                    <option value="மகம்">மகம்</option>
                    <option value="பூரம்">பூரம்</option>
                    <option value="உத்திரம்">உத்திரம்</option>
                    <option value="ஹஸ்தம்">ஹஸ்தம்</option>
                    <option value="சித்திரை">சித்திரை</option>
                    <option value="சுவாதி">சுவாதி</option>
                    <option value="விசாகம்">விசாகம்</option>
                    <option value="அனுஷம்">அனுஷம்</option>
                    <option value="கேட்டை">கேட்டை</option>
                    <option value="மூலம்">மூலம்</option>
                    <option value="பூராடம்">பூராடம்</option>
                    <option value="உத்திராடம்">உத்திராடம்</option>
                    <option value="திருவோணம்">திருவோணம்</option>
                    <option value="அவிட்டம்">அவிட்டம்</option>
                    <option value="சதயம்">சதயம்</option>
                    <option value="புரட்டாதி">புரட்டாதி</option>
                    <option value="உத்திரட்டாதி">உத்திரட்டாதி</option>
                    <option value="ரேவதி">ரேவதி</option>
                </Select>
                <Input type='number' onChange={(e)=>{
                    let nn1 = n1; nn1.nazhigai = e.target.value;
                    setN1(nn1)
                }} name='AgasuNazhigai' border={'1px solid blue'}  width={'60px'} />
                <Input type='number' onChange={(e)=>{
                    let nn1 = n1; nn1.vinadi = e.target.value;
                    setN1(nn1)
                }} name='AgasuVinadi' border={'1px solid blue'} width={'60px'} />
            </FormControl>    

            

            <FormControl isRequired mb={'40px'} >
                <Button onClick={()=>handlerasi()} color={'blue'} fontWeight={'bold'} border={'1px solid blue'} maxW={'120px'}>Next</Button>
                {/* <Input type='submit' onClick={()=>handlerasi()} color={'blue'} fontWeight={'bold'} border={'1px solid blue'} maxW={'120px'} /> */}
            </FormControl> 

        </VStack>
    </Box>
    </div>
  )
}

export default Formrasi