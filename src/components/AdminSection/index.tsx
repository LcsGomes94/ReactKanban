import { AdminSectionContainer } from "./styles";

interface IAdminSectionProps {
    children: React.ReactNode
}

export function AdminSection ({ children }: IAdminSectionProps) {
    return (
        <AdminSectionContainer>
            <h1>Kanban Board</h1>
            <div>
                {children}
            </div>
            <ul>
                <li><button>+ Create New Task</button></li>
                <li><button>+ Create New Section</button></li>
            </ul>

        </AdminSectionContainer>
    )
}