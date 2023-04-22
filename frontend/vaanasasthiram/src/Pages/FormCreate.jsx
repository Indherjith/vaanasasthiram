import { Box, FormControl, FormHelperText, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { feedinput, luknam } from '../Redux/action';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const FormCreate=()=>{

    const state = useSelector(store=>store)

    var currentdate = new Date();
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [Anazi,setAnazi] = useState();
    const [Avina,setAvina] = useState();
    const [Bhour,setBhour] = useState();
    const [Bmins,setBmins] = useState();
    const [day,setDay] = useState();
    const [gender,setGender] = useState();
    const [rasi,setRasi] = useState();
    const [rasiNazi,setRasiNazi] = useState();
    const [rasiVina,setRasiVina] = useState();

    const handleInput=async()=>{
        const payload = {
            name,Anazi,Avina,Bhour,
            Bmins,day,gender,rasi,
            rasiNazi,rasiVina
        }
        await dispatch(feedinput(payload))
    }

    useEffect(()=>{
        console.log(state);
    },[state])

  return (
    <Box maxW={'480px'} padding={'20px'} margin={'auto'} marginTop={'20px'} boxShadow={'1px 1px 3px 3px grey'} >
        <h1 style={{marginTop:"10px",fontWeight:"bold",backgroundColor:'PURPLE',color:"white", padding:"20px 0px"}}><i>NEW JADHAGAM / புதிய ஜாதகம்</i></h1>
        <VStack marginTop={'30px'} >

            <FormControl isRequired mb={'40px'} >
                <FormLabel color={'crimson'} fontWeight={'bold'}>Name / பெயர் :</FormLabel>
                <Input type='text' name='name' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name / பெயரை உள்ளிடவும்' maxW={'320px'} />
            </FormControl>

            <FormControl isRequired mb={'40px'} >
                <FormLabel color={'crimson'} fontWeight={'bold'}>Agasu Nazhigai-Vinadi / அகசு நாழிகை வினாடி :</FormLabel>
                <Input type='number' name='AgasuNazhigai' onChange={(e)=>setAnazi(e.target.value)}  width={'60px'} />
                <Input type='number' name='AgasuVinadi' onChange={(e)=>setAvina(e.target.value)}  width={'60px'} />
                <FormHelperText>Enter Agasu Nazhigai Vinadi / அகசு நாழிகை வினாடி உள்ளிடவும்</FormHelperText>
            </FormControl>

            <FormControl isRequired mb={'40px'} >
                <FormLabel color={'crimson'} fontWeight={'bold'}>Birth Time / பிறந்த நேரம் :</FormLabel>
                <Input type='number' name='AgasuNazhigai' onChange={(e)=>setBhour(e.target.value)}  width={'60px'} />
                <Input type='number' name='AgasuVinadi' onChange={(e)=>setBmins(e.target.value)}  width={'60px'} />
                <FormHelperText>Railway Timing / ரயில் நேரம்</FormHelperText>
            </FormControl>

            <FormControl isRequired mb={'40px'} >
            <Select placeholder='Select Day / பிறந்த நாளைத் தேர்ந்தெடு' onChange={(e)=>setDay(e.target.value)} >
                <option value='Sunday'>Sunday/ஞாயிறு</option>
                <option value='Monday'>Monday/திங்கள்</option>
                <option value='Tuesday'>Tuesday/செவ்வாய்</option>
                <option value='Wednesday'>Wednesday/புதன்</option>
                <option value='Thursday'>Thursday/வியாழன்</option>
                <option value='Friday'>Friday/வெள்ளி</option>
                <option value='Saturday'>Saturday/சனி</option>
            </Select>
            </FormControl>

            <FormControl isRequired mb={'40px'} >
            <Select placeholder='Select Gender / ஜாதகர் பாலினம்' onChange={(e)=>setGender(e.target.value)} >
                <option value='male'>male/ஆண்</option>
                <option value='female'>female/பெண்</option>
            </Select>
            </FormControl>

            <FormControl isRequired mb={'40px'} >
            <Select placeholder='Maadha Irupu / மாத இருப்பு' onChange={(e)=>setRasi(e.target.value)} >
                <option value='0'>Mesham/மேஷம்</option>
                <option value='1'>Rishabam/ரிஷபம்</option>
                <option value="2">Midhunam/மிதுனம்</option>
                <option value="3">Kadagam/கடகம்</option>
                <option value="4">Simmam/சிம்மம்</option>
                <option value="5">Kanni/கன்னி</option>
                <option value="6">Thulam/துலாம்</option>
                <option value="7">Viruchagam/விருச்சகம்</option>
                <option value="8">Dhanusu/தனுசு</option>
                <option value="9">Magaram/மகரம்</option>
                <option value="10">Kumbam/கும்பம்</option>
                <option value="11">Meenam/மீனம்</option>
            </Select>
            <Input type='number' onChange={(e)=>setRasiNazi(e.target.value)}  width={'60px'} />
            <Input type='number' onChange={(e)=>setRasiVina(e.target.value)}  width={'60px'} />
            </FormControl>

            <FormControl isRequired mb={'40px'} >
                <Input type='submit' onClick={handleInput} color={'blue'} fontWeight={'bold'} border={'1px solid blue'} maxW={'120px'} />
            </FormControl>

        </VStack>
    </Box>
  )
}

export default FormCreate;
