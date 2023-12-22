import React, { useState } from 'react'
import './main.css'
import Tasks from './Tasks'


const addedTask = []
export default function Main() {
    const [tasks, setTasks] = useState(addedTask)
    const handleAddTasks = () => {
        let task = {
            name: 'Test',
            description: 'Test test test test test',
            status: 'added'
        }
        setTasks([...tasks, task])
    }
    return (
        <div className='main-page-main'>
            <div className='header-main'>
                <span>Track Your Tasks</span>
                <button onClick={handleAddTasks}>Add Task</button>
            </div>
            <div className='main-page'>
                <div className='added-main'>
                    <span className='main-heading'>Added</span>
                    <hr style={{ width: '15vw' }}></hr>
                    {
                        tasks.filter((item) => item.status === 'added').map((item, index) => {
                            return <Tasks key={index} />
                        })
                    }
                </div>
                <div className='started-main'>
                    <span className='main-heading'>Started</span>
                    <hr style={{ width: '15vw' }}></hr>
                    {
                        tasks.filter((item) => item.status === 'started').map((item, index) => {
                            return <Tasks key={index} />
                        })
                    }
                </div>
                <div className='completed-main'>
                    <span className='main-heading'>Completed</span>
                    <hr style={{ width: '15vw' }}></hr>
                    {
                        tasks.filter((item) => item.status === "completed").map((item, index) => {
                            return <Tasks key={index} />
                        })
                    }
                </div>
            </div>
        </div>

    )
}