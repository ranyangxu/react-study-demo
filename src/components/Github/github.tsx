import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Avatar, Button, Col, Row, Input, Space } from 'antd'
import './github.css'

export default function Github() {
  const [isFirst, setIsFirst] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [usersList, setUsersList] = useState([])

  const getUsers = async name => {
    setIsFirst(false)
    setIsLoading(true)
    try {
      const result = await axios.get(`https://api.github.com/search/users?q=${name}`)
      console.log(result)
      setUsersList(result.data.items)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const groupByUsersCol = (usersList, col) => {
    const gropud = []
    for (let i = 0; i < usersList.length; i += col) {
      gropud.push(usersList.slice(i, i + col))
    }
    return gropud
  }

  return (
    <div className='github'>
      <div className='top-search'>
        <h3 style={{ marginBottom: '10px' }}>Search Github Users</h3>
        <Space.Compact>
          <Input style={{ width: '300px' }} placeholder='Enter the name you search' value={userName} onChange={e => setUserName(e.target.value)} />
          <Button type='primary' onClick={() => getUsers(userName)}>
            Submit
          </Button>
        </Space.Compact>
      </div>
      <div className='middle-content'>
        {isLoading ? (
          <div>Loading...</div>
        ) : isFirst ? (
          <div>搜索用户</div>
        ) : isError ? (
          <div>Error</div>
        ) : usersList.length === 0 ? (
          <div>没有该用户~</div>
        ) : (
          groupByUsersCol(usersList, 3).map((items, index) => (
            <Row key={index}>
              {items.map((item, index) => (
                <Col span={8} key={item.id}>
                  <div className='content-box'>
                    <Avatar shape='square' size={128} src={item.avatar_url}></Avatar>
                    <p className='user-name'>{item.login}</p>
                  </div>
                </Col>
              ))}
            </Row>
          ))
        )}
      </div>
    </div>
  )
}
