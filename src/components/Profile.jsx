import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Typography, Spin } from 'antd'

const { Title, Paragraph } = Typography

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <Spin />
  }

  return (
    isAuthenticated && (
      <div>
        
      </div>
    )
  )
}

export default Profile