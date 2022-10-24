import { AdminSection } from "../AdminSection";
import { TaskSection } from "../TaskSection";
import { BoardContainer } from "./styles";
import { Task } from "../Task";
import { useContext, useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

import { SectionsContext } from '../TaskSection/SectionContext'
import { TasksContext } from '../Task/TasksContext'

export function Board () {
    const extraSections = useContext(SectionsContext)
    const tasksList = useContext(TasksContext)

    const [ freshTasks, setFreshTasks ] = useState<string[]>(['Task teste 1', 'Task teste 2', 'Task teste 3'])
    const [ todoTasks, setTodoTasks ] = useState<string[]>(['Task teste 4', 'Task teste 5', 'Task teste 6'])
    const [ doingTasks, setDoingTasks ] = useState<string[]>(['task 1'])
    const [ doneTasks, setDoneTasks ] = useState<string[]>(['task 33'])

    function handleDragEnd (event: DragEndEvent) {
        const { active, over } = event

        if (over && active.id !== over.id) {
            const activeID = String(active.id)
            const overID = String(over.id)

            if (freshTasks.includes(overID)) {
                setFreshTasks(tasks => {
                    const activeIndex = tasks.indexOf(activeID)
                    const overIndex = tasks.indexOf(overID)

                    return (
                        freshTasks.includes(activeID)
                        ? arrayMove(tasks, activeIndex, overIndex)
                        : ([...tasks].splice(overIndex, 0, activeID))
                    )
                })
            }
            else if (todoTasks.includes(overID)) {
                setTodoTasks(tasks => {
                    const activeIndex = tasks.indexOf(activeID)
                    const overIndex = tasks.indexOf(overID)

                    return arrayMove(tasks, activeIndex, overIndex)
                })
            }
            else if (doingTasks.includes(overID)) {
                setDoingTasks(tasks => {
                    const activeIndex = tasks.indexOf(activeID)
                    const overIndex = tasks.indexOf(overID)

                    return arrayMove(tasks, activeIndex, overIndex)
                })
            }
            else if (doneTasks.includes(overID)) {
                setDoneTasks(tasks => {
                    const activeIndex = tasks.indexOf(activeID)
                    const overIndex = tasks.indexOf(overID)

                    return arrayMove(tasks, activeIndex, overIndex)
                })
            }
            else console.log('nada')
        }
    }

    return (
        <BoardContainer>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={[...freshTasks, ...todoTasks, ...doingTasks, ...doneTasks]} strategy={verticalListSortingStrategy}>
                    <AdminSection>
                        {tasksList.filter(task => task.parent === 'admin')
                        .map((task, i) => (
                            <Task taskText={task.name} key={i}></Task>
                        ))}
                    </AdminSection>

                    <TaskSection sectionLabel='To Do' sectionType='todo'>
                        {tasksList.filter(task => task.parent === 'todo')
                        .map((task, i) => (
                            <Task taskText={task.name} key={i}></Task>
                        ))}
                    </TaskSection>

                    <TaskSection sectionLabel='Doing' sectionType='doing'>
                        {tasksList.filter(task => task.parent === 'doing')
                        .map((task, i) => (
                            <Task taskText={task.name} key={i}></Task>
                        ))}
                    </TaskSection>

                    <TaskSection sectionLabel='Done' sectionType='done'>
                        {tasksList.filter(task => task.parent === 'done')
                        .map((task, i) => (
                            <Task taskText={task.name} key={i}></Task>
                        ))}
                    </TaskSection>
                    
                    {extraSections.map((section, i) => (
                        <TaskSection sectionLabel={section} sectionType='extra' key={i}>
                        {tasksList.filter(task => task.parent === section)
                        .map((task, i) => (
                            <Task taskText={task.name} key={i}></Task>
                        ))}
                        </TaskSection>
                    ))}
                </SortableContext>
            </DndContext>
        </BoardContainer>
    )
}