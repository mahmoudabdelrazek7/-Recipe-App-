import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Recipe() {

  let params = useParams()
  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  return (
    <div className='detail'>
      <h2>{details.title}</h2>
      <img src={details.image} alt=''/>
    </div>
  )
}
