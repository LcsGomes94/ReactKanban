import { TaskContainer } from "./styles";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import pinImg from "../../assets/pin.svg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useContext, useState } from "react";
import { SetTaskNameContext, SetTasksContext, TasksContext } from "./TasksContext";
import { HandleOpenContext, HandleTitleContext, SetInputContext } from "../Modal/ModalContext";

interface ITask {
    name: string
    parent: string
}

interface ITaskProps {
    task: ITask;
}

export function Task ({ task }: ITaskProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.name })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }

    const taskList = useContext(TasksContext)
    const setTasks = useContext(SetTasksContext)
    
    const setTaskName = useContext(SetTaskNameContext)

    const handleOpenModal = useContext(HandleOpenContext)
    const setModalTitle = useContext(HandleTitleContext)
    const setInputValue = useContext(SetInputContext)

    const [ deleteReady, setDeleteReady ] = useState(false)

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TaskContainer className='task'>
                <p>{task.name}</p>
                <div>
                    <button onClick={() => {
                        setModalTitle('Edit Task')
                        setInputValue(task.name)
                        setTaskName(task.name)
                        handleOpenModal()
                    }}><img src={editImg} alt="Edit" /></button>

                    <button onClick={() => {
                        deleteReady && setTasks(taskList.filter(originalTask => originalTask.name !== task.name))
                        setDeleteReady(true)
                        setTimeout(() => { setDeleteReady(false) }, 1000)
                    }}><img src={deleteImg} alt="Delete" className={deleteReady ? 'deleteReady' : ''}/></button>

                </div>
                <img src={pinImg} alt="" className="pin" />
            </TaskContainer>
        </div>
    )
}