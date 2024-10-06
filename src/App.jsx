import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Layout, Menu, Button } from 'antd'
import Home from './components/Home'
import Profile from './components/Profile'
import './App.css'

const { Header, Content, Footer } = Layout

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  const menuItems = [
    { key: '1', label: <Link to="/">Home</Link> },
    { key: '2', label: <Link to="/profile">Profile</Link> }
  ]

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
        {!isAuthenticated ? (
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
        ) : (
          <Button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
        )}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default App