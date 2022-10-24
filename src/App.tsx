import { Board } from "./components/Board";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { HandleOpenContext, HandleTitleContext, InputContext, SetInputContext } from './components/Modal/ModalContext'
import { TasksContext, SetTasksContext } from './components/Task/TasksContext'
import { SectionsContext, SetSectionsContext } from './components/TaskSection/SectionContext'
import { Modal } from "./components/Modal";

interface ITask {
  name: string
  parent: string
}

export function App() {
  const [ isMoldalOpen, setIsModalOpen ] = useState(false)
  const [ modalTitle, setModalTitle ] = useState('')
  const [ inputValue, setInputValue ] = useState('')

  const [ taskList, setTaskList ] = useState<ITask[]>([])
  const [ sectionList, setSectionList ] = useState<string[]>([])
  
  function handleOpenModal () {
      setIsModalOpen(true)
  }
    
  function handleCloseModal () {
      setIsModalOpen(false)
  }
    
  return (
    <HandleOpenContext.Provider value={handleOpenModal}>
    <HandleTitleContext.Provider value={setModalTitle}>
    <InputContext.Provider value={inputValue}>
    <SetInputContext.Provider value={setInputValue}>
    <TasksContext.Provider value={taskList}>
    <SetTasksContext.Provider value={setTaskList}>
    <SectionsContext.Provider value={sectionList}>
    <SetSectionsContext.Provider value={setSectionList}>
    <GlobalStyle />
      <Modal isOpen={isMoldalOpen} onRequestClose={handleCloseModal} title={modalTitle}/>
      <Board />
    </SetSectionsContext.Provider>
    </SectionsContext.Provider>
    </SetTasksContext.Provider>
    </TasksContext.Provider>
    </SetInputContext.Provider>
    </InputContext.Provider>
    </HandleTitleContext.Provider>
    </HandleOpenContext.Provider>
  );
}