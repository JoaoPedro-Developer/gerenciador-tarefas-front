import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useAlert } from 'react-alert'
import axios from 'axios'

import CustomInput from './customInput.jsx'
import CustomButton from './customButton.jsx'

const AddTask = () => {
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
            await axios.post()
        } catch (error) {

        }
    }

    return (
        <div className="add-task-container">
            <CustomInput 
                label='Adicionar Tarefa...' 
                value={task} 
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color='#fffffff'/>
            </CustomButton>
        </div>
    )
}

export default AddTask