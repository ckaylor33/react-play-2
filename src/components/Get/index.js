import React from 'react'
import { useParams } from 'react-router-dom'

export default function Get() {
  const params = useParams()
  return <h1>Get this - {params.anything}</h1>
}
