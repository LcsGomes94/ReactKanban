import { TaskContainer } from "./styles";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import pinImg from "../../assets/pin.svg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ITaskProps {
    taskText: string;
}

export function Task ({ taskText }: ITaskProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: taskText })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TaskContainer className='task'>
                <p>{taskText}</p>
                <div>
                    <button><img src={editImg} alt="Edit" /></button>
                    <button><img src={deleteImg} alt="Delete" /></button>
                </div>
                <img src={pinImg} alt="" className="pin" />
            </TaskContainer>
        </div>
    )
}