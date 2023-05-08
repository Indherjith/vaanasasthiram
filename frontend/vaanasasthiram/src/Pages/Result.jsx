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
      const imgHeight = canvas.height;
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
        <div className='ques'>
          <p><b>Name</b></p>
          <p><b>{state.Name}</b></p>
        </div>
        <div className='ques'>
          <p>Gender</p>
          <p>{state.Gender}</p>
        </div>
        <div className='ques'>
          <p>Day</p>
          <p>{state.Day}</p>
        </div>
        <div className='ques'>
          <p>SunRaise</p>
          <p>{`${state.SunHour} - ${state.SunMin}`} </p>
        </div>
        <div className='ques'>
          <p>Agasu</p>
          <p>{`${state.AgasuNazhigai} - ${state.AgasuVinadi}`}</p>
        </div>
        <div className='ques'>
          <p>Birth Time</p>
          <p>{state.BirthHour>12 ? `${state.BirthHour - 12} - ${state.BirthMins} Pm` : `${state.BirthHour} - ${state.BirthMins} Am`}</p>
        </div>
        <div className='ques'>
          <p><b>JananaNazhigai</b></p>
          <p><b>{`${state.JananaNazhigai} - ${state.JananaVinadi}`} </b></p>
        </div>
        <div className='ques'>
          <p><b>Laknam</b></p>
          <p><b>{state.Luknam} </b></p>
        </div>
        <div className='ques'>
          <p>Laknam Paadham 1 ku</p>
          <p>{Math.floor(((state.LaknaIrupu + state.LaknaSel)/4)/60)} - {((state.LaknaIrupu + state.LaknaSel)/4)%60} </p>
        </div>
        <div className='ques'>
          <p><b>Maandhi</b></p>
          <p><b>{state.Kuligan} </b></p>
        </div>
      </div>
      <button onClick={()=>handleDownload()} ><h1>Download Jadhagam</h1></button>
    </div>
  )
}

export default Result