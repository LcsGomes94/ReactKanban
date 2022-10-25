import { AdminSection } from "../AdminSection";
import { TaskSection } from "../TaskSection";
import { BoardContainer } from "./styles";
import { Task } from "../Task";
import { useContext } from "react";

import { SectionsContext } from '../TaskSection/SectionContext'
import { TasksContext } from '../Task/TasksContext'

export function Board () {
    const extraSections = useContext(SectionsContext)
    const tasksList = useContext(TasksContext)

    return (
        <BoardContainer>
            <AdminSection>
                {tasksList.filter(task => task.parent === 'admin')
                .map((task, i) => (
                    <Task task={task} key={i} ></Task>
                ))}
            </AdminSection>

            <TaskSection sectionLabel='To Do' sectionType='todo'>
                {tasksList.filter(task => task.parent === 'todo')
                .map((task, i) => (
                    <Task task={task} key={i} ></Task>
                ))}
            </TaskSection>

            <TaskSection sectionLabel='Doing' sectionType='doing'>
                {tasksList.filter(task => task.parent === 'doing')
                .map((task, i) => (
                    <Task task={task} key={i} ></Task>
                ))}
            </TaskSection>

            <TaskSection sectionLabel='Done' sectionType='done'>
                {tasksList.filter(task => task.parent === 'done')
                .map((task, i) => (
                    <Task task={task} key={i} ></Task>
                ))}
            </TaskSection>
                    
            {extraSections.map((section, i) => (
                <TaskSection sectionLabel={section} sectionType='extra' key={i}>
                {tasksList.filter(task => task.parent === section)
                .map((task, i) => (
                    <Task task={task} key={i} ></Task>
                ))}
                </TaskSection>
            ))}
        </BoardContainer>
    )
}