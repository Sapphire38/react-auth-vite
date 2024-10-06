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
        <Title level={2}>{user.name}</Title>
        <img src={user.picture} alt={user.name} />
        <Paragraph>{user.email}</Paragraph>
      </div>
    )
  )
}

export default Profile