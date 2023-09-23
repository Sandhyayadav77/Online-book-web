import React from 'react'
import { useParams } from 'react-router-dom';
import { AdminParticularPublication } from '../../features/admin/components/AdminParticularPublication';

// individual publication and their subjects
const AdminParticularPublicationPage = () => {
  const { publisherName } = useParams();
  return (
    <>
        <AdminParticularPublication />
    </>
  )
}

export default AdminParticularPublicationPage