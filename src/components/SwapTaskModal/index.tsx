import { SwapContainer } from "./style";
import ReactModal from "react-modal";
import { SectionsContext } from "../TaskSection/SectionContext"
import closeImg from "../../assets/close.svg"
import swapImg from "../../assets/swap.svg"
import { useContext } from "react";
import { SetTasksContext, TaskNameContext, TaskParentContext, TasksContext } from "../Task/TasksContext";

interface IModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function SwapTaskModal ({ isOpen, onRequestClose }:IModalProps) {
    const sectionsList = useContext(SectionsContext)

    const taskParent = useContext(TaskParentContext)
    const taskName = useContext(TaskNameContext)

    const tasksList = useContext(TasksContext)
    const setTasksList = useContext(SetTasksContext)

    function handleSwap (dest: string) {
        setTasksList([...tasksList.filter(task => (task.name !== taskName)), {name: taskName, parent: dest}])
    }

    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className={'react-modal-content'}>
            <SwapContainer>

                <button className="close"><img src={closeImg} alt="X" onClick={ e => {
                    onRequestClose()
                }}/></button>

                <button onClick={() => {
                    handleSwap('admin')
                    onRequestClose()
                }} disabled={taskParent === 'admin' ? true : false}><img src={swapImg} alt="swap" className="swap"/>Admin</button>

                <button onClick={() => {
                    handleSwap('todo')
                    onRequestClose()
                }} disabled={taskParent === 'todo' ? true : false}><img src={swapImg} alt="swap" className="swap"/>To Do</button>

                <button onClick={() => {
                    handleSwap('doing')
                    onRequestClose()
                }} disabled={taskParent === 'doing' ? true : false}><img src={swapImg} alt="swap" className="swap"/>Doing</button>

                <button onClick={() => {
                    handleSwap('done')
                    onRequestClose()
                }} disabled={taskParent === 'done' ? true : false}><img src={swapImg} alt="swap" className="swap"/>Done</button>

                {sectionsList.map(section => (
                    <button onClick={() => {
                        handleSwap(section)
                        onRequestClose()
                    }} disabled={taskParent === section ? true : false}><img src={swapImg} alt="swap" className="swap"/>{section}</button>
                ))}

            </SwapContainer>
        </ReactModal>
    )
}