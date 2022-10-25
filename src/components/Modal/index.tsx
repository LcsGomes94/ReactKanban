import ReactModal from "react-modal";
import { ModalContainer, StyledReactTooltip } from "./styles";
import closeIMG from "../../assets/close.svg"
import { useContext, useEffect, useState } from "react";
import { InputContext, SetInputContext } from './ModalContext'
import { TasksContext, SetTasksContext, TaskNameContext } from '../Task/TasksContext'
import { SectionNameContext, SectionsContext, SetSectionsContext } from '../TaskSection/SectionContext'

interface IModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
}

ReactModal.setAppElement('#root')

export function Modal ({ isOpen, onRequestClose, title }:IModalProps) {
    const inputValue = useContext(InputContext)
    const setInputValue = useContext(SetInputContext)

    const taskList = useContext(TasksContext)
    const setTasks = useContext(SetTasksContext)
    const extraSectionsList = useContext(SectionsContext)
    const setSections = useContext(SetSectionsContext)

    const taskName = useContext(TaskNameContext)
    const sectionName = useContext(SectionNameContext)

    const [ canSubmit, setCanSubmit ] = useState({can: false, reason: 'Empty Value'})

    function createNewSection () {
        setSections([...extraSectionsList, inputValue])
    }

    function createNewTask() {
        setTasks([...taskList, { name: inputValue, parent: 'admin' }])
    }

    function editTask() {
        if (taskName !== inputValue) {
            setTasks(taskList.map(task => {
            return task.name === taskName ? { name: inputValue, parent: task.parent } : task
            }))
        }
    }

    function editSection() {
        if (sectionName !== inputValue) {
            setSections(extraSectionsList.map(section => {
            return section === sectionName ? inputValue : section
            }))
            setTasks(taskList.map(task => {
                return task.parent !== sectionName ? task : { name: task.name, parent: inputValue }
            }))
        }
    }

    useEffect(() => {
        if (title === 'Create New Task' || title === 'Edit Task') {
            if (inputValue === '' && canSubmit.can === true) {
                setCanSubmit({can: false, reason: 'Duplicated Value'})
            } else if (inputValue !== '' && taskList.length === 0 && canSubmit.can === false) {
                setCanSubmit({can: true, reason: ''})
            }
    
            for (let i = 0; i < taskList.length; i++) {
                if (inputValue === '') {
                    setCanSubmit({can: false, reason: 'Empty value'})
                    break
                } else if (inputValue === taskList[i].name) {
                    setCanSubmit({can: false, reason: 'Duplicated value'})
                    break
                } else if (canSubmit.can === false) {
                    setCanSubmit({can: true, reason: ''})
                }
            }
        }

        if (title === 'Create New Section' || title === 'Edit Section') {
            if (inputValue === '' && canSubmit.can === true) {
                setCanSubmit({can: false, reason: 'Duplicated Value'})
            } else if (inputValue !== '' && extraSectionsList.length === 0 && canSubmit.can === false) {
                setCanSubmit({can: true, reason: ''})
            }
    
            for (let i = 0; i < extraSectionsList.length; i++) {
                if (inputValue === '') {
                    setCanSubmit({can: false, reason: 'Empty value'})
                    break
                } else if (inputValue === extraSectionsList[i]) {
                    setCanSubmit({can: false, reason: 'Duplicated value'})
                    break
                } else if (canSubmit.can === false) {
                    setCanSubmit({can: true, reason: ''})
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inputValue])

    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className={'react-modal-content'}>
            <ModalContainer onSubmit={ e => {
                e.preventDefault()
                if (title === 'Create New Task') {
                    createNewTask()
                    onRequestClose()
                    setCanSubmit({can: false, reason: 'Duplicated value'})
                } else if (title === 'Create New Section'){
                    createNewSection()
                    onRequestClose()
                    setCanSubmit({can: false, reason: 'Duplicated value'})
                } else if (title === 'Edit Task'){
                    editTask()
                    onRequestClose()
                    setCanSubmit({can: false, reason: 'Duplicated value'})
                } else {
                    editSection()
                    onRequestClose()
                    setCanSubmit({can: false, reason: 'Duplicated value'})
                }
            }}>
                <h2>{title}</h2>
                <input type="text" placeholder="Enter text here" autoFocus className={title === 'Create New Section' ? 'modal-section' : ''}
                    value={inputValue} onChange={e => {
                        setInputValue(e.target.value)
                    }}/>
                <div data-tip={canSubmit.reason}><button className="confirm" disabled={!canSubmit.can}>Confirm</button></div>
                <button className="close"><img src={closeIMG} alt="X" onClick={ e => {
                    e.preventDefault()
                    onRequestClose()
                }}/></button>

                <StyledReactTooltip backgroundColor="#cf0001" effect='solid'/>
            </ModalContainer>
        </ReactModal>
    )
}