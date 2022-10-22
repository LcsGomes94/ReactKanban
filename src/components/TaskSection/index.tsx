import { TaskSectionBody, TaskSectionContainer, TaskSectionHeader } from "./styles";

interface ITaskSectionProps {
    sectionLabel: string
    sectionType: string
}

export function TaskSection ({ sectionLabel, sectionType }: ITaskSectionProps) {
    return (
        <TaskSectionContainer>
            <TaskSectionHeader className={sectionType}>
                <h2>{sectionLabel}</h2>
            </TaskSectionHeader>
            <TaskSectionBody className={sectionType + '-fade'}>
                <h2>Task 1</h2>
                <h2>Task 2</h2>
            </TaskSectionBody>
        </TaskSectionContainer>
    )
}