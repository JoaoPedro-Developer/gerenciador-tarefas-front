import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useAlert } from 'react-alert'
import axios from 'axios'

import CustomInput from './CustomInput.jsx'
import CustomButtom from './CustomButton.jsx'

import './AddTask.scss'
const AddTask = ({fetchTasks}) => {
    const [task, setTask] = useState('')

    const alert = useAlert()

    const onChange = (e) => {
        setTask(e.target.value)
    }

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error('A tarefa precisa de uma descrição para ser adicionada')
            }
            await axios.post('http://localhost:8000/tasks', {
                description: task,
                isCompleted: false
            })
            await fetchTasks()
            setTask('')
            alert.success('A tarefa foi adicionada com sucesso')
        } catch (_e) {
            alert.error('Algo deu errado')
        }
    }

    return (
        <div className="add-task-container">
            <CustomInput 
                label='Adicionar Tarefa...' 
                value={task} 
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButtom onClick={handleTaskAddition} e>
                <FaPlus size={14} color='#fffffff'/>
            </CustomButtom>
        </div>
    )
}

export default AddTask