import React from 'react'
import {useSelector} from "react-redux"

const Result = () => {
  const state = useSelector(store=>store)
  console.log(state);
  return (
    <div>Result</div>
  )
}

export default Result