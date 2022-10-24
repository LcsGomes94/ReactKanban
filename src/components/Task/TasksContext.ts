import { createContext, Dispatch, SetStateAction } from "react";

interface ITask {
    name: string
    parent: string
}

export const TasksContext = createContext<ITask[]>([]);
export const SetTasksContext = createContext<Dispatch<SetStateAction<ITask[]>>>(() => {});