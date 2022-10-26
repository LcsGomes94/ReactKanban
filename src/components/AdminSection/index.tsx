import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useContext } from "react";
import { HandleOpenContext, HandleTitleContext, SetInputContext } from "../Modal/ModalContext";
import { AdminSectionContainer } from "./styles";

interface IAdminSectionProps {
    children?: React.ReactNode
}

export function AdminSection ({ children }: IAdminSectionProps) {
    const handleOpenModal = useContext(HandleOpenContext)
    const setModalTitle = useContext(HandleTitleContext)
    const setInputValue = useContext(SetInputContext)

    const [animate] = useAutoAnimate<HTMLDivElement>()

    return (
        <AdminSectionContainer>
            <h1>Kanban Board</h1>
            <div ref={animate}>
                {children}
            </div>
            <ul>
                <li><button onClick={() => {
                    setModalTitle('Create New Task')
                    setInputValue('')
                    handleOpenModal()
                }}>+ Create New Task</button></li>
                <li><button onClick={() => {
                    setModalTitle('Create New Section')
                    setInputValue('')
                    handleOpenModal()
                }}>+ Create New Section</button></li>
            </ul>
        </AdminSectionContainer>
    )
}