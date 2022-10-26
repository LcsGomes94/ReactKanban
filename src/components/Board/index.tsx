import { AdminSection } from "../AdminSection";
import { TaskSection } from "../TaskSection";
import { BoardContainer } from "./styles";
import { Task } from "../Task";
import { useContext } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { DndContext, closestCorners, DragEndEvent, PointerSensor, useSensors, useSensor } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { SectionsContext } from '../TaskSection/SectionContext'
import { SetTasksContext, TasksContext } from '../Task/TasksContext'

export function Board () {
    const extraSections = useContext(SectionsContext)
    const tasksList = useContext(TasksContext)
    const setTasksList = useContext(SetTasksContext)

    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: {distance: 1} }))

    function handleDragEnd (event: DragEndEvent) {
        const { active, over } = event
        
        if (over) {
            if (active.id !== over.id) {
            const items = tasksList.map(task => task.name)
            const activeIndex = items.indexOf(String(active.id))
            const overIndex = items.indexOf(String(over.id))
            const newTasks = arrayMove(tasksList, activeIndex, overIndex)
            setTasksList(newTasks)
            }
        }
    }

    const [animate] = useAutoAnimate<HTMLDivElement>()

    return (
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
        <BoardContainer ref={animate}>


        <SortableContext items={tasksList.filter(task => task.parent === 'admin').map(task => task.name)} strategy={verticalListSortingStrategy}>
            <AdminSection>
                {tasksList.filter(task => task.parent === 'admin')
                .map(task => (
                    <Task task={task} key={task.name} id={task.name}></Task>
                ))}
            </AdminSection>
        </SortableContext>
            
        <SortableContext items={tasksList.filter(task => task.parent === 'todo').map(task => task.name)} strategy={verticalListSortingStrategy}>
            <TaskSection sectionLabel='To Do' sectionType='todo'>
                {tasksList.filter(task => task.parent === 'todo')
                .map(task => (
                    <Task task={task} key={task.name} id={task.name}></Task>
                ))}
            </TaskSection>
        </SortableContext>

        <SortableContext items={tasksList.filter(task => task.parent === 'doing').map(task => task.name)} strategy={verticalListSortingStrategy}>
            <TaskSection sectionLabel='Doing' sectionType='doing'>
                {tasksList.filter(task => task.parent === 'doing')
                .map(task => (
                    <Task task={task} key={task.name} id={task.name}></Task>
                ))}
            </TaskSection>
        </SortableContext>

        <SortableContext items={tasksList.filter(task => task.parent === 'done').map(task => task.name)} strategy={verticalListSortingStrategy}>
            <TaskSection sectionLabel='Done' sectionType='done'>
                {tasksList.filter(task => task.parent === 'done')
                .map(task => (
                    <Task task={task} key={task.name} id={task.name}></Task>
                ))}
            </TaskSection>
        </SortableContext>
                    
            {extraSections.map(section => (
                <SortableContext items={tasksList.filter(task => task.parent === section).map(task => task.name)} strategy={verticalListSortingStrategy}>
                    <TaskSection sectionLabel={section} sectionType='extra' key={section}>
                    {tasksList.filter(task => task.parent === section)
                    .map(task => (
                        <Task task={task} key={task.name} id={task.name}></Task>
                    ))}
                    </TaskSection>
                </SortableContext>
            ))}

        </BoardContainer>

        </DndContext>
    )
}