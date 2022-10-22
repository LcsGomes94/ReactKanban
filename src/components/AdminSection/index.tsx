import { AdminSectionContainer } from "./styles";

export function AdminSection () {
    return (
        <AdminSectionContainer>
            <h1>Kanban Board</h1>
            <div>
                Tasks here!
            </div>
            <ul>
                <li><button>+ Create New Task</button></li>
                <li><button>+ Create New Section</button></li>
            </ul>

        </AdminSectionContainer>
    )
}