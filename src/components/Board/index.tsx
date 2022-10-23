import { AdminSection } from "../AdminSection";
import { TaskSection } from "../TaskSection";
import { BoardContainer } from "./styles";
import { Task } from "../Task";
import { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

export function Board () {
    const [ freshTasks, setFreshTasks ] = useState<string[]>(['Task teste 1', 'Task teste 2', 'Task teste 3'])
    const [ todoTasks, setTodoTasks ] = useState<string[]>([])
    const [ doingTasks, setDoingTasks ] = useState<string[]>([])
    const [ doneTasks, setDoneTasks ] = useState<string[]>([])

    function handleDragEnd (event: DragEndEvent) {
        console.log(event.active, event.over)
    }

    return (
        <BoardContainer>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <AdminSection>
                    {freshTasks.map((task, i) => (
                        <Task taskText={task} key={i + task} id={i + task}></Task>
                    ))}
                </AdminSection>
                <TaskSection sectionLabel='To Do' sectionType='todo'>
                    {todoTasks.map((task, i) => (
                        <Task taskText={task} key={i} id={i + task}></Task>
                    ))}
                </TaskSection>
                <TaskSection sectionLabel='Doing' sectionType='doing'>
                    {doingTasks.map((task, i) => (
                        <Task taskText={task} key={i} id={i + task}></Task>
                    ))}
                </TaskSection>
                <TaskSection sectionLabel='Done' sectionType='done'>
                    {doneTasks.map((task, i) => (
                        <Task taskText={task} key={i} id={i + task}></Task>
                    ))}
                </TaskSection>
            </DndContext>
        </BoardContainer>
    )
}