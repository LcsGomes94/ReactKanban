import ReactModal from "react-modal";
import { ModalContainer } from "./styles";
import closeIMG from "../../assets/close.svg"
import React, { useContext } from "react";
import { InputContext, SetInputContext } from './ModalContext'
import { TasksContext, SetTasksContext } from '../Task/TasksContext'
import { SectionsContext, SetSectionsContext } from '../TaskSection/SectionContext'

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

    function createNewSection () {
        setSections([...extraSectionsList, inputValue])
    }

    function createNewTask() {
        setTasks([...taskList, { name: inputValue, parent: 'admin' }])
    }
    
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className={'react-modal-content'}>
            <ModalContainer onSubmit={ e => {
                e.preventDefault()
                if (title === 'Create New Task') {
                    createNewTask()
                    onRequestClose()
                } else {
                    createNewSection()
                    onRequestClose()
                }
            }}>
                <h2>{title}</h2>
                <input type="text" placeholder="Enter text here" autoFocus className={title === 'Create New Section' ? 'modal-section' : ''}
                    value={inputValue} onChange={e => {
                        setInputValue(e.target.value)
                    }}/>
                <button className="confirm">Confirm</button>
                <button className="close"><img src={closeIMG} alt="X" onClick={ e => {
                    e.preventDefault()
                    onRequestClose()
                }}/></button>
            </ModalContainer>
        </ReactModal>
    )
}