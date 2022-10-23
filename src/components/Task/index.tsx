import { TaskContainer } from "./styles";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ITaskProps {
    taskText: string;
    id: string;
}

export function Task ({ taskText, id }: ITaskProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TaskContainer className='task'>
                <p>{taskText}</p>
                <div>
                    <button><img src={editImg} alt="Edit" /></button>
                    <button><img src={deleteImg} alt="Delete" /></button>
                </div>
            </TaskContainer>
        </div>
    )
}