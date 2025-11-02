import { useState, useEffect } from 'react'
import './hello.css'
import { Button, Checkbox, Input, List, Space } from 'antd'
function Hello() {
  const [task, setTask] = useState('')
  const [taskList, setTasks] = useState([{ id: 1, desc: '吃饭', hovered: false, hasDone: false }])
  const [hasDone, setHasDone] = useState(0)

  useEffect(() => {
    const completedCount = taskList.filter(item => item.hasDone)
    setHasDone(completedCount.length)
  }, [taskList])
  const handlePressEnter = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: taskList.length + 1,
        desc: task,
        hovered: false,
        hasDone: false
      }
      setTasks([newTask, ...taskList])
      setTask('')
    }
  }

  const handleDoneTask = (id, e) => {
    console.log(id, e.target.checked)
    setTasks(
      taskList.map(item => {
        if (item.id === id) {
          item.hasDone = e.target.checked
        }
        return item
      })
    )
    setHasDone(taskList.filter(item => item.hasDone).length)
  }

  const handleDeleteTask = id => {
    setTasks(taskList.filter(item => item.id !== id))
  }

  const handleAllDoneTask = e => {
    setTasks(
      taskList.map(item => {
        item.hasDone = e.target.checked
        return item
      })
    )
    setHasDone(taskList.filter(item => item.hasDone).length)
  }

  const handleDeleteAll = () => {
    console.log('handleDeleteAll')
    setTasks([])
  }

  return (
    <div className='hello'>
      <Input placeholder='请输入你的任务名称，按回车键确认' value={task} onChange={e => setTask(e.target.value)} onPressEnter={handlePressEnter} />
      <List className='task-list-item'>
        {taskList.map(item => (
          <List.Item key={item.id}>
            <Space align='start' style={{ width: '100%' }}>
              <Checkbox checked={item.hasDone} onChange={e => handleDoneTask(item.id, e)} />
              <span>{item.desc}</span>
            </Space>
            <Space>
              <Button
                type='primary'
                danger
                size='small'
                onClick={() => {
                  handleDeleteTask(item.id)
                }}>
                删除
              </Button>
            </Space>
          </List.Item>
        ))}
      </List>
      <List className='task-count-wrapper'>
        <Space align='start' style={{ width: '100%' }}>
          <Checkbox onChange={e => handleAllDoneTask(e)} checked={taskList.length === hasDone && taskList.length > 0} />
          <span className='task-count'>
            已完成{hasDone} / 全部{taskList.length}
          </span>
        </Space>
        <Space>
          <Button type='primary' danger size='small' onClick={handleDeleteAll}>
            删除全部
          </Button>
        </Space>
      </List>
    </div>
  )
}
export default Hello