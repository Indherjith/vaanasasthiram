import React, { useState,useRef } from 'react'
import "./Result.css"
import {useSelector} from "react-redux"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

const Result = () => {
  const state = useSelector(store=>store) 
  const pdfRef = useRef();
  const handleDownload=()=>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4',true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = (canvas.height);
      // const imgHeight = 2*(pdfHeight)
      const ratio = Math.min(pdfWidth/(imgWidth) , pdfHeight/(imgHeight));
      const imgX =(pdfWidth - imgWidth * ratio)/2;
      const imgY = 30;
      pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio-30);
      // pdf.addImage(imgData,'PNG',10,10,180,160);
      pdf.save(`${state.Name}.pdf`)
    })    
  }

  return (
    <div>
      <h1>Result</h1>
      <div className='griding' ref={pdfRef}>
        <div>
        <div className='ques'>
          <p><b>பெயர்</b></p>
          <p><b>{state.Name}</b></p>
        </div>
        <div className='ques'>
          <p><b>பால்வகை</b></p>
          <p><b>{state.Gender}</b></p>
        </div>
        <div className='ques'>
          <p><b>நாள்</b></p>
          <p><b>{state.Day}</b></p>
        </div>
        <div className='ques'>
          <p><b>சூரிய உதயம்</b></p>
          <p><b>{`${state.SunHour} - ${state.SunMin}`}</b> </p>
        </div>
        <div className='ques'>
          <p><b>அகசு</b></p>
          <p><b>{`${state.AgasuNazhigai} - ${state.AgasuVinadi}`}</b></p>
        </div>
        <div className='ques'>
          <p><b>பிறந்த நேரம்</b></p>
          <p><b>{state.BirthHour>12 ? `${state.BirthHour - 12} - ${state.BirthMins} Pm` : `${state.BirthHour} - ${state.BirthMins} Am`}</b></p>
        </div>
        <div className='ques'>
          <p><b>ஜனனநழிகை</b></p>
          <p><b>{`${state.JananaNazhigai} - ${state.JananaVinadi}`} </b></p>
        </div>
        <div className='ques'>
          <p><b>லக்னம்</b></p>
          <p><b>{state.Luknam} </b></p>
        </div>
        <div className='ques'>
          <p><b>லக்னம் பாதம் 1 கு</b></p>
          <p><b>{Math.floor(((state.LaknaIrupu + state.LaknaSel)/4)/60)} - {((state.LaknaIrupu + state.LaknaSel)/4)%60} </b></p>
        </div>
        <div className='ques'>
          <p><b>மாந்தி</b></p>
          <p><b>{state.Kuligan} </b></p>
        </div>
        <div className='ques'>
          <p><b>நச்சத்திரம்</b></p>
          <p><b>{state.Natch} </b></p>
        </div>
        <div className='ques'>
          <p><b>ஆதிஅந்த பரமநாழிகை </b></p>
          <p><b>{state.Aadhi} </b></p>
        </div>
        <div className='ques'>
          <p><b>நட்சத்திர செல்</b></p>
          <p><b>{state.NatSel} </b></p>
        </div>
        <div className='ques'>
          <p><b>நட்சத்திர இருப்பு</b></p>
          <p><b>{state.NatIru} </b></p>
        </div>
        </div>
      </div>
      <button onClick={()=>handleDownload()} ><h1>Download Jadhagam</h1></button>
    </div>
  )
}

export default Result