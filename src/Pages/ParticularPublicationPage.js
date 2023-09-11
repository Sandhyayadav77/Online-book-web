import React from 'react'
import { ParticularPublication } from '../features/ParticularPublication/ParticularPublication'
import { useParams } from 'react-router-dom';

// individual publication and their subjects
const ParticularPublicationPage = () => {
  const { publisherName } = useParams();
  return (
    <>
        <ParticularPublication/>
    </>
  )
}

export default ParticularPublicationPage