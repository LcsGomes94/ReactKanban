import { Board } from "./components/Board";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { HandleOpenContext, HandleTitleContext, InputContext, SetInputContext } from './components/Modal/ModalContext'
import { TasksContext, SetTasksContext, TaskNameContext, SetTaskNameContext, TaskParentContext, SetTaskParentContext } from './components/Task/TasksContext'
import { SectionNameContext, SectionsContext, SetSectionNameContext, SetSectionsContext } from './components/TaskSection/SectionContext'
import { Modal } from "./components/Modal";
import { SwapTaskModal } from "./components/SwapTaskModal";
import { HandleOpenSwapModalContext } from "./components/SwapTaskModal/SwapModalContext";

interface ITask {
  name: string
  parent: string
}

export function App() {
  const [ isMoldalOpen, setIsModalOpen ] = useState(false)
  const [ modalTitle, setModalTitle ] = useState('')
  const [ inputValue, setInputValue ] = useState('')

  const [ isSwapMoldalOpen, setIsSwapModalOpen ] = useState(false)

  const [ taskName, setTaskName ] = useState('')
  const [ taskParent, setTaskParent ] = useState('')

  const [ sectionName, setSectionName ] = useState('')

  const [ taskList, setTaskList ] = useState<ITask[]>([])
  const [ sectionList, setSectionList ] = useState<string[]>([])
  
  function handleOpenModal () {
      setIsModalOpen(true)
  }
    
  function handleCloseModal () {
    setIsModalOpen(false)
  }

  function handleOpenSwapModal () {
    setIsSwapModalOpen(true)
  }
  
  function handleCloseSwapModal () {
    setIsSwapModalOpen(false)
  }
    
  return (
    <HandleOpenContext.Provider value={handleOpenModal}>
    <HandleOpenSwapModalContext.Provider value={handleOpenSwapModal}>
    <HandleTitleContext.Provider value={setModalTitle}>
    <InputContext.Provider value={inputValue}>
    <SetInputContext.Provider value={setInputValue}>
    <TasksContext.Provider value={taskList}>
    <SetTasksContext.Provider value={setTaskList}>
    <SectionsContext.Provider value={sectionList}>
    <SetSectionsContext.Provider value={setSectionList}>
    <TaskNameContext.Provider value={taskName}>
    <SetTaskNameContext.Provider value={setTaskName}>
    <TaskParentContext.Provider value={taskParent}>
    <SetTaskParentContext.Provider value={setTaskParent}>
    <SectionNameContext.Provider value={sectionName}>
    <SetSectionNameContext.Provider value={setSectionName}>
      <GlobalStyle />

      <Modal isOpen={isMoldalOpen} onRequestClose={handleCloseModal} title={modalTitle}/>
      <SwapTaskModal isOpen={isSwapMoldalOpen} onRequestClose={handleCloseSwapModal}/>
      <Board />
    </SetSectionNameContext.Provider>
    </SectionNameContext.Provider>
    </SetTaskParentContext.Provider>
    </TaskParentContext.Provider>
    </SetTaskNameContext.Provider>
    </TaskNameContext.Provider>
    </SetSectionsContext.Provider>
    </SectionsContext.Provider>
    </SetTasksContext.Provider>
    </TasksContext.Provider>
    </SetInputContext.Provider>
    </InputContext.Provider>
    </HandleTitleContext.Provider>
    </HandleOpenSwapModalContext.Provider>
    </HandleOpenContext.Provider>
  );
}