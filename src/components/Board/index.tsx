import { AdminSection } from "../AdminSection";
import { TaskSection } from "../TaskSection";
import { BoardContainer } from "./styles";

export function Board () {
    return (
        <BoardContainer>
            <AdminSection />
            <TaskSection sectionLabel='To Do' sectionType='todo'/>
            <TaskSection sectionLabel='Doing' sectionType='doing'/>
            <TaskSection sectionLabel='Done' sectionType='done'/>
        </BoardContainer>
    )
}