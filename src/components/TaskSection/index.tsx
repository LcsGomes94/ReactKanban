import { useContext, useState } from "react";
import { HandleOpenContext, HandleTitleContext, SetInputContext } from "../Modal/ModalContext";
import { SectionsContext, SetSectionNameContext, SetSectionsContext } from "./SectionContext";
import { TaskSectionBody, TaskSectionContainer, TaskSectionHeader } from "./styles";

import editImg from '../../assets/edit.svg'
import deleteImg from '../../assets/delete.svg'
import { SetTasksContext, TasksContext } from "../Task/TasksContext";

interface ITaskSectionProps {
    sectionLabel: string
    sectionType: string
    children?: React.ReactNode
}

export function TaskSection ({ sectionLabel, sectionType, children }: ITaskSectionProps) {
    const handleOpenModal = useContext(HandleOpenContext)
    const setModalTitle = useContext(HandleTitleContext)
    const setInputValue = useContext(SetInputContext)

    const taskList = useContext(TasksContext)
    const setTasks = useContext(SetTasksContext)

    const setSectionName = useContext(SetSectionNameContext)

    const extraSectionsList = useContext(SectionsContext)
    const setSections = useContext(SetSectionsContext)

    const [ deleteReady, setDeleteReady ] = useState(false)

    function renderButtons () {
        if (sectionType === 'extra') {
            return (
                <div>
                    <button onClick={() => {
                        setModalTitle('Edit Section')
                        setInputValue(sectionLabel)
                        setSectionName(sectionLabel)
                        handleOpenModal()
                    }}><img src={editImg} alt="Edit" /></button>

                    <button onClick={() => {
                        if (deleteReady) {
                            setSections(extraSectionsList.filter(originalSection => originalSection !== sectionLabel))
                            setTasks(taskList.filter(task => task.parent !== sectionLabel))
                        }
                        setDeleteReady(true)
                        setTimeout(() => { setDeleteReady(false) }, 1000)
                    }}><img src={deleteImg} alt="Delete" className={deleteReady ? 'deleteReady' : ''}/></button>

                </div>
            )
        }
    }

    return (
        <TaskSectionContainer>
            <TaskSectionHeader className={sectionType}>
                <h2>{sectionLabel}</h2>
                {renderButtons()}
            </TaskSectionHeader>
            <TaskSectionBody className={sectionType}>
                {children}
            </TaskSectionBody>
        </TaskSectionContainer>
    )
}